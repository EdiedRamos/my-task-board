import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/board/init");
};

export default HomePage;
