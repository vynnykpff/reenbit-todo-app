import { FC } from "react";
import { Header } from "@/components/Header/Header.tsx";
import { TodoLayout } from "@/components/TodoLayout/TodoLayout.tsx";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <TodoLayout />
    </>
  );
};

export default HomePage;
