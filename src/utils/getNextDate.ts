import { TodoDateInfo } from "@/common/constants/TodoConstants/TodoTimeConstants.ts";
import { setExpirationDateFormat } from "@/utils/setExpirationDateFormat.ts";
import { millisecondsInMinute, minutesInHour } from "date-fns";

export const getNextDate = (date: Date) => {
  const nextDay = TodoDateInfo.HOURS_IN_DAY * minutesInHour * millisecondsInMinute;
  const futureDate = new Date(date.getTime() + nextDay);

  return setExpirationDateFormat(futureDate);
};
