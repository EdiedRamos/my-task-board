interface Props {
  icon: React.ReactNode;
}

export const IconButton = ({ icon }: Props) => {
  return (
    <button className="border p-3 rounded-lg bg-cc-light-gray">{icon}</button>
  );
};
