import { FC } from "react";

import { CreateTodo } from "@/components/TodoLayout/CreateTodo/CreateTodo.tsx";
import { TodoList } from "@/components/TodoLayout/TodoList/TodoList.tsx";

import styles from "./TodoLayout.module.scss";

export const TodoLayout: FC = () => {
  return (
    <main className={styles.todoLayoutContainer}>
      <CreateTodo />
      <TodoList />
    </main>
  );
};
