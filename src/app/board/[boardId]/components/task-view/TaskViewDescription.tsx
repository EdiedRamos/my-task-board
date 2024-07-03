import { Label } from "../atoms";

export const TaskViewDescription = () => {
  return (
    <div className="mt-5">
      <Label text="Description">
        <textarea
          placeholder="Enter a short description"
          className="h-[150px] resize-none border-2 rounded-lg px-[14px] py-[10px] outline-none focus:border-cc-blue"
          name="description"
        />
      </Label>
    </div>
  );
};
