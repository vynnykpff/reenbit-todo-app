import { TodoNotificationMessages, TodoValidateData } from "@/common/constants/TodoConstants.ts";
import * as Yup from "yup";

export const TodoScheme = Yup.object().shape({
  todoTitle: Yup.string()
    .max(TodoValidateData.MAX_TITLE_LENGTH, TodoNotificationMessages.MAX_LENGTH)
    .min(TodoValidateData.MIN_TITLE_LENGTH, TodoNotificationMessages.EMPTY_TITLE)
    .required(TodoNotificationMessages.REQUIRED_FIELD),
  expirationDate: Yup.string().required(TodoNotificationMessages.REQUIRED_FIELD),
});
