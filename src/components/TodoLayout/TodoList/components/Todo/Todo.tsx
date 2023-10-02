import { FC, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { Todo as TodoProps } from "@/common/types/Todo.ts";
import styles from "./Todo.module.scss";

export const Todo: FC<TodoProps> = ({ todoTitle, createdDate, expirationDate }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <li className={styles.todoContainer}>
      <div>
        <p className={styles.todoTitle}>{todoTitle}</p>
        {isShowInfo && (
          <ul className={styles.todoDateContainer}>
            <li className={styles.todoDateContent}>{createdDate}</li>
            <BsDashLg className={styles.todoDateContent} />
            <li className={styles.todoDateContent}> {expirationDate}</li>
          </ul>
        )}
      </div>

      <AiOutlineInfoCircle className={styles.todoInfoIcon} onClick={() => setIsShowInfo(prev => !prev)} />
    </li>
  );
};
