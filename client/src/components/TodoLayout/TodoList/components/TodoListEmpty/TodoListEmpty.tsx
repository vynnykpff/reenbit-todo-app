import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { FC } from "react";
import { PiClipboardText } from "react-icons/pi";
import styles from "./TodoListEmpty.module.scss";

export const TodoListEmpty: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.todoListNoDataContainer}>
      <div>
        <PiClipboardText />
        {title === TodoCurrentFilter.ALL && (
          <>
            <p className={styles.todoListText}>You don't have any tasks registered yet</p>
            <p className={styles.todoListText}>Create tasks and organize your to-do items</p>
          </>
        )}
        {title === TodoCurrentFilter.ACTIVE && <p className={styles.todoListText}>You don't have any active tasks registered yet</p>}
        {title === TodoCurrentFilter.COMPLETED && <p className={styles.todoListText}>You don't have any completed tasks registered yet</p>}
        <p className={styles.todoListText}>{title}</p>
      </div>
    </div>
  );
};
