import React from "react";

interface Props {
  children?: React.ReactNode;
  text: string;
}

export const Label = ({ children, text }: Props) => {
  return (
    <label className="flex flex-col">
      <span className="text-cf-50 text-cc-dark-gray">{text}</span>
      {children && children}
    </label>
  );
};
