import { Todo as TodoProps } from "@/common/types/Todo.ts";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { deleteTodo, setCurrentTodo, updateStatusTodo } from "@/store/actions/todoActionCreators.ts";
import cn from "classnames";
import { FC, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import styles from "./Todo.module.scss";

export const Todo: FC<TodoProps> = ({ todoTitle, createdDate, expirationDate, todoId, isCompleted }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const setModalActive = useModalState("editTodoModal")[1];
  const dispatch = useAppDispatch();

  const handleChangeStatusTodo = () => {
    dispatch(updateStatusTodo(todoId));
  };

  const handleClickDeleteTodo = () => {
    dispatch(deleteTodo(todoId));
  };

  const handleClickEditTodo = () => {
    setModalActive(true);
    dispatch(setCurrentTodo({ todoId, todoTitle, expirationDate, createdDate, isCompleted }));
  };

  return (
    <li className={cn(styles.todoContainer, isCompleted && styles.todoCompletedContainer)}>
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
      {!isCompleted && <HiOutlinePencilAlt className={cn(styles.todoIcon, styles.editIcon)} onClick={handleClickEditTodo} />}

      <BiTrash className={cn(styles.todoIcon, styles.trashIcon)} onClick={handleClickDeleteTodo} />
      <AiOutlineInfoCircle className={cn(styles.todoIcon, styles.infoIcon)} onClick={() => setIsShowInfo(prev => !prev)} />
    </li>
  );
};
