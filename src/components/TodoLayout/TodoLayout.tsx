import { CreateTodo } from "@/components/TodoLayout/CreateTodo/CreateTodo.tsx";
import styles from "./TodoLayout.module.scss";
import { TodoList } from "@/components/TodoLayout/TodoList/TodoList.tsx";
import { FC } from "react";

export const TodoLayout: FC = () => {
  return (
    <main className={styles.todoLayoutContainer}>
      <CreateTodo />
      <TodoList />
    </main>
  );
};
