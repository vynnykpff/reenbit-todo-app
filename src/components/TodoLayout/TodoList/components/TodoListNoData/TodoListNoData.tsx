import { PiClipboardText } from "react-icons/pi";
import styles from "./TodoListNoData.module.scss";

export const TodoListNoData = () => {
  return (
    <div className={styles.todoListNoDataContainer}>
      <div>
        <PiClipboardText />
        <p className={styles.todoListText}>You don't have any tasks registered yet</p>
        <p className={styles.todoListText}>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
};
