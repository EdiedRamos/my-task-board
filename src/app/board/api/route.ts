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

  const collectionName = ENV.BOARD_COLLECTION ?? "";
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
  const collectionName = ENV.BOARD_COLLECTION ?? "";

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

// * Just for testing goals | Remove board cookie
export async function PATCH() {
  cookies().delete(COOKIES_VALUES.BOARD_ID);
  return Response.json({ message: "boardId cookie deleted" });
}
