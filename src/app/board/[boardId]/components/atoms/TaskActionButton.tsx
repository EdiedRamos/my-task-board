import React from "react";

interface Props {
  className?: string;
  icon: React.ReactNode;
  text: string;
}

export const TaskActionButton = ({ className = "", icon, text }: Props) => {
  return (
    <button
      className={`flex items-center gap-1 px-6 py-2 transition-all rounded-3xl text-white text-cf-100 font-medium hover:opacity-90 active:scale-105 ${className}`}
    >
      {text}
      {icon}
    </button>
  );
};
