"use client";

import { BoardContext, boardContext } from "../context";
import { useEffect, useState } from "react";

import type { Task } from "../types";

interface Props {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const handleTaskViewClose = () => setShowTaskDetails(false);
  const handleTaskViewOpen = () => setShowTaskDetails(true);

  const handleSetTask = (task: Task) => setCurrentTask(task);

  const handleTaskView = (state: boolean) => setShowTaskDetails(state);

  useEffect(() => {
    if (currentTask) {
      setShowTaskDetails(true);
    }
  }, [currentTask]);

  useEffect(() => {
    if (!showTaskDetails) {
      setCurrentTask(null);
    }
  }, [showTaskDetails, setCurrentTask]);

  useEffect(() => {
    async function getBoard() {
      try {
        const response = await fetch("http://localhost:3000/board/api/");
        const data = await response.json();
        setTasks(data.data.tasks);
        console.log({ data });
      } catch {}
    }
    getBoard();
  }, []);

  const value: BoardContext = {
    tasks,
    currentTask,
    showTaskDetails,
    handleTaskViewClose,
    handleTaskViewOpen,
    handleTaskView,
    handleSetTask,
  };

  return (
    <boardContext.Provider value={value}>{children}</boardContext.Provider>
  );
};
