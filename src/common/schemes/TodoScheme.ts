import * as Yup from "yup";

export const TodoScheme = Yup.object().shape({
  title: Yup.string()
    .max(120, "The maximum length of the title mustn't exceed 120 characters")
    .min(1, "You can't to create empty todo")
    .required("Required field"),
  expirationDate: Yup.string().required("Required field"),
});
