import { TodoTimeConstants } from "@/common/constants/TodoConstants/TodoTimeConstants.ts";
import { TodoValidateFields } from "@/common/constants/TodoConstants/TodoValidation.ts";
import { TodoValidateData } from "@/common/constants/TodoConstants/TodoValidationData.ts";
import { ButtonType } from "@/common/constants/UIConstants.ts";
import { TodoScheme } from "@/common/schemes/TodoScheme.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { Modal } from "@/components/ui/Modal/Modal.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { setTodoTitle } from "@/store/actions/todoActionCreators.ts";
import { createTodosThunk, getTodosThunk } from "@/store/thunks/todosThunks.ts";
import { getNextDate } from "@/utils/getNextDate.ts";
import { setSelectedTodoTitle } from "@/utils/setSelectedTodoTitle.ts";
import { setSelectedDate } from "@/utils/setSelectedDate.ts";
import { setExpirationDateFormat } from "@/utils/setExpirationDateFormat.ts";
import { setMaxTimeToDate, setMinTimeToDate } from "@/utils/setTimeToDate.ts";
import cn from "classnames";
import { Formik } from "formik";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/styles/ModalCommom.module.scss";

export const TodoCreateModal = () => {
  const [modalActive, setModalActive] = useModalState("createTodoModal");
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const { user } = useAppSelector(state => state.authReducer);
  const { title } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access-token") ?? "";

  const handleCloseModal = () => {
    setModalActive(false);
    dispatch(setTodoTitle(""));
  };

  const setChangedTodoTitle = (
    e: FormEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
    field: string,
  ) => {
    const newTodoValue = setSelectedTodoTitle(e, setFieldValue, field);
    dispatch(setTodoTitle(newTodoValue));
  };

  const handleSubmit = async () => {
    setModalActive(false);
    if (expirationDate) {
      const value = title.trim();
      await dispatch(
        createTodosThunk({
          createdDate: setExpirationDateFormat(new Date()),
          expirationDate: getNextDate(new Date()),
          title: value,
          isCompleted: false,
          userId: user?._id!,
        }),
      );

      await dispatch(getTodosThunk(token));
      dispatch(setTodoTitle(""));
    }
  };

  const handleChangeDatePicker = (date: Date, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
    if (setExpirationDateFormat(date).length === TodoValidateData.MAX_DATE_LENGTH) {
      return setSelectedDate(date, setFieldValue, setExpirationDate);
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
              <div className={styles.modalFieldsWrapper}>
                <label className={styles.modalLabel} htmlFor={TodoValidateFields.TITLE}>
                  <span className={styles.requiredSymbol}>*</span> Title:
                  <span className={styles.modalError}>{errors.title}</span>
                </label>
                <Input
                  className={cn(styles.modalField, errors.title ? styles.modalFieldError : styles.modalField)}
                  placeholder="Enter new todo"
                  onChange={e => setChangedTodoTitle(e, setFieldValue, TodoValidateFields.TITLE)}
                  value={values.title}
                  id={TodoValidateFields.TITLE}
                />

                <label className={styles.modalLabel} htmlFor={TodoValidateFields.CREATED_DATE}>
                  Created date:
                </label>
                <Input
                  className={cn(styles.modalField, styles.disabledModalField)}
                  value={setExpirationDateFormat(new Date())}
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
                  onChange={(date: Date) => handleChangeDatePicker(date, setFieldValue)}
                  showTimeSelect
                  todayButton="Today"
                  timeFormat="HH:mm"
                  timeIntervals={TodoTimeConstants.TIME_INTERVAL}
                  dateFormat="dd.MM.yyyy HH:mm"
                  id={TodoValidateFields.EXPIRATION_DATE}
                  placeholderText="Select expiration date"
                  minDate={new Date()}
                  minTime={setMinTimeToDate(expirationDate)}
                  maxTime={setMaxTimeToDate(new Date())}
                />
              </div>

              <div className={styles.footerModal}>
                <Button
                  onClick={handleCloseModal}
                  type={ButtonType.BUTTON}
                  className={cn(styles.cancelButton, styles.createTodoModalButton)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleSubmit()}
                  type={ButtonType.BUTTON}
                  className={cn(styles.agreeButton, styles.createTodoModalButton)}
                >
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
