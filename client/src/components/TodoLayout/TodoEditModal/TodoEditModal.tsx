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
import { editTodosThunk, getFilteredTodosThunk } from "@/store/thunks/todosThunks.ts";
import styles from "@/styles/ModalCommom.module.scss";
import { getDateFormat } from "@/utils/getDateFormat.ts";
import { DATE_FORMAT } from "@/utils/setDateFormat.ts";
import { setExpirationDateFormat } from "@/utils/setExpirationDateFormat.ts";
import { setSelectedDate } from "@/utils/setSelectedDate.ts";
import { setSelectedTodoTitle } from "@/utils/setSelectedTodoTitle.ts";
import { setMaxTimeToDate, setMinTimeToDate } from "@/utils/setTimeToDate.ts";
import cn from "classnames";
import { isValid } from "date-fns";
import { Formik } from "formik";
import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";

type FormData = {
  title: string;
  expirationDate: Date | null;
};

export const TodoEditModal = () => {
  const [modalActive, setModalActive] = useModalState("editTodoModal");
  const { todo, filterValue } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);

  const handleSubmit = async (data: FormData) => {
    setModalActive(false);
    const { title, expirationDate } = data;
    const { id, createdDate, isCompleted } = todo;
    const value = title.trim();

    const formattedExpirationDate =
      isValid(expirationDate) && expirationDate !== null
        ? setExpirationDateFormat(expirationDate)
        : setExpirationDateFormat(getDateFormat(todo.expirationDate));

    const createdDateFormat = setExpirationDateFormat(getDateFormat(createdDate));

    await dispatch(
      editTodosThunk({ title: value, expirationDate: formattedExpirationDate, createdDate: createdDateFormat, id: id, isCompleted }),
    );

    void dispatch(getFilteredTodosThunk({ filter: filterValue }));
  };

  return (
    <Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} title="Edit Todo">
      <form onSubmit={e => e.preventDefault()} className={styles.modalForm}>
        <Formik
          initialValues={{
            title: todo.title,
            expirationDate: todo.expirationDate ? new Date(todo.expirationDate) : null,
          }}
          validationSchema={TodoScheme}
          onSubmit={(data: FormData) => handleSubmit(data)}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedTodoTitle(e, setFieldValue, TodoValidateFields.TITLE)}
                  value={values.title}
                  id={TodoValidateFields.TITLE}
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
                  selected={expirationDate ?? getDateFormat(todo.expirationDate)}
                  showTimeSelect
                  todayButton="Today"
                  timeFormat="HH:mm"
                  timeIntervals={TodoTimeConstants.TIME_INTERVAL}
                  dateFormat={DATE_FORMAT}
                  id={TodoValidateFields.EXPIRATION_DATE}
                  placeholderText="Select expiration date"
                  minDate={new Date()}
                  minTime={setMinTimeToDate(expirationDate ?? getDateFormat(todo.expirationDate))}
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
