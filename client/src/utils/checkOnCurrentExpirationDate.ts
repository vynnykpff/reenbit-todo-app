import { getDateFormat } from "@/utils/getDateFormat.ts";
import { isBefore } from "date-fns";

export const checkOnCurrentExpirationDate = (expirationDate: string) => {
  return isBefore(new Date(), getDateFormat(expirationDate));
};
