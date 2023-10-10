import { TodoErrorMessages, TodoValidateData } from "@/common/constants/TodoConstants.ts";
import * as Yup from "yup";

export const TodoScheme = Yup.object().shape({
  todoTitle: Yup.string()
    .max(TodoValidateData.MAX_TITLE_LENGTH, TodoErrorMessages.MAX_LENGTH)
    .min(TodoValidateData.MIN_TITLE_LENGTH, TodoErrorMessages.EMPTY_TITLE)
    .required(TodoErrorMessages.REQUIRED_FIELD),
  expirationDate: Yup.string().required(TodoErrorMessages.REQUIRED_FIELD),
});
