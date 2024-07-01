export type Status = "unknown" | "completed" | "progress" | "wontdo";

export interface Task {
  id: string;
  title: string;
  status: Status;
  description?: string;
}
