import { SchemaTypes } from "mongoose";

const { String, ObjectId } = SchemaTypes;

type TodoModelField = {
  type: typeof String | BooleanConstructor;
  required: boolean;
};

export type TodoModelFields = {
  userId: TodoModelField;
  title: TodoModelField;
  createdDate: TodoModelField;
  expirationDate: TodoModelField;
  isCompleted: TodoModelField;
};

export type TodoModelParams = {
  _id: typeof ObjectId;
  title: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;
};

export type TodoDtoModel = {
  id: string;
} & Omit<TodoModelParams, "_id">;
