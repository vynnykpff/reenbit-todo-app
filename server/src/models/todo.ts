import { Document, InferSchemaType, Schema, model } from "mongoose";

const { String } = Schema.Types;

const todoSchemaFields = {
  userId: { type: String, required: true },
  todoTitle: { type: String, required: true },
  createdDate: { type: String, required: true },
  expirationDate: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
};

const todoSchema = new Schema(todoSchemaFields);
type UserDocument = InferSchemaType<typeof todoSchema> & Document;

export const TodoModel = model<UserDocument>("Todo", todoSchema);
