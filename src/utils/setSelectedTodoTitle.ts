import { isValidField } from "@/utils/isValidField.ts";
import { FormEvent } from "react";

export const setSelectedTodoTitle = (
  e: FormEvent<HTMLInputElement>,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  field: string,
) => {
  const newValue = isValidField(e.currentTarget.value);
  setFieldValue(field, newValue);

  return newValue;
};
