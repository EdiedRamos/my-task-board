"use client";

import { Close } from "../../assets";
import { TaskViewControl } from "./TaskViewControl";
import { TaskViewDescription } from "./TaskViewDescription";
import { TaskViewIcons } from "./TaskViewIcons";
import { TaskViewName } from "./TaskViewName";
import { TaskViewProvider } from "../../provider";
import { TaskViewStatus } from "./TaskViewStatus";
import { useBoard } from "../../hook/useBoard";

export const TaskView = () => {
  const {
    currentTask,
    showTaskDetails,
    handleTaskViewClose,
    handleTaskView,
    createTask,
    updateTask,
    deleteTask,
  } = useBoard();

  if (!showTaskDetails) return <></>;

  return (
    <TaskViewProvider
      baseTask={currentTask}
      handleShow={handleTaskView}
      handleCreateTask={createTask}
      handleUpdateTask={updateTask}
      handleDeleteTask={deleteTask}
    >
      <div className="fixed flex justify-end bg-cc-gray left-0 top-0 w-full min-h-screen">
        <div className="bg-cc-white w-full sm:w-[558px] m-3 rounded-lg p-3 flex flex-col overflow-y-auto max-h-screen">
          <div className="flex justify-between">
            <p className="font-medium text-cf-300">Task details</p>
            <button
              onClick={handleTaskViewClose}
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
    </TaskViewProvider>
  );
};
