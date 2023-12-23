import * as Yup from "yup";
import { AuthValidateData, AuthValidateMessages } from "@/common/constants/AuthConstants/AuthValidate.ts";
import { TodoNotificationMessages } from "@/common/constants/TodoConstants/TodoValidation.ts";

export const LoginScheme = Yup.object().shape({
  email: Yup.string().email(AuthValidateMessages.INVALID_EMAIL).required(TodoNotificationMessages.REQUIRED_FIELD),
  password: Yup.string()
    .max(AuthValidateData.MAX_PASSWORD_LENGTH, AuthValidateMessages.MAX_LENGTH)
    .min(AuthValidateData.MIN_PASSWORD_LENGTH, AuthValidateMessages.MIN_LENGTH)
    .required(TodoNotificationMessages.REQUIRED_FIELD),
});
