interface Props {
  icon: React.ReactNode;
}

export const IconButton = ({ icon }: Props) => {
  return (
    <button className="p-3 rounded-lg bg-cc-light-gray hover:bg-slate-300 active:scale-105 transition-all">
      {icon}
    </button>
  );
};
