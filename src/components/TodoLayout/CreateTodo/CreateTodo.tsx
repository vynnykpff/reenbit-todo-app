import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { addTodo } from "@/store/actions/todoActionCreators.ts";
import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { getCurrentDate } from "@/utils/getCurrentDate.ts";
import { getExpirationDate } from "@/utils/getExpirationDate.ts";
import React, { FC, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "./CreateTodo.module.scss";

export const CreateTodo: FC = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState("");

  const handleCreateTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      dispatch(
        addTodo({
          createdDate: getCurrentDate(),
          expirationDate: getExpirationDate(getCurrentDate()),
          title: todo,
          isCompleted: false,
        }),
      );
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkOnValidField(setTodo, e.target.value);
  };

  return (
    <div className={styles.createTodoContainer}>
      <Input
        onKeyDown={handleCreateTodo}
        onChange={handleChangeInput}
        value={todo}
        className={styles.createTodoInput}
        placeholder="Enter new todo"
      />
      <Button className={styles.createTodoButton}>
        <span className={styles.createTodoButtonTitle}>
          <span>Create</span>
          <BsPlusLg />
        </span>
      </Button>
    </div>
  );
};
