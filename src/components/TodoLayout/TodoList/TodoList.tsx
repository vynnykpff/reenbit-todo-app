import styles from "./TodoList.module.scss";
import { FC } from "react";
// import { PiClipboardText } from "react-icons/pi";
import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";

export const TodoList: FC = () => {
  return (
    <section>
      <div className={styles.todoListHeader}>
        <p className={styles.todoListTitle}>
          Tasks created
          <span className={styles.todoListCounter}>0</span>
        </p>
        <p className={styles.todoListTitle}>
          Completed
          <span className={styles.todoListCounter}>0</span>
        </p>
      </div>

      <div className={styles.todoListContainer}>
        {/*<div className={styles.todoListNoDataBlock}>*/}
        {/*  <div>*/}
        {/*    <PiClipboardText />*/}
        {/*    <p className={styles.todoListText}>You don't have any tasks registered yet</p>*/}
        {/*    <p className={styles.todoListText}>Create tasks and organize your to-do items</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Todo />
        <Todo />
        <Todo />
      </div>
    </section>
  );
};
