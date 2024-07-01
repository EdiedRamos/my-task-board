import { Close } from "../assets";
import { Label } from "./atoms";
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
        <form>
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
          </div>
          {/* Status */}
          <div>
            <Label text="Status" />
          </div>
        </form>
      </div>
    </div>
  );
};
