import { COOKIES_VALUES, DEFAULT_TASKS, ENV } from "@/config";

import { NextRequest } from "next/server";
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { TaskSchema } from "../[boardId]/types/task.validation";
import { cookies } from "next/headers";
import { firebaseDB } from "@/libs";

async function createBoard() {
  const isSetted = cookies().get(COOKIES_VALUES.BOARD_ID);

  if (isSetted !== undefined) {
    return Response.json(
      { message: "Board already generated" },
      { status: 400 }
    );
  }

  const collectionName = ENV.BOARD_COLLECTION;
  const boardId = crypto.randomUUID();
  try {
    await firebaseDB
      .collection(collectionName)
      .doc(boardId)
      .set({ tasks: DEFAULT_TASKS });
  } catch (err) {
    console.error(err);
  }

  cookies().set(COOKIES_VALUES.BOARD_ID, boardId, { httpOnly: true });

  return Response.json({
    message: "Board found successfully",
    data: {
      boardId,
      tasks: DEFAULT_TASKS,
    },
  });
}

async function getBoard(boardCookie: RequestCookie) {
  const collectionName = ENV.BOARD_COLLECTION;

  const data = await firebaseDB
    .collection(collectionName)
    .doc(boardCookie.value)
    .get();

  if (!data.exists) {
    return Response.json({ message: "Board not found" }, { status: 404 });
  }

  return Response.json({
    message: "Board found successfully",
    data: {
      boardId: boardCookie.value,
      ...data.data(),
    },
  });
}

export async function GET(request: NextRequest) {
  const boardCookie = request.cookies.get(COOKIES_VALUES.BOARD_ID);

  return boardCookie === undefined ? createBoard() : getBoard(boardCookie);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = TaskSchema.safeParse(body);

    if (!validation.success) {
      return Response.json(
        { message: "Invalid data", error: validation.error.errors },
        { status: 400 }
      );
    }

    const boardCookie = request.cookies.get(COOKIES_VALUES.BOARD_ID);

    if (!boardCookie)
      return Response.json({
        message: `${COOKIES_VALUES.BOARD_ID} value is not defined in cookies`,
      });

    const documentRef = firebaseDB
      .collection(ENV.BOARD_COLLECTION)
      .doc(boardCookie.value);

    const document = await documentRef.get();

    if (!document.exists)
      return Response.json({ message: "Board not found" }, { status: 400 });

    const tasks = document.data();

    if (Array.isArray(tasks?.tasks)) {
      // * make sure the task has a not used uuid
      if (tasks.tasks.some((task) => task.id === body.id)) {
        return Response.json({ message: "Duplicate task id" }, { status: 400 });
      }

      tasks.tasks.push(body);
      await documentRef.update(tasks);
    }

    return Response.json({ message: "Task created successfully" });
  } catch (error) {
    let message = "Not error provided";
    if (error instanceof Error) message = error.message;
    return Response.json(
      { message: "Something went wrong", error: message },
      { status: 400 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = TaskSchema.safeParse(body);

    if (!validation.success) {
      return Response.json(
        { message: "Invalid data", error: validation.error.errors },
        { status: 400 }
      );
    }

    const boardCookie = request.cookies.get(COOKIES_VALUES.BOARD_ID);

    if (!boardCookie)
      return Response.json({
        message: `${COOKIES_VALUES.BOARD_ID} value is not defined in cookies`,
      });

    const documentRef = firebaseDB
      .collection(ENV.BOARD_COLLECTION)
      .doc(boardCookie.value);

    const document = await documentRef.get();

    if (!document.exists)
      return Response.json({ message: "Board not found" }, { status: 400 });

    const tasks = document.data();

    if (Array.isArray(tasks?.tasks)) {
      const taskTargetIndex = tasks.tasks.findIndex(
        (task) => task.id === body.id
      );

      if (!~taskTargetIndex)
        return Response.json({ message: "Not task found" }, { status: 404 });

      tasks.tasks[taskTargetIndex] = body;

      await documentRef.update(tasks);
    }

    return Response.json({ message: "Task updated successfully" });
  } catch (error) {
    let message = "Not error provided";
    if (error instanceof Error) message = error.message;
    return Response.json(
      { message: "Something went wrong", error: message },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const boardCookie = request.cookies.get(COOKIES_VALUES.BOARD_ID);
    const searchParams = request.nextUrl.searchParams;
    const taskId = searchParams.get("taskId");

    if (!boardCookie)
      return Response.json({
        message: `${COOKIES_VALUES.BOARD_ID} value is not defined in cookies`,
      });

    if (!taskId)
      return Response.json({ message: "TaskId is required" }, { status: 400 });

    const collectionName = ENV.BOARD_COLLECTION;
    const documentRef = firebaseDB
      .collection(collectionName)
      .doc(boardCookie.value);

    const document = await documentRef.get();

    if (!document.exists)
      return Response.json({ message: "Board not found" }, { status: 400 });

    // TODO: Generate data validators with Zod
    const tasks = document.data();

    console.log("😎", tasks?.tasks);

    if (Array.isArray(tasks?.tasks)) {
      const targetIndex = tasks.tasks.findIndex((task) => task.id === taskId);

      if (!~targetIndex) {
        return Response.json({ message: "Invalid taskId" }, { status: 400 });
      }

      tasks.tasks.splice(targetIndex, 1);

      await documentRef.update(tasks);

      console.log("borrado", tasks.tasks);
    } else {
      return Response.json(
        { message: "Could not delete the task" },
        { status: 400 }
      );
    }

    return Response.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// * Just for testing goals | Remove board cookie
export async function PATCH() {
  cookies().delete(COOKIES_VALUES.BOARD_ID);
  return Response.json({ message: "boardId cookie deleted" });
}
