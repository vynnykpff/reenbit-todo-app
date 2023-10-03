import { format } from "date-fns";

export const setExpirationDateFormat = (expirationDate: Date) => {
  return format(expirationDate, "dd.MM.yyyy HH:mm");
};
