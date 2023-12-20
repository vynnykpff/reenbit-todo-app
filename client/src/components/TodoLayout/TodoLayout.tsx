import { TodoCreate } from "@/components/TodoLayout/TodoCreate/TodoCreate.tsx";
import { TodoSearch } from "@/components/TodoLayout/TodoSearch/TodoSearch.tsx";
import { TodoList } from "@/components/TodoLayout/TodoList/TodoList.tsx";
import styles from "./TodoLayout.module.scss";

export const TodoLayout = () => {
  return (
    <main className={styles.todoLayoutContainer}>
      <TodoCreate />
      <TodoSearch />
      <TodoList />
    </main>
  );
};
