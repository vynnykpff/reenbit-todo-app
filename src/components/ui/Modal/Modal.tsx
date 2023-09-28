import styles from "./Modal.module.scss";
import cn from "classnames";
import { Dispatch, FC, HTMLAttributes, ReactNode, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
  children: ReactNode;
  title: string;
  onHide?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const modalsElement = document.querySelector("#modals");

export const Modal: FC<ModalProps> = ({ modalActive, setModalActive, children, title, onHide, className, ...props }) => {
  const handleClick = () => {
    setModalActive(false);
  };

  useEffect(() => {
    if (!modalActive && onHide) {
      onHide();
    }
  }, [modalActive]);

  if (!modalsElement) {
    return null;
  }

  return createPortal(
    <div onClick={handleClick} className={`${styles.modalOverlay}  ${modalActive ? cn(styles.modal, styles.active) : styles.modal}`}>
      <div {...props} onClick={e => e.stopPropagation()} className={cn(styles.modalWrapper, className)}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>{title}</p>
          <div onClick={handleClick} className={styles.closeWrapper}>
            <svg
              className={styles.closeIcon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>,
    modalsElement,
  );
};
