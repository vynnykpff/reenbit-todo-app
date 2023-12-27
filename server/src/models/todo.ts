import { Document, InferSchemaType, Schema, model } from "mongoose";

const { String } = Schema.Types;

const todoSchemaFields = {
  userId: { type: String, required: true, unique: false },
  title: { type: String, required: true },
  createdDate: { type: String, required: true },
  expiresDate: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
};

const todoSchema = new Schema(todoSchemaFields);
type UserDocument = InferSchemaType<typeof todoSchema> & Document;

export const TodoModel = model<UserDocument>("Todo", todoSchema);
