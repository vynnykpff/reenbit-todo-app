import { Todo as TodoProps } from "@/common/types/Todo.ts";
import { FC, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import styles from "./Todo.module.scss";

export const Todo: FC<TodoProps> = ({ title, createdDate, expirationDate }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <div className={styles.todoContainer}>
      <div>
        <p className={styles.todoTitle}>{title}</p>
        {isShowInfo && (
          <div className={styles.todoDateContainer}>
            <p className={styles.todoDateContent}>{createdDate}</p>
            <BsDashLg className={styles.todoDateContent} />
            <p className={styles.todoDateContent}> {expirationDate}</p>
          </div>
        )}
      </div>

      <AiOutlineInfoCircle className={styles.todoInfoIcon} onClick={() => setIsShowInfo(prev => !prev)} />
    </div>
  );
};
