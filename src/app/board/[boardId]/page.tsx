import { AddTask, TaskGroup, TaskView, Title } from "./components";

import { BoardProvider } from "./provider";

const BoardPage = () => {
  return (
    <div className="w-full sm:w-[552px] mt-12">
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
