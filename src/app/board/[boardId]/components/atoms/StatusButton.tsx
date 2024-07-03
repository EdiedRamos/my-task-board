import React from "react";

interface Props {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const StatusButton = ({
  icon,
  text,
  onClick = () => {},
  isActive = false,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 rounded-xl flex gap-3 items-center flex-wrap p-[3px] font-medium active:scale-105 transition-all hover:bg-slate-200 ${
        isActive ? "border-cc-blue" : ""
      }`}
    >
      {icon}
      {text}
    </button>
  );
};
