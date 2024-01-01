import { NotificationType } from "@/common/constants/NotificationConstants.ts";
import { TodoNotificationMessages } from "@/common/constants/TodoConstants/TodoValidation.ts";
import { TodoValidateData } from "@/common/constants/TodoConstants/TodoValidationData.ts";
import { ButtonType } from "@/common/constants/UIConstants.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { setTodoTitle } from "@/store/actions/todoActionCreators.ts";
import { createTodosThunk, getTodosThunk } from "@/store/thunks/todosThunks.ts";
import { isValidField } from "@/utils/isValidField.ts";
import { getNextDate } from "@/utils/getNextDate.ts";
import { setExpirationDateFormat } from "@/utils/setExpirationDateFormat.ts";
import { ChangeEvent, KeyboardEvent } from "react";
import { BsPlusLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoCreate.module.scss";

const SEND_KEY = "Enter";

export const TodoCreate = () => {
  const { todoTitle } = useAppSelector(state => state.todoReducer);
  const { user } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access-token")!;

  const setTitleStoreValue = (value: string) => {
    dispatch(setTodoTitle(value));
  };

  const setModalActive = useModalState("createTodoModal")[1];

  const handleCreateTodo = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== SEND_KEY) {
      return;
    }

    if (!todoTitle.trim().length) {
      return dispatch(setNotification({ title: TodoNotificationMessages.EMPTY_TITLE, type: NotificationType.ERROR }));
    }

    await dispatch(
      createTodosThunk({
        createdDate: setExpirationDateFormat(new Date()),
        expirationDate: getNextDate(new Date()),
        todoTitle,
        isCompleted: false,
        todoId: uuidv4(),
        userId: user?._id!,
      }),
    );

    await dispatch(getTodosThunk({ token, userId: user?._id! }));
    setTitleStoreValue("");
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.trim().length >= TodoValidateData.MAX_TITLE_LENGTH) {
      dispatch(setNotification({ title: TodoNotificationMessages.MAX_LENGTH, type: NotificationType.ERROR }));
      return setTitleStoreValue(todoTitle.replace(inputValue, ""));
    }
    setTitleStoreValue(isValidField(inputValue));
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
