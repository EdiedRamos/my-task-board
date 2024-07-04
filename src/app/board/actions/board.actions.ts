import { firebaseAdmin } from "@/libs";

export async function getTasksByBoardId(boardId: string): Promise<string> {
  firebaseAdmin
    .getDataBase()
    .collection("tasks")
    .doc(boardId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
      } else {
        console.log("doc not found");
      }
    });
  return "First";
}
