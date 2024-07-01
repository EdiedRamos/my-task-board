import type { Task } from "../types";
import { getStatusBg } from "../utils";
import { getStatusIcon } from "../utils/icons.utils";

interface Props extends Task {}

export const TaskPreview = ({ title, status, description }: Props) => {
  return (
    <div
      className={`flex justify-between items-start p-4 rounded-xl ${getStatusBg(
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
