import { parse } from "date-fns";

export const getDateFormat = (date: string) => {
  return parse(date, "dd.MM.yyyy HH:mm", new Date());
};
