import React from "react";
import type { Status } from "../types";
import { getStatusBg } from "../utils";

interface Props {
  title: string;
  status: Status;
}

export const TaskPreview = ({ title, status }: Props) => {
  return (
    <div className={`p-4 rounded-xl ${getStatusBg(status)}`}>
      <p className="font-bold text-cf-300">{title}</p>
    </div>
  );
};
