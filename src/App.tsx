import { FC } from "react";

import { Header } from "@/components/Header/Header.tsx";
import { TodoLayout } from "@/components/TodoLayout/TodoLayout.tsx";

const App: FC = () => {
  return (
    <>
      <Header />
      <TodoLayout />
    </>
  );
};

export default App;
