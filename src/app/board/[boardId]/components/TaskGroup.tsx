import React from "react";
import type { Status } from "../types";
import { TaskPreview } from "./TaskPreview";

const MOCK: {
  id: string;
  title: string;
  status: Status;
}[] = [
  {
    id: "1",
    title: "Task in progress",
    status: "progress",
  },
  {
    id: "2",
    title: "Task Completed",
    status: "completed",
  },
  {
    id: "3",
    title: "Task Won't Do",
    status: "wontdo",
  },
];

export const TaskGroup = () => {
  return (
    <div className="mt-10 flex flex-col gap-5">
      {MOCK.map((data) => (
        <TaskPreview key={data.id} {...data} />
      ))}
    </div>
  );
};
