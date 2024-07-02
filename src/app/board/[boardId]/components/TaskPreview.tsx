"use client";

import type { Task } from "../types";
import { getStatusBg } from "../utils";
import { getStatusIcon } from "../utils/icons.utils";
import { useBoard } from "../hook/useBoard";

interface Props extends Task {}

export const TaskPreview = ({ title, status, description }: Props) => {
  const boardState = useBoard();

  return (
    <div
      onClick={boardState.handleTaskViewOpen}
      className={`flex hover:cursor-pointer active:scale-105 select-none justify-between items-start p-4 rounded-xl transition-all ${getStatusBg(
        status
      )}`}
    >
      <div className="self-center">
        <p className="font-bold text-cf-300">{title}</p>
        {description && <p>{description}</p>}
      </div>
      {getStatusIcon(status)}
    </div>
  );
};
