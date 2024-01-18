import { Schema } from "mongoose";

export type UserPayload = {
  email: string;
  password: string;
};

export type UserModelParams = {
  email: UserPayload["email"];
  password: UserPayload["password"];
  _id: Schema.Types.ObjectId;
};

export type UserDtoModel = {
  email: UserPayload["email"];
  id: Schema.Types.ObjectId;
};
