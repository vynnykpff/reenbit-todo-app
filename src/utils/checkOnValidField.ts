import { Dispatch, SetStateAction } from "react";

export const checkOnValidField = (setItem: Dispatch<SetStateAction<string>>, item: string) => {
  return setItem(item.replace(/[!@#$%^&*()\\[\]-_+={}:;",.<>/|?]/g, ""));
};
