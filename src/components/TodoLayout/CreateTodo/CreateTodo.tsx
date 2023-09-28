import styles from "./CreateTodo.module.scss";
import { FC } from "react";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { BsPlusLg } from "react-icons/bs";

export const CreateTodo: FC = () => {
  return (
    <div className={styles.createTodoContainer}>
      <Input className={styles.createTodoInput} placeholder="Enter new todo" />
      <Button className={styles.createTodoButton}>
        <span className={styles.createTodoButtonTitle}>
          <span>Create</span>
          <BsPlusLg />
        </span>
      </Button>
    </div>
  );
};
