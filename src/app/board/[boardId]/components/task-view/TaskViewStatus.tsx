import { Close1, Done, Time } from "../../assets";
import { Label, SqureIcon, StatusButton } from "../atoms";

import React from "react";

export const TaskViewStatus = () => {
  return (
    <div className="mt-5">
      <Label text="Status" />
      <div className="grid grid-cols-2 gap-4">
        <StatusButton
          icon={<SqureIcon icon={<Time />} className="bg-cc-orange" />}
          text="In Progress"
        />
        <StatusButton
          icon={<SqureIcon icon={<Done />} className="bg-cc-green" />}
          text="Completed"
        />
        <StatusButton
          icon={<SqureIcon icon={<Close1 />} className="bg-cc-red" />}
          text="Won't Do"
        />
      </div>
    </div>
  );
};
