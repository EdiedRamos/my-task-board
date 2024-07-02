"use client";

interface Props {
  icon: React.ReactNode;
}

export const IconPreview = ({ icon }: Props) => {
  return <div className={"p-3 rounded-lg bg-cc-white"}>{icon}</div>;
};
