"use client";

import { BoardContext, boardContext } from "../context";
import { useEffect, useState } from "react";

import type { Task } from "../types";

interface Props {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: Props) => {
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const handleTaskViewClose = () => {
    setShowTaskDetails(false);
    if (currentTask) {
      setCurrentTask(null);
    }
  };
  const handleTaskViewOpen = () => setShowTaskDetails(true);

  const handleSetTask = (task: Task) => setCurrentTask(task);

  useEffect(() => {
    if (currentTask) {
      setShowTaskDetails(true);
    }
  }, [currentTask]);

  const value: BoardContext = {
    currentTask,
    showTaskDetails,
    handleTaskViewClose,
    handleTaskViewOpen,
    handleSetTask,
  };

  return (
    <boardContext.Provider value={value}>{children}</boardContext.Provider>
  );
};
