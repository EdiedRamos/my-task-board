import { Label } from "../atoms";

export const TaskViewName = () => {
  return (
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
  );
};
