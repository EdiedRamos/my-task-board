import { createContext } from "react";

export interface BoardContext {
  showTaskDetails: boolean;
  handleTaskViewClose: () => void;
  handleTaskViewOpen: () => void;
}

export const boardContext = createContext<BoardContext | null>(null);
