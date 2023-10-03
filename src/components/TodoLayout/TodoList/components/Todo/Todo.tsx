import { Todo as TodoProps } from "@/common/types/Todo.ts";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { deleteTodo, updateStatusTodo } from "@/store/actions/todoActionCreators.ts";
import cn from "classnames";
import { FC, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";
import styles from "./Todo.module.scss";

export const Todo: FC<TodoProps> = ({ todoTitle, createdDate, expirationDate, todoId, isCompleted }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeStatusTodo = () => {
    dispatch(updateStatusTodo(todoId));
  };

  const handleClickDeleteTodo = () => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <li className={styles.todoContainer}>
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
      <BiTrash className={cn(styles.todoIcon, styles.trashIcon)} onClick={handleClickDeleteTodo} />
      <AiOutlineInfoCircle className={cn(styles.todoIcon, styles.infoIcon)} onClick={() => setIsShowInfo(prev => !prev)} />
    </li>
  );
};
