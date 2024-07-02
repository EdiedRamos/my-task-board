import type { Task } from "../types";
import { TaskPreview } from "./TaskPreview";

const MOCK: Task[] = [
  {
    id: "1",
    title: "Task in progress",
    status: "progress",
    iconName: "Book",
  },
  {
    id: "2",
    title: "Task Completed",
    status: "completed",
    iconName: "Computer",
  },
  {
    id: "3",
    title: "Task Won't Do",
    status: "wontdo",
    iconName: "Dumbbell",
  },
  {
    id: "4",
    title: "Task To Do",
    status: "unknown",
    description: "Work on a Challenge on devChallenges.io, learn Typescript.",
    iconName: "Clock",
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
