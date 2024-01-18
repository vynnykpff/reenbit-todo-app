import { parse } from "date-fns";
import { FC, useState } from "react";
import cn from "classnames";
import { NotificationType } from "@/common/constants/NotificationConstants.ts";
import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoConfirmMessages, TodoNotificationMessages } from "@/common/constants/TodoConstants/TodoValidation.ts";
import { TodoActions as TodoProps } from "@/common/types/Todos/TodoActions.ts";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { setCurrentTodo, setFiltrationValue } from "@/store/actions/todoActionCreators.ts";
import { deleteTodoThunk, editTodosThunk, getFilteredTodosThunk } from "@/store/thunks/todosThunks.ts";
import { checkOnCurrentExpirationDate } from "@/utils/checkOnCurrentExpirationDate.ts";
import { DATE_FORMAT } from "@/utils/setDateFormat.ts";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import styles from "./Todo.module.scss";

export const Todo: FC<TodoProps> = ({ title, createdDate, expirationDate, id = "", isCompleted }) => {
  const { filterValue } = useAppSelector(state => state.todoReducer);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const setEditModalActive = useModalState("editTodoModal")[1];
  const setConfirmModalActive = useModalState("confirmModal")[1];
  const dispatch = useAppDispatch();

  const handleChangeStatusTodo = async () => {
    const parsedDate = parse(expirationDate, DATE_FORMAT, new Date()).toISOString();
    await dispatch(editTodosThunk({ id, title, expirationDate: parsedDate, createdDate, isCompleted: !isCompleted }));
    void dispatch(getFilteredTodosThunk({ filter: filterValue }));
  };

  const handleClickDeleteTodo = () => {
    setConfirmModalActive(true, {
      confirmCallback: async () => {
        await dispatch(deleteTodoThunk(id));
        void dispatch(getFilteredTodosThunk({ filter: TodoCurrentFilter.ALL }));
        dispatch(setFiltrationValue(TodoCurrentFilter.ALL));
        dispatch(setNotification({ title: TodoNotificationMessages.DELETE_TODO, type: NotificationType.SUCCESS }));
      },
      message: TodoConfirmMessages.DELETE_TODO,
    });
  };
  const handleClickEditTodo = () => {
    if (!isCompleted) {
      setEditModalActive(true);
      dispatch(setCurrentTodo({ id, title, expirationDate, createdDate, isCompleted }));
    }
  };
  return (
    <li className={cn(styles.todoContainer, !checkOnCurrentExpirationDate(expirationDate) && styles.expiredTodoContainer)}>
      <div>
        <div className={styles.todoContent}>
          <label className={styles.todoCheck}>
            <Input className={styles.todoInput} type="checkbox" checked={isCompleted} onChange={handleChangeStatusTodo} />
            <span className={styles.todoCheckbox}></span>
          </label>
          <p className={cn(styles.todoTitle, isCompleted && styles.todoCompleted)}>{title}</p>
        </div>
        {isShowInfo && (
          <ul className={styles.todoDateContainer}>
            <li className={styles.todoDateContent}>{createdDate}</li>
            <BsDashLg className={styles.todoDateContent} />
            <li className={styles.todoDateContent}> {expirationDate}</li>
          </ul>
        )}
      </div>
      <HiOutlinePencilAlt
        className={cn(styles.todoIcon, styles.editIcon, isCompleted && styles.disabledEditIcon)}
        onClick={handleClickEditTodo}
      />
      <BiTrash className={cn(styles.todoIcon, styles.trashIcon)} onClick={handleClickDeleteTodo} />
      <AiOutlineInfoCircle className={cn(styles.todoIcon, styles.infoIcon)} onClick={() => setIsShowInfo(prev => !prev)} />
    </li>
  );
};
