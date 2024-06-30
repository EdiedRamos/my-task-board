import { AddTask, Title } from "./components";

const BoardPage = () => {
  return (
    <div className="w-full sm:w-[552px] mt-12">
      <Title />
      <AddTask />
    </div>
  );
};

export default BoardPage;
