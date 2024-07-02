interface Props {
  children: React.ReactNode;
}

const BoardLayout = ({ children }: Props) => {
  return (
    <main className="flex justify-center bg-cc-white min-h-screen">
      {children}
    </main>
  );
};

export default BoardLayout;
