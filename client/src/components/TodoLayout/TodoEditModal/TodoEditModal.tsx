import { TodoTimeConstants } from "@/common/constants/TodoConstants/TodoTimeConstants.ts";
import { TodoValidateFields } from "@/common/constants/TodoConstants/TodoValidation.ts";
import { ButtonType } from "@/common/constants/UIConstants.ts";
import { TodoScheme } from "@/common/schemes/TodoScheme.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { Modal } from "@/components/ui/Modal/Modal.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useModalState } from "@/hooks/useModalState.ts";
import { editTodosThunk, getTodosThunk } from "@/store/thunks/todosThunks.ts";
import { getExpirationDateFormat } from "@/utils/getExpirationDateFormat.ts";
import { setSelectedTodoTitle } from "@/utils/setSelectedTodoTitle.ts";
import { setSelectedDate } from "@/utils/setSelectedDate.ts";
import { setExpirationDateFormat } from "@/utils/setExpirationDateFormat.ts";
import { setMaxTimeToDate, setMinTimeToDate } from "@/utils/setTimeToDate.ts";
import cn from "classnames";
import { isValid } from "date-fns";
import { Formik } from "formik";
import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "@/styles/ModalCommom.module.scss";

type FormData = {
  todoTitle: string;
  expirationDate: Date | null;
};

export const TodoEditModal = () => {
  const [modalActive, setModalActive] = useModalState("editTodoModal");
  const { todo } = useAppSelector(state => state.todoReducer);
  const { user } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access-token")!;
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);

  const handleSubmit = async (data: FormData) => {
    setModalActive(false);
    const { todoTitle, expirationDate } = data;
    const { todoId, createdDate } = todo;
    const formattedExpirationDate =
      isValid(expirationDate) && expirationDate !== null ? setExpirationDateFormat(expirationDate) : todo.expirationDate;

    await dispatch(editTodosThunk({ todoTitle, expirationDate: formattedExpirationDate, createdDate, todoId }));
    void dispatch(getTodosThunk({ token, userId: user?._id! }));
  };

  return (
    <Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} title="Edit Todo">
      <form onSubmit={e => e.preventDefault()} className={styles.modalForm}>
        <Formik
          initialValues={{
            todoTitle: todo.todoTitle,
            expirationDate: todo.expirationDate ? new Date(todo.expirationDate) : null,
          }}
          validationSchema={TodoScheme}
          onSubmit={(data: FormData) => handleSubmit(data)}
        >
          {({ handleSubmit, values, errors, setFieldValue }) => (
            <>
              <div className={styles.modalFieldsWrapper}>
                <label className={styles.modalLabel} htmlFor={TodoValidateFields.TODO_TITLE}>
                  <span className={styles.requiredSymbol}>*</span> Title:
                  <span className={styles.modalError}>{errors.todoTitle}</span>
                </label>
                <Input
                  className={cn(styles.modalField, errors.todoTitle ? styles.modalFieldError : styles.modalField)}
                  placeholder="Enter new todo"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedTodoTitle(e, setFieldValue, TodoValidateFields.TODO_TITLE)}
                  value={values.todoTitle}
                  id={TodoValidateFields.TODO_TITLE}
                />

                <label className={styles.modalLabel} htmlFor={TodoValidateFields.CREATED_DATE}>
                  Created date:
                </label>
                <Input
                  className={cn(styles.modalField, styles.disabledModalField)}
                  value={todo.createdDate}
                  disabled
                  id={TodoValidateFields.CREATED_DATE}
                />

                <label className={styles.modalLabel} htmlFor={TodoValidateFields.EXPIRATION_DATE}>
                  <span className={styles.requiredSymbol}>*</span> Expiration date:
                  <span className={styles.modalError}>{errors.expirationDate}</span>
                </label>
                <DatePicker
                  className={cn(styles.modalField, errors.expirationDate ? styles.modalFieldError : styles.modalField)}
                  onChange={date => setSelectedDate(date, setFieldValue, setExpirationDate)}
                  selected={expirationDate ?? getExpirationDateFormat(todo.expirationDate)}
                  showTimeSelect
                  todayButton="Today"
                  timeFormat="HH:mm"
                  timeIntervals={TodoTimeConstants.TIME_INTERVAL}
                  dateFormat="dd.MM.yyyy HH:mm"
                  id={TodoValidateFields.EXPIRATION_DATE}
                  placeholderText="Select expiration date"
                  minDate={new Date()}
                  minTime={setMinTimeToDate(expirationDate ?? getExpirationDateFormat(todo.expirationDate))}
                  maxTime={setMaxTimeToDate(new Date())}
                />
              </div>

              <div className={styles.footerModal}>
                <Button
                  onClick={() => setModalActive(false)}
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
