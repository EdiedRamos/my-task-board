import {
  Book,
  Clock,
  Close,
  Comment,
  Computer,
  Dumbbell,
  MugHot,
} from "../assets";
import { IconButton, Label } from "./atoms";

import React from "react";

export const TaskView = () => {
  return (
    <div className="absolute flex justify-end bg-cc-gray left-0 top-0 w-full min-h-screen">
      <div className="bg-cc-white w-full sm:w-[558px] m-3 rounded-lg p-3">
        <div className="flex justify-between">
          <p className="font-medium">Task deatils</p>
          <button className="border p-1 rounded-lg">
            <Close />
          </button>
        </div>
        <div>
          {/* Task name */}
          <Label text="Task name">
            <input type="text" name="name" />
          </Label>
          {/* Task description */}
          <Label text="Description">
            <textarea className="h-[150px] resize-none" name="description" />
          </Label>
          {/* Icons */}
          <div>
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
          <div>
            <Label text="Status" />
          </div>
        </div>
      </div>
    </div>
  );
};
