import { format } from "date-fns";

export const DATE_FORMAT = "dd.MM.yyyy HH:mm";

export const setDateFormat = (date: Date) => {
  return format(date, DATE_FORMAT);
};
