import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/board/my-task-board");
};

export default HomePage;
