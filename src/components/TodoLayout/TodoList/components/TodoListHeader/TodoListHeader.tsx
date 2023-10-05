import { FilteredTodo } from "@/components/TodoLayout/TodoList/components/FilteredTodo/FilteredTodo.tsx";
import styles from "./TodoListHeader.module.scss";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useEffect, useState } from "react";

export const TodoListHeader = () => {
  const { originalTodos } = useAppSelector(state => state.todoReducer);
  const [completedTodo, setCompletedTodo] = useState(0);

  useEffect(() => {
    const completedTodos = originalTodos.filter(todo => todo.isCompleted);
    setCompletedTodo(completedTodos.length);
  }, [originalTodos]);

  return (
    <div className={styles.todoListHeader}>
      <div className={styles.todoListHeaderWrapper}>
        <p className={styles.todoListTitle}>
          Tasks created
          <span className={styles.todoListCounter}>{originalTodos.length}</span>
        </p>
        <p className={styles.todoListTitle}>
          Completed
          <span className={styles.todoListCounter}>
            {completedTodo} of {originalTodos.length}
          </span>
        </p>
      </div>
      <FilteredTodo />
    </div>
  );
};
