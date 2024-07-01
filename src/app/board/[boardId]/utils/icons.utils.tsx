import { Close1, Done, Time } from "../assets";

import type { Status } from "../types";

export function getStatusIcon(status: Status): React.ReactNode {
  switch (status) {
    case "completed":
      return (
        <div className="bg-cc-green rounded-xl p-3">
          <Done />
        </div>
      );
    case "progress":
      return (
        <div className="bg-cc-orange rounded-xl p-3">
          <Time />
        </div>
      );
    case "wontdo":
      return (
        <div className="bg-cc-red rounded-xl p-3">
          <Close1 />
        </div>
      );
    case "unknown":
      return <></>;
  }
}
