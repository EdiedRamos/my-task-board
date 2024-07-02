interface Props {
  icon: React.ReactNode;
}

export const IconButton = ({ icon }: Props) => {
  return (
    <button className="border-2 p-3 rounded-lg bg-cc-white">{icon}</button>
  );
};
