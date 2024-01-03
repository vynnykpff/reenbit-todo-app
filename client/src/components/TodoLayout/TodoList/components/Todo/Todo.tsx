import { NotificationType } from "@/common/constants/NotificationConstants.ts";
import { TodoConfirmMessages, TodoNotificationMessages } from "@/common/constants/TodoConstants/TodoValidation.ts";
import { TodoActions as TodoProps } from "@/common/types/Todos/TodoActions.ts";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setNotification } from "@/store/actions/notificationActionCreators.ts";
import { setCurrentTodo } from "@/store/actions/todoActionCreators.ts";
import { deleteTodoThunk, editTodosThunk, getTodosThunk } from "@/store/thunks/todosThunks.ts";
import { checkOnCurrentExpirationDate } from "@/utils/checkOnCurrentExpirationDate.ts";
import cn from "classnames";
import { FC, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import styles from "./Todo.module.scss";

export const Todo: FC<TodoProps> = ({ todoTitle = "", createdDate = "", expirationDate = "", _id: todoId = "", isCompleted = false }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const { user } = useAppSelector(state => state.authReducer);
  const token = localStorage.getItem("access-token") ?? "";
  const setEditModalActive = useModalState("editTodoModal")[1];
  const setConfirmModalActive = useModalState("confirmModal")[1];
  const dispatch = useAppDispatch();

  const handleChangeStatusTodo = async () => {
    await dispatch(editTodosThunk({ todoId, isCompleted: !isCompleted, createdDate, expirationDate, todoTitle }));
    void dispatch(getTodosThunk({ token, userId: user?._id! }));
  };

  const handleClickDeleteTodo = () => {
    setConfirmModalActive(true, {
      confirmCallback: async () => {
        await dispatch(deleteTodoThunk(todoId));
        void dispatch(getTodosThunk({ token, userId: user?._id! }));
        dispatch(setNotification({ title: TodoNotificationMessages.DELETE_TODO, type: NotificationType.SUCCESS }));
      },
      message: TodoConfirmMessages.DELETE_TODO,
    });
  };

  const handleClickEditTodo = () => {
    if (!isCompleted) {
      setEditModalActive(true);
      dispatch(setCurrentTodo({ todoId, todoTitle, expirationDate, createdDate, isCompleted }));
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
          <p className={cn(styles.todoTitle, isCompleted && styles.todoCompleted)}>{todoTitle}</p>
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
