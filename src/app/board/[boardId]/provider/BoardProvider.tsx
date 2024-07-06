"use client";

import { BoardContext, boardContext } from "../context";
import { useEffect, useState } from "react";

import type { Task } from "../types";

interface Props {
  children: React.ReactNode;
}

const DEFAULT_TASKS: Task[] = [
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

export const BoardProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[] | null>(DEFAULT_TASKS);
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
