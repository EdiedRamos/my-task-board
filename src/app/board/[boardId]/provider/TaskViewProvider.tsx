"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import type { Status, Task } from "../types";

import { IconsKey } from "../assets";
import { taskViewContext } from "../context";

interface Props {
  baseTask: Task | null;
  handleShow: (state: boolean) => void;
  children: React.ReactNode;
}

export const TaskViewProvider = ({ children, baseTask, handleShow }: Props) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [iconName, setIconName] = useState<IconsKey | null>(null);
  const [status, setStatus] = useState<Status | null>(null);

  const handleEventName = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskName(event.target.value);

  const handleEventDescription = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setTaskDescription(event.target.value);

  const handleClickIcon = (icon: IconsKey) => setIconName(icon);

  const handleClickStatus = (status: Status) => setStatus(status);

  const handleSave = () => {
    alert("Save in progress!");
  };

  const handleDelete = () => {
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
    handleDelete,
  };

  return (
    <taskViewContext.Provider value={value}>
      {children}
    </taskViewContext.Provider>
  );
};
