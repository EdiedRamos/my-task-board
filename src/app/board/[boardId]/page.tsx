import { AddTask, TaskGroup, TaskView, Title } from "./components";

import { BoardProvider } from "./provider";
import { getTasksByBoardId } from "../actions";

interface Props {
  params: {
    boardId: string;
  };
}

const BoardPage = async (props: Props) => {
  const res = await getTasksByBoardId(props.params.boardId);

  console.log({ res });

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
