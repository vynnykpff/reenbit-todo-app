import { NotificationType } from "@/common/constants/NotificationConstants.ts";
import { TodoErrorMessages } from "@/common/constants/TodoConstants.ts";
import { ButtonType } from "@/common/constants/UIConstants.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { addTodo, setTodoTitle } from "@/store/actions/todoActionCreators.ts";
import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { getNextDate } from "@/utils/getNextDate.ts";
import { setExpirationDateFormat } from "@/utils/setExpirationDateFormat.ts";
import { ChangeEvent, KeyboardEvent } from "react";
import { BsPlusLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import styles from "./CreateTodo.module.scss";

const MAX_TITLE_LENGTH = 120;

export const CreateTodo = () => {
  const { todoTitle } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const setTitleStoreValue = (value: string) => {
    dispatch(setTodoTitle(value));
  };

  const setModalActive = useModalState("createTodoModal")[1];

  const handleCreateTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") {
      return;
    }

    if (!todoTitle.trim().length) {
      return dispatch(setNotification({ title: TodoErrorMessages.EMPTY_TITLE, type: NotificationType.ERROR }));
    }
    dispatch(
      addTodo({
        createdDate: setExpirationDateFormat(new Date()),
        expirationDate: getNextDate(setExpirationDateFormat(new Date())),
        todoTitle,
        isCompleted: false,
        todoId: uuidv4(),
      }),
    );
    return setTitleStoreValue("");
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length >= MAX_TITLE_LENGTH) {
      dispatch(setNotification({ title: TodoErrorMessages.MAX_LENGTH, type: NotificationType.ERROR }));
      return setTitleStoreValue(todoTitle.replace(e.target.value, ""));
    }
    setTitleStoreValue(checkOnValidField(e.target.value));
  };

  return (
    <div className={styles.createTodoContainer}>
      <Input
        onKeyDown={handleCreateTodo}
        onChange={handleChangeInput}
        value={todoTitle}
        className={styles.createTodoInput}
        placeholder="Enter new todo"
      />
      <Button onClick={() => setModalActive(true)} type={ButtonType.BUTTON} className={styles.createTodoButton}>
        <span className={styles.createTodoButtonTitle}>
          <span>Create</span>
          <BsPlusLg />
        </span>
      </Button>
    </div>
  );
};
