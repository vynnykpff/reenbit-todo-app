import { ButtonType } from "@/common/constants/UIConstants.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Modal } from "@/components/ui/Modal/Modal.tsx";
import { useModalState } from "@/hooks/useModalState.ts";
import modalStyles from "@/styles/ModalCommom.module.scss";
import styles from "./ModalConfirm.module.scss";
import cn from "classnames";
import { FC } from "react";

type Props = {
  confirmCallback(): void;
  message: string;
};

export const ModalConfirm: FC<Props> = ({ confirmCallback, message }) => {
  const [modalActive, setModalActive] = useModalState("modalConfirm");

  const handleCloseModal = () => {
    setModalActive(false);
  };

  const handleSubmit = () => {
    setModalActive(false);
    confirmCallback();
  };

  return (
    <Modal className={modalStyles.modalContainer} setModalActive={setModalActive} modalActive={modalActive}>
      <form onSubmit={e => e.preventDefault()} className={modalStyles.modalForm}>
        <div className={modalStyles.modalFieldsWrapper}>
          <p className={styles.confirmMessage}>
            Are you sure you want to <span className={styles.highlightConfirmMessage}>{message}</span> ?
          </p>
        </div>
        <div className={modalStyles.footerModal}>
          <Button
            onClick={handleCloseModal}
            type={ButtonType.BUTTON}
            className={cn(modalStyles.cancelButton, modalStyles.createTodoModalButton)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            type={ButtonType.BUTTON}
            className={cn(modalStyles.agreeButton, modalStyles.createTodoModalButton)}
          >
            Yes
          </Button>
        </div>
      </form>
    </Modal>
  );
};
