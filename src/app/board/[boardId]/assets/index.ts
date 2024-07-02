export * from "./Add";
export * from "./Close";
export * from "./Close1";
export * from "./Done";
export * from "./DoneRound";
export * from "./Edit";
export * from "./Logo";
export * from "./Time";
export * from "./Trash";

import { Book } from "./Book";
import { Clock } from "./Clock";
import { Comment } from "./Comment";
import { Computer } from "./Computer";
import { Dumbbell } from "./Dumbbell";
import { MugHot } from "./MugHot";

export const Icons = {
  Book,
  Clock,
  Comment,
  Computer,
  Dumbbell,
  MugHot,
};

export type IconsKey = keyof typeof Icons;

export const IconsKeys: IconsKey[] = [
  "Computer",
  "Comment",
  "MugHot",
  "Dumbbell",
  "Book",
  "Clock",
];
