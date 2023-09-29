import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { addTodo, setTodoTitle } from "@/store/actions/todoActionCreators.ts";
import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { getCurrentDate } from "@/utils/getCurrentDate.ts";
import { getExpirationDate } from "@/utils/getExpirationDate.ts";
import React, { FC, useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "./CreateTodo.module.scss";

export const CreateTodo: FC = () => {
  const dispatch = useAppDispatch();
  const [todoValue, setTodoValue] = useState("");
  const { title } = useAppSelector(state => state.todoReducer);

  const setModalActive = useModalState("createTodoModal")[1];

  useEffect(() => {
    dispatch(setTodoTitle({ title: todoValue }));
  }, [todoValue]);

  const handleCreateTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && e.currentTarget.value.length) {
      dispatch(
        addTodo({
          createdDate: getCurrentDate(),
          expirationDate: getExpirationDate(getCurrentDate()),
          title: todoValue,
          isCompleted: false,
        }),
      );
      setTodoValue("");
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkOnValidField(setTodoValue, e.target.value);
  };

  return (
    <div className={styles.createTodoContainer}>
      <Input
        onKeyDown={handleCreateTodo}
        onChange={handleChangeInput}
        value={title}
        className={styles.createTodoInput}
        placeholder="Enter new todo"
      />
      <Button onClick={() => setModalActive(true)} className={styles.createTodoButton}>
        <span className={styles.createTodoButtonTitle}>
          <span>Create</span>
          <BsPlusLg />
        </span>
      </Button>
    </div>
  );
};
