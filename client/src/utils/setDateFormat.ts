import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

export const DATE_FORMAT = "dd.MM.yyyy HH:mm";

export const setDateFormat = (date: Date) => {
  return format(date, DATE_FORMAT, { locale: uk });
};

export const setFormattedDates = (todos: TodoActions[]) => {
  return todos.map(todo => {
    const formattedCreatedDate = setDateFormat(new Date(todo.createdDate));
    const formattedExpirationDate = setDateFormat(new Date(todo.expirationDate));

    return {
      ...todo,
      createdDate: formattedCreatedDate,
      expirationDate: formattedExpirationDate,
    };
  });
};
