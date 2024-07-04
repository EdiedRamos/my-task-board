"use client";

interface Props {
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  isActive = false,
  onClick = () => {},
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg ${
        isActive ? "bg-cc-yellow" : "bg-cc-light-gray hover:bg-slate-300"
      } active:scale-105 transition-all`}
    >
      {icon}
    </button>
  );
};
