import { Close1, Done, Time } from "../assets";

import { SqureIcon } from "../components/atoms";
import type { Status } from "../types";

export function getStatusIcon(status: Status): React.ReactNode {
  switch (status) {
    case "completed":
      return <SqureIcon icon={<Done />} className="bg-cc-green" />;
    case "progress":
      return <SqureIcon icon={<Time />} className="bg-cc-orange" />;
    case "wontdo":
      return <SqureIcon icon={<Close1 />} className="bg-cc-red" />;
    case "unknown":
      return <></>;
  }
}
