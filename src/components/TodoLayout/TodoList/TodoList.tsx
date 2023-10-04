import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";
import { Button } from "@/components/ui/Button/Button.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useEffect, useState } from "react";
import { PiClipboardText } from "react-icons/pi";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { todos } = useAppSelector(state => state.todoReducer);
  const [completedTodo, setCompletedTodo] = useState(0);

  useEffect(() => {
    const completedTodos = todos.filter(todo => todo.isCompleted);
    setCompletedTodo(completedTodos.length);
  }, [todos]);

  return (
    <section className={styles.todoListSection}>
      <div className={styles.todoListHeader}>
        <div className={styles.todoListHeaderWrapper}>
          <p className={styles.todoListTitle}>
            Tasks created
            <span className={styles.todoListCounter}>{todos.length}</span>
          </p>
          <p className={styles.todoListTitle}>
            Completed
            <span className={styles.todoListCounter}>
              {completedTodo} of {todos.length}
            </span>
          </p>
        </div>
        <div className={styles.todoFiltrationContainer}>
          <Button className={styles.todoFiltrationButton}>All</Button>
          <Button className={styles.todoFiltrationButton}>Active</Button>
          <Button className={styles.todoFiltrationButton}>Completed</Button>
          <Button className={styles.todoFiltrationButton}>Clear completed</Button>
        </div>
      </div>

      <ul className={styles.todoListContainer}>
        {todos.length ? (
          todos.map(todo => <Todo key={todo.todoId} {...todo} />)
        ) : (
          <div className={styles.todoListNoDataBlock}>
            <div>
              <PiClipboardText />
              <p className={styles.todoListText}>You don't have any tasks registered yet</p>
              <p className={styles.todoListText}>Create tasks and organize your to-do items</p>
            </div>
          </div>
        )}
      </ul>
    </section>
  );
};
