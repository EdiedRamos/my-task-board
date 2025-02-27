"use client";

import { IconPreview } from "./atoms";
import { Icons } from "../assets";
import type { Task } from "../types";
import { getStatusBg } from "../utils";
import { getStatusIcon } from "../utils/icons.utils";
import { useBoard } from "../hook/useBoard";

interface Props extends Task {}

export const TaskPreview = (task: Props) => {
  const boardState = useBoard();

  return (
    <div
      onClick={() => boardState.handleSetTask(task)}
      className={`flex gap-3 hover:scale-95 hover:cursor-pointer select-none justify-between items-start p-4 rounded-xl transition-all ${getStatusBg(
        task.status
      )}`}
    >
      <div className="flex gap-3 items-start">
        {task.iconName && (
          <IconPreview icon={Icons[task.iconName]({ className: "w-5 h-5" })} />
        )}
        <div className="self-center">
          <p className="font-bold text-cf-300">{task.title}</p>
          {task.description && <p>{task.description}</p>}
        </div>
      </div>
      {getStatusIcon(task.status)}
    </div>
  );
};
