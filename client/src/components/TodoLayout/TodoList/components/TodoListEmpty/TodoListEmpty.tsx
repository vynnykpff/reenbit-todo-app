import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { FC } from "react";
import { PiClipboardText } from "react-icons/pi";
import styles from "./TodoListEmpty.module.scss";

type Props = {
  title: string;
  todos: TodoActions[];
};

export const TodoListEmpty: FC<Props> = ({ title, todos }) => {
  const emptyText = todos.length
    ? "Nothing found"
    : title === TodoCurrentFilter.ALL
    ? "You don't have any tasks registered yet. Create tasks and organize your to-do items."
    : title === TodoCurrentFilter.ACTIVE
    ? "You don't have any active tasks registered yet."
    : title === TodoCurrentFilter.COMPLETED
    ? "You don't have any completed tasks registered yet."
    : "";

  return (
    <div className={styles.todoListNoDataContainer}>
      <div>
        <PiClipboardText />
        {emptyText && <p className={styles.todoListText}>{emptyText}</p>}
      </div>
    </div>
  );
};
