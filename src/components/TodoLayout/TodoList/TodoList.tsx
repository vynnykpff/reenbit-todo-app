import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { PiClipboardText } from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { todos } = useAppSelector(state => state.todoReducer);

  return (
    <section className={styles.todoListSection}>
      <div className={styles.todoListHeader}>
        <p className={styles.todoListTitle}>
          Tasks created
          <span className={styles.todoListCounter}>{todos.length}</span>
        </p>
        <p className={styles.todoListTitle}>
          Completed
          <span className={styles.todoListCounter}>0</span>
        </p>
      </div>

      <ul className={styles.todoListContainer}>
        {todos.length ? (
          todos.map(todo => <Todo key={uuidv4()} {...todo} />)
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
