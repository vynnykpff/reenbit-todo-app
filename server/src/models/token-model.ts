import { Document, InferSchemaType, Schema, model } from "mongoose";

const tokenSchemaFields = {
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
};

const TokenSchema = new Schema(tokenSchemaFields);
type TokenDocument = InferSchemaType<typeof TokenSchema> & Document;

export const TokenModel = model<TokenDocument>("Token", TokenSchema);
