import { COOKIES_VALUES, DEFAULT_TASKS, ENV } from "@/config";

import { cookies } from "next/headers";
import { firebaseDB } from "@/libs";

// * Generate a new board
export async function POST() {
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

  return Response.json(
    {
      message: "Board created successfully",
      data: {
        boardId,
        tasks: DEFAULT_TASKS,
      },
    },
    { status: 201 }
  );
}

export async function GET() {
  const boardId = cookies().get(COOKIES_VALUES.BOARD_ID)?.value;
  const collectionName = ENV.BOARD_COLLECTION ?? "";

  if (!boardId) {
    return Response.json(
      { message: "boardId value is not defined inside cookies" },
      { status: 400 }
    );
  }

  const data = await firebaseDB.collection(collectionName).doc(boardId).get();

  if (!data.exists) {
    return Response.json({ message: "Board not found" }, { status: 404 });
  }

  return Response.json({
    message: "Board found successfully",
    data: data.data(),
  });
}
