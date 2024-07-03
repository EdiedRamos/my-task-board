import React from "react";
import { TaskActionButton } from "../atoms";
import { Trash } from "../../assets";
import { useTaskView } from "../../hook";

export const TaskViewControl = () => {
  const { handleDelete, handleSave } = useTaskView();

  return (
    <div className="flex flex-wrap gap-4 justify-end mt-14">
      <TaskActionButton
        onClick={handleDelete}
        className="bg-cc-dark-gray"
        icon={<Trash />}
        text="Delete"
      />
      <TaskActionButton
        onClick={handleSave}
        className="bg-cc-blue"
        icon={<Trash />}
        text="Save"
      />
    </div>
  );
};
