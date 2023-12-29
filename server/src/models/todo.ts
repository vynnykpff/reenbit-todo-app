import { Document, InferSchemaType, Schema, model } from "mongoose";

const { String } = Schema.Types;

const todoSchemaFields = {
  todoId: { type: String, required: true, unique: false },
  todoTitle: { type: String, required: true },
  createdDate: { type: String, required: true },
  expirationDate: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
};

const todoSchema = new Schema(todoSchemaFields);
type UserDocument = InferSchemaType<typeof todoSchema> & Document;

export const TodoModel = model<UserDocument>("Todo", todoSchema);
