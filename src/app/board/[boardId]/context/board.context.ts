import type { Task } from "../types";
import { createContext } from "react";

export interface BoardContext {
  tasks: Task[] | null;
  currentTask: Task | null;
  showTaskDetails: boolean;
  createTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  handleTaskView: (state: boolean) => void;
  handleTaskViewClose: () => void;
  handleTaskViewOpen: () => void;
  handleSetTask: (task: Task) => void;
}

export const boardContext = createContext<BoardContext | null>(null);
