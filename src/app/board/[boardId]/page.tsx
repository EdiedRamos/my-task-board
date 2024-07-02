import { AddTask, TaskGroup, TaskView, Title } from "./components";

const BoardPage = () => {
  return (
    <div className="w-full sm:w-[552px] mt-12">
      <Title />
      <TaskGroup />
      <AddTask />
      <TaskView />
    </div>
  );
};

export default BoardPage;
