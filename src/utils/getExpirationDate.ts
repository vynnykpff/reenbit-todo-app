import { format } from "date-fns";

export const getExpirationDate = (expirationDate: Date) => {
  return format(expirationDate, "dd.MM.yyyy HH:mm");
};
