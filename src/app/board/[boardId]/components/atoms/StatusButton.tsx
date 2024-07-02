import React from "react";

interface Props {
  icon: React.ReactNode;
  text: string;
}

export const StatusButton = ({ icon, text }: Props) => {
  return (
    <button className="border-2 rounded-xl flex gap-3 items-center flex-wrap p-[3px] font-medium active:scale-105 transition-all hover:bg-slate-200">
      {icon}
      {text}
    </button>
  );
};
