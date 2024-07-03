"use client";

import { taskViewContext } from "../context";
import { useContext } from "react";

export const useTaskView = () => {
  const state = useContext(taskViewContext);
  if (!state) throw new Error("useTaskView must to be inside taskViewContext");
  return state;
};
