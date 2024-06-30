interface Props {
  children: React.ReactNode;
}

const BoardLayout = ({ children }: Props) => {
  return (
    <main className="flex justify-center bg-cc-white h-screen">{children}</main>
  );
};

export default BoardLayout;
