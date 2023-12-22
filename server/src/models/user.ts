import { Document, InferSchemaType, Schema, model } from "mongoose";
const { String } = Schema.Types;

const userSchemaFields = {
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
};

const userSchema = new Schema(userSchemaFields);
type UserDocument = InferSchemaType<typeof userSchema> & Document;

export const UserModel = model<UserDocument>("User", userSchema);
