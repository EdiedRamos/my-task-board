interface Props {
  icon: React.ReactNode;
}

export const IconButton = ({ icon }: Props) => {
  return (
    <button className="p-3 rounded-lg bg-cc-light-gray hover:bg-cc-dark-gray transition-all hover:animate-spin">
      {icon}
    </button>
  );
};
