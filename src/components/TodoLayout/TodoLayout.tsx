import { CreateTodo } from "@/components/TodoLayout/CreateTodo/CreateTodo.tsx";
import { SearchTodo } from "@/components/TodoLayout/SearchTodo/SearchTodo.tsx";
import { TodoList } from "@/components/TodoLayout/TodoList/TodoList.tsx";
import styles from "./TodoLayout.module.scss";

export const TodoLayout = () => {
  return (
    <main className={styles.todoLayoutContainer}>
      <CreateTodo />
      <SearchTodo />
      <TodoList />
    </main>
  );
};
