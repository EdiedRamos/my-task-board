"use client";

import { IconButton, Label } from "../atoms";
import { Icons, IconsKeys } from "../../assets";

import { useTaskView } from "../../hook";

export const TaskViewIcons = () => {
  const { handleClickIcon, iconName } = useTaskView();

  return (
    <div className="mt-5">
      <Label text="Icon" />
      <div className="flex gap-3 flex-wrap mt-2">
        {IconsKeys.map((name) => (
          <IconButton
            isActive={name === iconName}
            key={name}
            icon={Icons[name]({ className: "w-5" })}
            onClick={() => handleClickIcon(name)}
          />
        ))}
      </div>
    </div>
  );
};
