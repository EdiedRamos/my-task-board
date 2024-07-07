import { ChangeEvent, createContext } from "react";
import type { Status, Task } from "../types";

import type { IconsKey } from "../assets";

interface TaskViewContext {
  currentTask: Task | null;
  taskName: string;
  taskDescription: string;
  iconName: IconsKey | null;
  status: Status | null;
  handleEventName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEventDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleClickIcon: (icon: IconsKey) => void;
  handleClickStatus: (status: Status) => void;
  handleSave: () => void;
  handleUpdate: () => void;
  handleDelete: () => void;
}

export const taskViewContext = createContext<TaskViewContext | null>(null);
