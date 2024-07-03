"use client";

import React, { ChangeEvent, useState } from "react";

import { IconsKey } from "../assets";
import { Status } from "../types";
import { taskViewContext } from "../context";

interface Props {
  children: React.ReactNode;
}

export const TaskViewProvider = ({ children }: Props) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [iconName, setIconName] = useState<IconsKey | null>(null);
  const [status, setStatus] = useState<Status | null>(null);

  const handleEventName = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskName(event.target.value);

  const handleEventDescription = (event: ChangeEvent<HTMLInputElement>) =>
    setTaskDescription(event.target.value);

  const handleClickIcon = (icon: IconsKey) => setIconName(icon);

  const handleClickStatus = (status: Status) => setStatus(status);

  const handleSave = () => {};
  const handleDelete = () => {};

  const value = {
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
