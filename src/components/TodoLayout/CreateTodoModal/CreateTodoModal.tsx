import { FC, FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { Modal } from "@/components/ui/Modal/Modal.tsx";

import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { addTodo, setTodoTitle } from "@/store/actions/todoActionCreators.ts";

import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { setMaxTimeToDate, setMinTimeToDate, setMinutesToDate } from "@/utils/setTimeToDate.ts";

import cn from "classnames";

import { TodoScheme } from "@/common/schemes/TodoScheme.ts";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import { Formik } from "formik";

import styles from "./CreateTodoModal.module.scss";
import moduleStyles from "@/styles/ModalCommom.module.scss";

export const CreateTodoModal: FC = () => {
  const [modalActive, setModalActive] = useModalState("createTodoModal");

  const [expirationDate, setExpirationDate] = useState<Date | null>(null);

  const { title } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const closeModal = (): void => {
    setModalActive(false);
    dispatch(setTodoTitle({ title: "" }));
  };

  const handleChangeTodoTitle = (
    e: FormEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  ): void => {
    const newValue = checkOnValidField(e.currentTarget.value);
    setFieldValue("title", newValue);
    dispatch(setTodoTitle({ title: newValue }));
  };

  const handleDateChange = (date: Date | null, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void): void => {
    if (date) {
      if (new Date() > date) {
        setExpirationDate(setMinutesToDate(new Date(), 5));
        setFieldValue("expirationDate", setMinutesToDate(new Date(), 5));
        return;
      }

      setExpirationDate(date);
      setFieldValue("expirationDate", date);
    }
  };

  const handleSubmit = () => {
    setModalActive(false);
    if (expirationDate) {
      dispatch(
        addTodo({
          createdDate: format(new Date(), "dd.MM.yyyy HH:mm"),
          expirationDate: format(expirationDate, "dd.MM.yyyy HH:mm"),
          title,
          isCompleted: false,
        }),
      );
      dispatch(setTodoTitle({ title: "" }));
    }
  };

  return (
    <Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} title="Create Todo">
      <form onSubmit={e => e.preventDefault()} className={styles.modalForm}>
        <Formik
          initialValues={{
            title,
            expirationDate: "",
          }}
          validationSchema={TodoScheme}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, values, errors, setFieldValue }) => (
            <>
              <div className={cn(styles.modalFieldsWrapper, moduleStyles.modalFieldsWrapper)}>
                <label className={styles.modalLabel} htmlFor="todoTitle">
                  <span style={{ color: "var(--text-danger)" }}>*</span> Title:
                  <span className={styles.modalError}>{errors.title}</span>
                </label>
                <Input
                  className={cn(styles.modalField, errors.title ? styles.modalFieldError : styles.modalField)}
                  placeholder="Enter new todo"
                  onChange={e => handleChangeTodoTitle(e, setFieldValue)}
                  value={values.title}
                  id="todoTitle"
                />

                <label className={styles.modalLabel} htmlFor="createdDate">
                  Created date:
                </label>
                <Input
                  className={cn(styles.modalField, styles.disabledModalField, moduleStyles.disabledModalField)}
                  value={format(new Date(), "dd.MM.yyyy HH:mm")}
                  disabled={true}
                  id="createdDate"
                />

                <label className={styles.modalLabel} htmlFor="expirationDate">
                  <span style={{ color: "var(--text-danger)" }}>*</span> Expiration date:
                  <span className={styles.modalError}>{errors.expirationDate}</span>
                </label>
                <DatePicker
                  className={cn(styles.modalField, errors.expirationDate ? styles.modalFieldError : styles.modalField)}
                  selected={expirationDate}
                  onChange={date => handleDateChange(date, setFieldValue)}
                  showTimeSelect
                  todayButton="Today"
                  timeFormat="HH:mm"
                  timeIntervals={1}
                  dateFormat="dd.MM.yyyy HH:mm"
                  id="expirationDate"
                  placeholderText="Select expiration date"
                  minDate={new Date()}
                  minTime={setMinTimeToDate(expirationDate)}
                  maxTime={setMaxTimeToDate(new Date())}
                />
              </div>

              <div className={styles.footerModal}>
                <Button onClick={closeModal} className={cn(moduleStyles.cancelButton, styles.createTodoModalButton)}>
                  Cancel
                </Button>
                <Button onClick={() => handleSubmit()} className={cn(moduleStyles.agreeButton, styles.createTodoModalButton)}>
                  Save
                </Button>
              </div>
            </>
          )}
        </Formik>
      </form>
    </Modal>
  );
};
