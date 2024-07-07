"use client";

import { BoardContext, boardContext } from "../context";
import { useEffect, useState } from "react";

import type { Task } from "../types";
import axios from "axios";
import { toast } from "react-toastify";

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

  const deleteTask = async (taskId: string) => {
    try {
      await axios.delete(`/board/api/?taskId=${taskId}`);
      setTasks((tasks) => tasks && tasks.filter((task) => task.id !== taskId));
      toast.success("Task deleted");
    } catch (error) {
      console.log(error);
      toast.error("Delete error");
    }
  };

  const createTask = async (task: Task) => {
    try {
      await axios.post("/board/api", { ...task });
      setTasks((prev) => [...(prev ?? []), task]);
      toast.success("Task created");
    } catch {
      toast.error("Create error");
    }
  };

  const updateTask = async (task: Task) => {};

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
        const response = await fetch("/board/api/");
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
    createTask,
    updateTask,
    deleteTask,
    handleTaskViewClose,
    handleTaskViewOpen,
    handleTaskView,
    handleSetTask,
  };

  return (
    <boardContext.Provider value={value}>{children}</boardContext.Provider>
  );
};
