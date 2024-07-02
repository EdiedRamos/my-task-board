import { Add } from "../assets";

export const AddTask = () => {
  return (
    <div className="flex items-center gap-3 bg-cc-cream w-full p-4 rounded-xl mt-5 mb-5">
      <div className="bg-cc-orange rounded-xl p-3">
        <Add />
      </div>
      <p className="font-bold">Add new task</p>
    </div>
  );
};
