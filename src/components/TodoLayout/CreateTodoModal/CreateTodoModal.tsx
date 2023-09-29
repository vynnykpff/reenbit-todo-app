import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { Modal } from "@/components/ui/Modal/Modal.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setTodoTitle } from "@/store/actions/todoActionCreators.ts";
import { getCurrentDate } from "@/utils/getCurrentDate.ts";
import cn from "classnames";
import { ChangeEvent, useState } from "react";
import styles from "./CreateTodoModal.module.scss";

export const CreateTodoModal = () => {
  const [modalActive, setModalActive] = useModalState("createTodoModal");
  const { title } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();
  const [expirationDate, setExpirationDate] = useState("");

  const closeModal = () => {
    setModalActive(false);
  };

  const handleChangeTodoTile = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTodoTitle({ title: e.target.value }));
  };

  const handleChangeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(e.target.value);
  };

  return (
    <Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} title="Create Todo">
      <form className={styles.modalForm}>
        <div className={styles.modalFieldsWrapper}>
          <label className={styles.modalLabel} htmlFor="todoTitle">
            Title:
          </label>
          <Input className={styles.modalField} placeholder="Enter new todo" onChange={handleChangeTodoTile} value={title} id="todoTitle" />

          <label className={styles.modalLabel} htmlFor="createdDate">
            Created date:
          </label>
          <Input className={cn(styles.modalField, styles.disabledModalField)} value={getCurrentDate()} disabled={true} id="createdDate" />

          <label className={styles.modalLabel} htmlFor="expirationDate">
            Expiration date:
          </label>
          <Input
            className={styles.modalField}
            type="date"
            value={expirationDate}
            onChange={handleChangeExpirationDate}
            id="expirationDate"
          />
        </div>

        <div className={styles.footerModal}>
          <Button onClick={closeModal} className={cn(styles.cancelButton, styles.createTodoModalButton)}>
            Cancel
          </Button>
          <Button className={cn(styles.agreeButton, styles.createTodoModalButton)}>Save</Button>
        </div>
      </form>
    </Modal>
  );
};
