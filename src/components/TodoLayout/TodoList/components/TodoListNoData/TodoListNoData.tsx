import { CurrentTodoFilter } from "@/common/constants/TodoConstants.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { FC } from "react";
import { PiClipboardText } from "react-icons/pi";
import styles from "./TodoListNoData.module.scss";

export const TodoListNoData: FC<{ title: string }> = ({ title }) => {
  const { searchValue } = useAppSelector(state => state.todoReducer);

  return (
    <div className={styles.todoListNoDataContainer}>
      <div>
        <PiClipboardText />
        {title === CurrentTodoFilter.ALL && (
          <>
            <p className={styles.todoListText}>You don't have any tasks registered yet</p>
            <p className={styles.todoListText}>Create tasks and organize your to-do items</p>
          </>
        )}
        {title === CurrentTodoFilter.ACTIVE && <p className={styles.todoListText}>You don't have any active tasks registered yet</p>}
        {title === CurrentTodoFilter.COMPLETED && <p className={styles.todoListText}>You don't have any completed tasks registered yet</p>}
        {!!searchValue.length && <p className={styles.todoListText}>{title}</p>}
      </div>
    </div>
  );
};
