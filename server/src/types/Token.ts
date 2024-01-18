import { Schema } from "mongoose";

export type TokenPayload = {
  userId: Schema.Types.ObjectId;
  refreshToken: string;
};
