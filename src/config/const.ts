import { Task } from "@/app/board/[boardId]/types";

// * id values are the same during execution, but it does not matter 😋
export const DEFAULT_TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: "Task in progress",
    status: "progress",
    iconName: "Book",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Completed",
    status: "completed",
    iconName: "Computer",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Won't Do",
    status: "wontdo",
    iconName: "Dumbbell",
  },
  {
    id: crypto.randomUUID(),
    title: "Task To Do",
    status: "unknown",
    description: "Work on a Challenge on devChallenges.io, learn Typescript.",
    iconName: "Clock",
  },
];
