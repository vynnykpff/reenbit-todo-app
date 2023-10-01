import React, { FC, useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";

import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import ModalNotification, { NotificationType } from "@/components/ui/ModalNotification.tsx";

import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { addTodo, setTodoTitle } from "@/store/actions/todoActionCreators.ts";

import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { getExpirationDate } from "@/utils/getExpirationDate.ts";

import { format } from "date-fns";

import styles from "./CreateTodo.module.scss";

export const CreateTodo: FC = () => {
  const [todoValue, setTodoValue] = useState("");

  const { title } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const setModalActive = useModalState("createTodoModal")[1];

  const [isShowNotification, setIsShowNotification] = useState(false);
  const [titleNotification, setTitleNotification] = useState("");
  const [typeNotification, setTypeNotification] = useState<NotificationType>("error");
  const [notificationTimeout, setNotificationTimeout] = useState(false);

  useEffect((): void => {
    dispatch(setTodoTitle({ title: todoValue }));
  }, [todoValue]);

  const handleCreateTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === "Enter" && e.currentTarget.value.trim().length <= 120) {
      if (!e.currentTarget.value.trim().length) {
        setIsShowNotification(true);
        setNotificationTimeout(true);
        setTypeNotification("error");
        setTimeout(() => {
          setNotificationTimeout(false);
          setIsShowNotification(false);
        }, 2000);
        return setTitleNotification("You can't to create empty todo");
      }
      dispatch(
        addTodo({
          createdDate: format(new Date(), "dd.MM.yyyy HH:mm"),
          expirationDate: getExpirationDate(format(new Date(), "dd.MM.yyyy HH:mm")),
          title: todoValue || title,
          isCompleted: false,
        }),
      );
      return setTodoValue("");
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 120) {
      setTodoValue(checkOnValidField(e.target.value));
    } else {
      setIsShowNotification(true);
      setNotificationTimeout(true);
      setTimeout(() => {
        setNotificationTimeout(false);
        setIsShowNotification(false);
      }, 2000);
      setTypeNotification("error");
      return setTitleNotification("The maximum length of the title mustn't exceed 120 characters");
    }
  };

  return (
    <div className={styles.createTodoContainer}>
      <Input
        onKeyDown={handleCreateTodo}
        onChange={handleChangeInput}
        disabled={notificationTimeout}
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
      {isShowNotification && <ModalNotification title={titleNotification} typeNotification={typeNotification} />}
    </div>
  );
};
