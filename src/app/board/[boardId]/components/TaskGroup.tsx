"use client";

import { TaskPreview } from "./TaskPreview";
import { useBoard } from "../hook";

export const TaskGroup = () => {
  const { tasks } = useBoard();

  if (!tasks || tasks.length === 0) {
    return (
      <div>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col gap-5">
      {tasks.map((data) => (
        <TaskPreview key={data.id} {...data} />
      ))}
    </div>
  );
};
