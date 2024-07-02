"use client";

import { IconButton, Label } from "../atoms";
import { Icons, IconsKeys } from "../../assets";

export const TaskViewIcons = () => {
  return (
    <div className="mt-5">
      <Label text="Icon" />
      <div className="flex gap-3 flex-wrap mt-2">
        {IconsKeys.map((name) => (
          <IconButton key={name} icon={Icons[name]({ className: "w-5" })} />
        ))}
      </div>
    </div>
  );
};
