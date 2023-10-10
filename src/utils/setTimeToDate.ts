import { DateInfo } from "@/common/constants/TodoConstants.ts";
import { millisecondsInMinute, secondsInMinute } from "date-fns";

export const setMinutesToDate = (date: Date, minutes: number): Date => {
  const newDate = new Date(date);
  const minutesToAdd = minutes * millisecondsInMinute;
  newDate.setTime(newDate.getTime() + minutesToAdd);
  return newDate;
};

export const setMaxTimeToDate = (date: Date): Date => {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  nextDay.setHours(DateInfo.HOURS_IN_DAY - 1, secondsInMinute - 1, 0, 0);
  return nextDay;
};

export const setMinTimeToDate = (date: Date | null): Date => {
  const currentDate = new Date();
  const setAdditionalTime = 5;
  const resetAdditionalTime = -5;

  if (date && setMinutesToDate(date, resetAdditionalTime) > new Date()) {
    currentDate.setHours(0, 0, 0, 0);
    return new Date(currentDate);
  }

  return setMinutesToDate(currentDate, setAdditionalTime);
};
