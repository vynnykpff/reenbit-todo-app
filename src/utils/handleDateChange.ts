import { TodoTimeConstants, TodoValidateFields } from "@/common/constants/TodoConstants.ts";
import { setMinutesToDate } from "@/utils/setTimeToDate.ts";
import { Dispatch, SetStateAction } from "react";

export const handleDateChange = (
  date: Date | null,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  setExpirationDate: Dispatch<SetStateAction<Date | null>>,
) => {
  if (date) {
    if (new Date() > date) {
      setExpirationDate(setMinutesToDate(new Date(), TodoTimeConstants.ADDITION_TODO_TIME));
      setFieldValue(TodoValidateFields.EXPIRATION_DATE, setMinutesToDate(new Date(), TodoTimeConstants.ADDITION_TODO_TIME));
      return;
    }

    setExpirationDate(date);
    setFieldValue(TodoValidateFields.EXPIRATION_DATE, date);
  }
};
