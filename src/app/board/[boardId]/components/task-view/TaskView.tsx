"use client";

import { Close } from "../../assets";
import { TaskViewControl } from "./TaskViewControl";
import { TaskViewDescription } from "./TaskViewDescription";
import { TaskViewIcons } from "./TaskViewIcons";
import { TaskViewName } from "./TaskViewName";
import { TaskViewStatus } from "./TaskViewStatus";
import { useBoard } from "../../hook/useBoard";

export const TaskView = () => {
  const boardState = useBoard();

  if (!boardState.showTaskDetails) return <></>;

  return (
    <div className="absolute flex justify-end bg-cc-gray left-0 top-0 w-full min-h-screen">
      <div className="bg-cc-white w-full sm:w-[558px] m-3 rounded-lg p-3 flex flex-col">
        <div className="flex justify-between">
          <p className="font-medium text-cf-300">Task deatils</p>
          <button
            onClick={boardState.handleTaskViewClose}
            className="border p-1 rounded-lg active:scale-105 transition-all hover:bg-slate-100"
          >
            <Close />
          </button>
        </div>
        <div>
          <TaskViewName />
          <TaskViewDescription />
          <TaskViewIcons />
          <TaskViewStatus />
          <TaskViewControl />
        </div>
      </div>
    </div>
  );
};
