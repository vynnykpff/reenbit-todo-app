import { NotificationType } from "@/common/constants/NotificationConstants.ts";
import { CurrentTodoFilter, TodoErrorMessages } from "@/common/constants/TodoConstants.ts";
import { FilteredTodo } from "@/components/TodoLayout/TodoList/components/FilteredTodo/FilteredTodo.tsx";
import { Button } from "@/components/ui/Button/Button.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { deleteCompletedTodos, setFiltrationValue } from "@/store/actions/todoActionCreators.ts";
import cn from "classnames";
import styles from "./TodoListHeader.module.scss";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useEffect, useState } from "react";
import filteredStyles from "@/components/TodoLayout/TodoList/components/FilteredTodo/FilteredTodo.module.scss";

export const TodoListHeader = () => {
  const { originalTodos } = useAppSelector(state => state.todoReducer);
  const [completedTodo, setCompletedTodo] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const completedTodos = originalTodos.filter(todo => todo.isCompleted);
    setCompletedTodo(completedTodos.length);
  }, [originalTodos]);

  const handleDeleteCompletedTodos = () => {
    dispatch(setNotification({ title: TodoErrorMessages.CLEAR_COMPLETED, type: NotificationType.SUCCESS }));
    dispatch(deleteCompletedTodos());
    dispatch(setFiltrationValue(CurrentTodoFilter.ALL));
  };

  return (
    <div className={styles.todoListHeader}>
      <div className={styles.todoListHeaderWrapper}>
        <div className={styles.todoListContentContainer}>
          <p className={styles.todoListTitle}>
            Tasks created
            <span className={styles.todoListCounter}>{originalTodos.length}</span>
          </p>
          <p className={cn(styles.todoListTitle, styles.completedTodosTitle)}>
            Completed
            <span className={styles.todoListCounter}>
              {completedTodo} of {originalTodos.length}
            </span>
          </p>
        </div>
        <Button
          disabled={!originalTodos.filter(todo => todo.isCompleted).length}
          onClick={handleDeleteCompletedTodos}
          className={cn(filteredStyles.filteredTodoButton, styles.clearCompletedTodosButton)}
        >
          Clear Completed
        </Button>
      </div>
      <FilteredTodo />
    </div>
  );
};
