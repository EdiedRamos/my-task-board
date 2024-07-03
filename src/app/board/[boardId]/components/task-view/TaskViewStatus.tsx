import { Close1, Done, Time } from "../../assets";
import { Label, SqureIcon, StatusButton } from "../atoms";

import type { AvailableStatus } from "../../types";
import { useTaskView } from "../../hook";

const AVAILABLE_STATUS: AvailableStatus[] = [
  {
    icon: <Time />,
    className: "bg-cc-orange",
    text: "In Progress",
    status: "progress",
  },
  {
    icon: <Done />,
    className: "bg-cc-green",
    text: "Completed",
    status: "completed",
  },
  {
    icon: <Close1 />,
    className: "bg-cc-red",
    text: "Won't Do",
    status: "wontdo",
  },
];

export const TaskViewStatus = () => {
  const viewState = useTaskView();

  return (
    <div className="mt-5">
      <Label text="Status" />
      <div className="grid grid-cols-2 gap-4">
        {AVAILABLE_STATUS.map(({ className, icon, text, status }) => (
          <StatusButton
            isActive={viewState.status === status}
            onClick={() => viewState.handleClickStatus(status)}
            key={text}
            icon={<SqureIcon icon={icon} className={className} />}
            text="In Progress"
          />
        ))}
      </div>
    </div>
  );
};
