import { COOKIES_VALUES, DEFAULT_TASKS, ENV } from "@/config";

import { NextRequest } from "next/server";
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
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
