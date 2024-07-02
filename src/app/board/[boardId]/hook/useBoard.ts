"use client";

import { boardContext } from "../context";
import { useContext } from "react";

export const useBoard = () => {
  const state = useContext(boardContext);
  if (!state) throw new Error("useBoard hook must to be inside boardContext");
  return state;
};
