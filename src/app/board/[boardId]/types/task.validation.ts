import { Icons } from "../assets";
import { z } from "zod";

export const IconsSchema = z.enum(Object.keys(Icons) as [keyof typeof Icons]);

export const StatusSchema = z.enum([
  "unknown",
  "completed",
  "progress",
  "wontdo",
]);

export const TaskSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string().min(1, "Task name is required"),
    status: StatusSchema,
    description: z.string().optional(),
    iconName: IconsSchema.optional(),
  })
  .strict();

// type Task = z.infer<typeof TaskSchema>;

// interface TaskI extends Task {}
