import { FC } from "react";
import { PiClipboardText } from "react-icons/pi";
import styles from "./TodoListEmpty.module.scss";

type Props = {
  filterValue: string;
};

export const TodoListEmpty: FC<Props> = ({ filterValue }) => {
  return (
    <div className={styles.todoListNoDataContainer}>
      <PiClipboardText />
      <p className={styles.todoListText}>Nothing found in the filter: {filterValue}</p>
    </div>
  );
};
