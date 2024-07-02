import React from "react";

interface Props {
  icon: React.ReactNode;
  className?: string;
}

export const SqureIcon = ({ icon, className = "" }: Props) => {
  return <div className={`rounded-xl p-3 ${className}`}>{icon}</div>;
};
