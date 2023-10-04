import { checkOnValidField } from "@/utils/checkOnValidField.ts";
import { FormEvent } from "react";

export const handleChangeTodoTitle = (
  e: FormEvent<HTMLInputElement>,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  field: string,
) => {
  const newValue = checkOnValidField(e.currentTarget.value);
  setFieldValue(field, newValue);

  return newValue;
};
