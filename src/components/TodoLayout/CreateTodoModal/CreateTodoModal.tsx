import { TodoDateFormat, TodoValidateFields } from "@/common/constants/TodoConstants.ts";
import { TodoScheme } from "@/common/schemes/TodoScheme.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { Modal } from "@/components/ui/Modal/Modal.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { addTodo, setTodoTitle } from "@/store/actions/todoActionCreators.ts";
import moduleStyles from "@/styles/ModalCommom.module.scss";
import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { getExpirationDate } from "@/utils/getExpirationDate.ts";
import { setMaxTimeToDate, setMinTimeToDate, setMinutesToDate } from "@/utils/setTimeToDate.ts";
import cn from "classnames";
import { Formik } from "formik";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./CreateTodoModal.module.scss";

const ADDITION_TODO_TIME = 5;
const TIME_INTERVAL = 1;

export const CreateTodoModal = () => {
  const [modalActive, setModalActive] = useModalState("createTodoModal");

  const [expirationDate, setExpirationDate] = useState<Date | null>(null);

  const { todoTitle } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const closeModal = (): void => {
    setModalActive(false);
    dispatch(setTodoTitle({ todoTitle: "" }));
  };

  const handleChangeTodoTitle = (
    e: FormEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  ): void => {
    const newValue = checkOnValidField(e.currentTarget.value);
    setFieldValue(TodoValidateFields.TODO_TITLE, newValue);
    dispatch(setTodoTitle({ todoTitle: newValue }));
  };

  const handleDateChange = (date: Date | null, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void): void => {
    if (date) {
      if (new Date() > date) {
        setExpirationDate(setMinutesToDate(new Date(), ADDITION_TODO_TIME));
        setFieldValue(TodoValidateFields.EXPIRATION_DATE, setMinutesToDate(new Date(), ADDITION_TODO_TIME));
        return;
      }

      setExpirationDate(date);
      setFieldValue(TodoValidateFields.EXPIRATION_DATE, date);
    }
  };

  const handleSubmit = () => {
    setModalActive(false);
    if (expirationDate) {
      dispatch(
        addTodo({
          createdDate: TodoDateFormat,
          expirationDate: getExpirationDate(expirationDate),
          todoTitle,
          isCompleted: false,
        }),
      );
      dispatch(setTodoTitle({ todoTitle: "" }));
    }
  };

  return (
    <Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} title="Create Todo">
      <form onSubmit={e => e.preventDefault()} className={styles.modalForm}>
        <Formik
          initialValues={{
            todoTitle,
            expirationDate: "",
          }}
          validationSchema={TodoScheme}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, values, errors, setFieldValue }) => (
            <>
              <div className={cn(styles.modalFieldsWrapper, moduleStyles.modalFieldsWrapper)}>
                <label className={styles.modalLabel} htmlFor={TodoValidateFields.TODO_TITLE}>
                  <span className={styles.requiredSymbol}>*</span> Title:
                  <span className={styles.modalError}>{errors.todoTitle}</span>
                </label>
                <Input
                  className={cn(styles.modalField, errors.todoTitle ? styles.modalFieldError : styles.modalField)}
                  placeholder="Enter new todo"
                  onChange={e => handleChangeTodoTitle(e, setFieldValue)}
                  value={values.todoTitle}
                  id={TodoValidateFields.TODO_TITLE}
                />

                <label className={styles.modalLabel} htmlFor={TodoValidateFields.CREATED_DATE}>
                  Created date:
                </label>
                <Input
                  className={cn(styles.modalField, styles.disabledModalField, moduleStyles.disabledModalField)}
                  value={TodoDateFormat}
                  disabled
                  id={TodoValidateFields.CREATED_DATE}
                />

                <label className={styles.modalLabel} htmlFor={TodoValidateFields.EXPIRATION_DATE}>
                  <span className={styles.requiredSymbol}>*</span> Expiration date:
                  <span className={styles.modalError}>{errors.expirationDate}</span>
                </label>
                <DatePicker
                  className={cn(styles.modalField, errors.expirationDate ? styles.modalFieldError : styles.modalField)}
                  selected={expirationDate}
                  onChange={date => handleDateChange(date, setFieldValue)}
                  showTimeSelect
                  todayButton="Today"
                  timeFormat="HH:mm"
                  timeIntervals={TIME_INTERVAL}
                  dateFormat="dd.MM.yyyy HH:mm"
                  id={TodoValidateFields.EXPIRATION_DATE}
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
