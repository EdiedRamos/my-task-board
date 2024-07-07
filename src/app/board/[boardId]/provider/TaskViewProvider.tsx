"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import type { Status, Task } from "../types";

import { IconsKey } from "../assets";
import { taskViewContext } from "../context";
import { toast } from "react-toastify";

interface Props {
  baseTask: Task | null;
  handleShow: (state: boolean) => void;
  handleCreateTask: (task: Task) => void;
  handleDeleteTask: (taskId: string) => void;
  children: React.ReactNode;
}

export const TaskViewProvider = ({
  children,
  baseTask,
  handleShow,
  handleCreateTask,
  handleDeleteTask,
}: Props) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [iconName, setIconName] = useState<IconsKey | null>(null);
  const [status, setStatus] = useState<Status | null>(null);

  const validateTask = (): void => {
    if (taskName.trim().length === 0) throw new Error("Task name is required");
    if (!status) throw new Error("Status is required");
  };

  const handleEventName = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskName(event.target.value);

  const handleEventDescription = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setTaskDescription(event.target.value);

  const handleClickIcon = (icon: IconsKey) => setIconName(icon);

  const handleClickStatus = (status: Status) => setStatus(status);

  const handleSave = () => {
    try {
      validateTask();
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: taskName,
        status: status!,
      };
      handleCreateTask(newTask);
      handleShow(false);
    } catch (error) {
      if (!(error instanceof Error)) {
        toast.error("Something went wrong");
        return;
      }
      toast.error(error.message);
    }
  };

  const handleUpdate = () => {
    toast.warn("UPDATE in progress");
  };

  const handleDelete = () => {
    if (!baseTask) {
      toast.error("No task id found!");
      return;
    }

    handleDeleteTask(baseTask.id);
    handleShow(false);
  };

  const setInitialTask = useCallback((task: Task) => {
    setTaskName(task.title);
    setTaskDescription(task.description ?? "");
    setIconName(task.iconName ?? null);
    setStatus(task.status);
  }, []);

  useEffect(() => {
    if (!baseTask) return;
    setInitialTask(baseTask);
  }, [baseTask, setInitialTask]);

  const value = {
    currentTask: baseTask,
    taskName,
    taskDescription,
    iconName,
    status,
    handleEventName,
    handleEventDescription,
    handleClickIcon,
    handleClickStatus,
    handleSave,
    handleUpdate,
    handleDelete,
  };

  return (
    <taskViewContext.Provider value={value}>
      {children}
    </taskViewContext.Provider>
  );
};
