import { NotificationType } from "@/common/constants/NotificationConstants.ts";
import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoConfirmMessages, TodoNotificationMessages } from "@/common/constants/TodoConstants/TodoValidation.ts";
import { TodoFiltered } from "@/components/TodoLayout/TodoList/components/TodoFiltered/TodoFiltered.tsx";
import { Button } from "@/components/ui/Button/Button.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { setFiltrationValue } from "@/store/actions/todoActionCreators.ts";
import { deleteAllTodosThunk, getFilteredTodosThunk } from "@/store/thunks/todosThunks.ts";
import cn from "classnames";
import styles from "./TodoListHeader.module.scss";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import filteredStyles from "@/components/TodoLayout/TodoList/components/TodoFiltered/TodoFiltered.module.scss";

export const TodoListHeader = () => {
  const {
    amountTodos: { total, completed },
  } = useAppSelector(state => state.todoReducer);
  const setConfirmModalActive = useModalState("confirmModal")[1];
  const dispatch = useAppDispatch();

  const handleDeleteCompletedTodos = () => {
    setConfirmModalActive(true, {
      confirmCallback: async () => {
        dispatch(
          setNotification({
            title: TodoNotificationMessages.DELETE_COMPLETED_TODOS,
            type: NotificationType.SUCCESS,
          }),
        );
        await dispatch(deleteAllTodosThunk());
        void dispatch(getFilteredTodosThunk({ filter: TodoCurrentFilter.ALL }));
        dispatch(setFiltrationValue(TodoCurrentFilter.ALL));
      },
      message: TodoConfirmMessages.DELETE_COMPLETED_TODOS,
    });
  };

  return (
    <div className={styles.todoListHeader}>
      <div className={styles.todoListHeaderWrapper}>
        <div className={styles.todoListContentContainer}>
          <p className={styles.todoListTitle}>
            Tasks created
            <span className={styles.otdoListCounter}>{total}</span>
          </p>
          <p className={cn(styles.todoListTitle, styles.completedTodosTitle)}>
            Completed
            <span className={styles.todoListCounter}>
              {completed} of {total}
            </span>
          </p>
        </div>
        <Button
          disabled={!completed}
          onClick={handleDeleteCompletedTodos}
          className={cn(filteredStyles.filteredTodoButton, styles.clearCompletedTodosButton)}
        >
          Clear Completed
        </Button>
      </div>
      <TodoFiltered />
    </div>
  );
};
