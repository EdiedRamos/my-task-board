import {
  Book,
  Clock,
  Close,
  Close1,
  Comment,
  Computer,
  Done,
  DoneRound,
  Dumbbell,
  MugHot,
  Time,
  Trash,
} from "../assets";
import { IconButton, Label, SqureIcon, StatusButton } from "./atoms";

import React from "react";

export const TaskView = () => {
  return (
    <div className="absolute flex justify-end bg-cc-gray left-0 top-0 w-full min-h-screen">
      <div className="bg-cc-white w-full sm:w-[558px] m-3 rounded-lg p-3 flex flex-col">
        <div className="flex justify-between">
          <p className="font-medium text-cf-300">Task deatils</p>
          <button className="border p-1 rounded-lg">
            <Close />
          </button>
        </div>
        <div>
          {/* Task name */}
          <div className="mt-4">
            <Label text="Task name">
              <input
                placeholder="Enter task name"
                className="px-[14px] py-[10px] rounded-lg border-2 outline-none focus:border-cc-blue"
                type="text"
                name="name"
              />
            </Label>
          </div>
          {/* Task description */}
          <div className="mt-5">
            <Label text="Description">
              <textarea
                placeholder="Enter a short description"
                className="h-[150px] resize-none border-2 rounded-lg px-[14px] py-[10px] outline-none focus:border-cc-blue"
                name="description"
              />
            </Label>
          </div>
          {/* Icons */}
          <div className="mt-5">
            <Label text="Icon" />
            <div className="flex gap-3 flex-wrap mt-2">
              <IconButton icon={<Computer className="w-5" />} />
              <IconButton icon={<Comment className="w-5" />} />
              <IconButton icon={<MugHot className="w-5" />} />
              <IconButton icon={<Dumbbell className="w-5" />} />
              <IconButton icon={<Book className="w-5" />} />
              <IconButton icon={<Clock className="w-5" />} />
            </div>
          </div>
          {/* Status */}
          <div className="mt-5">
            <Label text="Status" />
            <div className="grid grid-cols-2 gap-4">
              <StatusButton
                icon={<SqureIcon icon={<Time />} className="bg-cc-orange" />}
                text="In Progress"
              />
              <StatusButton
                icon={<SqureIcon icon={<Done />} className="bg-cc-green" />}
                text="Completed"
              />
              <StatusButton
                icon={<SqureIcon icon={<Close1 />} className="bg-cc-red" />}
                text="Won't Do"
              />
            </div>
          </div>
          {/* Control */}
          <div className="flex flex-wrap gap-4 justify-end mt-14">
            <button className="flex items-center gap-1 px-6 py-2 bg-cc-dark-gray rounded-3xl text-white text-cf-100 font-medium">
              Delete <Trash />
            </button>
            <button className="flex items-center gap-1 px-6 py-2 bg-cc-blue rounded-3xl text-white text-cf-100 font-medium">
              Save <DoneRound />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
