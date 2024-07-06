"use client";

import { BoardContext, boardContext } from "../context";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

import type { Task } from "../types";

interface Props {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
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

  useEffect(() => {
    // const boardId = getCookie("board_id");
    // alert(boardId);
  }, []);

  const value: BoardContext = {
    tasks,
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
