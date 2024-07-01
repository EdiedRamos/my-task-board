import type { Task } from "../types";
import { getStatusBg } from "../utils";

interface Props extends Task {}

export const TaskPreview = ({ title, status, description }: Props) => {
  return (
    <div className={`p-4 rounded-xl ${getStatusBg(status)}`}>
      <p className="font-bold text-cf-300">{title}</p>
      {description && <p>{description}</p>}
    </div>
  );
};
