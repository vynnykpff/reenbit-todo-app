import cn from "classnames";
import { Dispatch, FC, HTMLAttributes, ReactNode, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./Modal.module.scss";

type ModalProps = {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
  children: ReactNode;
  title: string;
  onHide?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const modalsElement = document.querySelector("#modals");

export const Modal: FC<ModalProps> = ({ modalActive, setModalActive, children, title, onHide, className, ...props }) => {
  const handleHideModalClick = () => {
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
    <div onClick={handleHideModalClick} className={cn(styles.modalOverlay, modalActive ? styles.modal && styles.active : styles.modal)}>
      <div {...props} onClick={e => e.stopPropagation()} className={cn(styles.modalContainer, className)}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>{title}</p>
          <IoCloseOutline onClick={handleHideModalClick} className={styles.closeIcon} />
        </div>
        {children}
      </div>
    </div>,
    modalsElement,
  );
};
