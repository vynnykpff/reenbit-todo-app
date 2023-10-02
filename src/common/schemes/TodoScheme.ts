import { TodoErrorMessages } from "@/common/constants/TodoConstants.ts";
import * as Yup from "yup";

export const TodoScheme = Yup.object().shape({
  todoTitle: Yup.string()
    .max(120, TodoErrorMessages.MAX_LENGTH)
    .min(1, TodoErrorMessages.EMPTY_TITLE)
    .required(TodoErrorMessages.REQUIRED_FIELD),
  expirationDate: Yup.string().required(TodoErrorMessages.REQUIRED_FIELD),
});
