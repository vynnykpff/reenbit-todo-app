import { format } from "date-fns";

export const setExpirationDateFormat = (date: Date) => {
  return format(date, "dd.MM.yyyy HH:mm");
};
