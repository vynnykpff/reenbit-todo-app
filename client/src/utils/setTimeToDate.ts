import { TodoDateInfo, TodoTimeConstants } from "@/common/constants/TodoConstants/TodoTimeConstants.ts";
import { millisecondsInMinute, secondsInMinute } from "date-fns";

export const setMinutesToDate = (date: Date, minutes: number): Date => {
  const newDate = new Date(date);
  const minutesToAdd = minutes * millisecondsInMinute;
  newDate.setTime(newDate.getTime() + minutesToAdd);
  return newDate;
};

export const setMaxTimeToDate = (date: Date): Date => {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + TodoTimeConstants.TIME_INTERVAL);
  nextDay.setHours(TodoDateInfo.HOURS_IN_DAY - 1, secondsInMinute - 1, 0, 0);
  return nextDay;
};

export const setMinTimeToDate = (date: Date | null): Date => {
  const currentDate = new Date();

  if (date && setMinutesToDate(date, TodoTimeConstants.RESET_ADDITION_TODO_TIME) > currentDate) {
    currentDate.setHours(0, 0, 0, 0);
    return new Date(currentDate);
  }

  return setMinutesToDate(currentDate, TodoTimeConstants.ADDITION_TODO_TIME);
};
