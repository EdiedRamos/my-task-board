"use client";

import { Add } from "../assets";
import { useBoard } from "../hook/useBoard";

export const AddTask = () => {
  const boardState = useBoard();

  return (
    <div
      onClick={boardState.handleTaskViewOpen}
      className="flex hover:cursor-pointer select-none active:scale-105 transition-all items-center gap-3 bg-cc-cream w-full p-4 rounded-xl mt-5 mb-5"
    >
      <div className="bg-cc-orange rounded-xl p-3">
        <Add />
      </div>
      <p className="font-bold">Add new task</p>
    </div>
  );
};
