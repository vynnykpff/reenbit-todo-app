import { Schema } from "mongoose";

type TodoModelField = {
  type: typeof Schema.Types.String | BooleanConstructor;
  required: boolean;
};

export type TodoModelFields = {
  userId: TodoModelField;
  title: TodoModelField;
  createdDate: TodoModelField;
  expirationDate: TodoModelField;
  isCompleted: TodoModelField;
};
