import type { Task } from "../types";
import { createContext } from "react";

export interface BoardContext {
  currentTask: Task | null;
  showTaskDetails: boolean;
  handleTaskViewClose: () => void;
  handleTaskViewOpen: () => void;
  handleSetTask: (task: Task) => void;
}

export const boardContext = createContext<BoardContext | null>(null);
