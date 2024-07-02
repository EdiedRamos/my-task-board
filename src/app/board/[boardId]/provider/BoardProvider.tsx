"use client";

import { BoardContext, boardContext } from "../context";

import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: Props) => {
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);

  const handleTaskViewClose = () => setShowTaskDetails(false);
  const handleTaskViewOpen = () => setShowTaskDetails(true);

  const value: BoardContext = {
    showTaskDetails,
    handleTaskViewClose,
    handleTaskViewOpen,
  };

  return (
    <boardContext.Provider value={value}>{children}</boardContext.Provider>
  );
};
