import React from "react";
import { TaskActionButton } from "../atoms";
import { Trash } from "../../assets";

export const TaskViewControl = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-end mt-14">
      <TaskActionButton
        className="bg-cc-dark-gray"
        icon={<Trash />}
        text="Delete"
      />
      <TaskActionButton className="bg-cc-blue" icon={<Trash />} text="Save" />
    </div>
  );
};
