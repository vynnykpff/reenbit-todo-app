import { NotificationType } from "@/common/constants/NotificationConstants.ts";
import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoNotificationMessages } from "@/common/constants/TodoConstants/TodoValidation.ts";
import { TodoValidateData } from "@/common/constants/TodoConstants/TodoValidationData.ts";
import { ButtonType } from "@/common/constants/UIConstants.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { setFiltrationValue, setTodoTitle } from "@/store/actions/todoActionCreators.ts";
import { createTodosThunk, searchTodoThunk } from "@/store/thunks/todosThunks.ts";
import { getNextDate } from "@/utils/getNextDate.ts";
import { isValidField } from "@/utils/isValidField.ts";
import { setExpirationDateFormat } from "@/utils/setExpirationDateFormat.ts";
import { ChangeEvent, KeyboardEvent } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "./TodoCreate.module.scss";
const SEND_KEY = "Enter";

export const TodoCreate = () => {
  const { title, searchValue } = useAppSelector(state => state.todoReducer);
  const { user } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();

  const setTitleStoreValue = (value: string) => {
    dispatch(setTodoTitle(value));
  };
  const setModalActive = useModalState("createTodoModal")[1];
  const handleCreateTodo = async (e: KeyboardEvent<HTMLInputElement>) => {
    const value = title.trim();
    if (e.code !== SEND_KEY) {
      return;
    }
    if (!title.trim().length) {
      return dispatch(setNotification({ title: TodoNotificationMessages.EMPTY_TITLE, type: NotificationType.ERROR }));
    }
    await dispatch(
      createTodosThunk({
        createdDate: setExpirationDateFormat(new Date()),
        expirationDate: getNextDate(new Date()),
        title: value,
        isCompleted: false,
        userId: user?.id!,
      }),
    );

    void dispatch(searchTodoThunk({ filter: TodoCurrentFilter.ALL, title: searchValue }));
    dispatch(setFiltrationValue(TodoCurrentFilter.ALL));
    setTitleStoreValue("");
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.trim().length >= TodoValidateData.MAX_TITLE_LENGTH) {
      dispatch(setNotification({ title: TodoNotificationMessages.MAX_LENGTH, type: NotificationType.ERROR }));
      return setTitleStoreValue(title.replace(inputValue, ""));
    }
    setTitleStoreValue(isValidField(inputValue));
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
      <Button onClick={() => setModalActive(true)} type={ButtonType.BUTTON} className={styles.createTodoButton}>
        <span className={styles.createTodoButtonTitle}>
          <span>Create</span>
          <BsPlusLg />
        </span>
      </Button>
    </div>
  );
};
