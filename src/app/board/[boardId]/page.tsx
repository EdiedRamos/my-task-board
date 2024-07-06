import "react-toastify/dist/ReactToastify.css";

import { AddTask, TaskGroup, TaskView, Title } from "./components";

import { BoardProvider } from "./provider";
import { ToastContainer } from "react-toastify";

interface Props {
  params: {
    boardId: string;
  };
}

const BoardPage = async (props: Props) => {
  return (
    <div className="w-full sm:w-[552px] mt-12">
      <ToastContainer position="top-left" theme="colored" />
      <BoardProvider>
        <Title />
        <TaskGroup />
        <AddTask />
        <TaskView />
      </BoardProvider>
    </div>
  );
};

export default BoardPage;
