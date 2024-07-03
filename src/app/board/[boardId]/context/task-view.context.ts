import { ChangeEvent, createContext } from "react";

import type { IconsKey } from "../assets";
import type { Status } from "../types";

interface TaskViewContext {
  taskName: string;
  taskDescription: string;
  iconName: IconsKey | null;
  status: Status | null;
  handleEventName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEventDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleClickIcon: (icon: IconsKey) => void;
  handleClickStatus: (status: Status) => void;
  handleSave: () => void;
  handleDelete: () => void;
}

export const taskViewContext = createContext<TaskViewContext | null>(null);
