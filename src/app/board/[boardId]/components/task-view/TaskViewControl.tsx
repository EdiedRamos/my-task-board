import { DoneRound, Trash } from "../../assets";

import { TaskActionButton } from "../atoms";
import { useTaskView } from "../../hook";

export const TaskViewControl = () => {
  const { handleDelete, handleSave, currentTask } = useTaskView();

  return (
    <div className="flex flex-wrap gap-4 justify-end mt-14">
      {currentTask && (
        <TaskActionButton
          onClick={handleDelete}
          className="bg-cc-dark-gray"
          icon={<Trash />}
          text="Delete"
        />
      )}
      <TaskActionButton
        onClick={handleSave}
        className="bg-cc-blue"
        icon={<DoneRound />}
        text={currentTask ? "Update" : "Save"}
      />
    </div>
  );
};
