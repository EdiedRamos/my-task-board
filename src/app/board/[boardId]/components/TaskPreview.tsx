"use client";

import { IconPreview } from "./atoms";
import { Icons } from "../assets";
import type { Task } from "../types";
import { getStatusBg } from "../utils";
import { getStatusIcon } from "../utils/icons.utils";
import { useBoard } from "../hook/useBoard";

interface Props extends Task {}

export const TaskPreview = ({
  title,
  status,
  description,
  iconName,
}: Props) => {
  const boardState = useBoard();

  return (
    <div
      onClick={boardState.handleTaskViewOpen}
      className={`flex  gap-3 hover:cursor-pointer active:scale-105 select-none justify-between items-start p-4 rounded-xl transition-all ${getStatusBg(
        status
      )}`}
    >
      <div className="flex gap-3 items-start">
        {iconName && (
          <IconPreview icon={Icons[iconName]({ className: "w-5 h-5" })} />
        )}
        <div className="self-center">
          <p className="font-bold text-cf-300">{title}</p>
          {description && <p>{description}</p>}
        </div>
      </div>
      {getStatusIcon(status)}
    </div>
  );
};
