import type { Status } from "../types";

// * According to Tailwind
export function getStatusBg(status: Status): string {
  switch (status) {
    case "completed":
      return "bg-cc-light-green";
    case "progress":
      return "bg-cc-yellow";
    case "wontdo":
      return "bg-cc-pink";
  }
}
