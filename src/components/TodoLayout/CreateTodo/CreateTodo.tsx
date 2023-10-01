import { NotificationType } from "@/common/constants/NotificationConstants.ts";

import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";

import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { addTodo, setTodoTitle } from "@/store/actions/todoActionCreators.ts";

import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { getExpirationDate } from "@/utils/getExpirationDate.ts";

import { format } from "date-fns";
import { ChangeEvent, FC, KeyboardEvent } from "react";
import { BsPlusLg } from "react-icons/bs";

import styles from "./CreateTodo.module.scss";

const MAX_TITLE_LENGTH = 120;

export const CreateTodo: FC = () => {
  const { title: todoValue } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const setTitleStoreValue = (value: string) => {
    dispatch(setTodoTitle({ title: value }));
  };

  const setModalActive = useModalState("createTodoModal")[1];

  const handleCreateTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") {
      return;
    }

    if (todoValue.trim().length >= MAX_TITLE_LENGTH) {
      return dispatch(
        setNotification({
          title: "The maximum length of the title mustn't exceed 120 characters",
          type: NotificationType.ERROR,
        }),
      );
    }

    if (!todoValue.trim().length) {
      return dispatch(setNotification({ title: "You can't to create empty todo", type: NotificationType.ERROR }));
    }
    dispatch(
      addTodo({
        createdDate: format(new Date(), "dd.MM.yyyy HH:mm"),
        expirationDate: getExpirationDate(format(new Date(), "dd.MM.yyyy HH:mm")),
        title: todoValue,
        isCompleted: false,
      }),
    );
    return setTitleStoreValue("");
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleStoreValue(checkOnValidField(e.target.value));
  };

  return (
    <div className={styles.createTodoContainer}>
      <Input
        onKeyDown={handleCreateTodo}
        onChange={handleChangeInput}
        value={todoValue}
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
