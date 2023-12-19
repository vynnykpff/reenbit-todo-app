import { parse } from "date-fns";

export const getExpirationDateFormat = (date: string) => {
  return parse(date, "dd.MM.yyyy HH:mm", new Date());
};
