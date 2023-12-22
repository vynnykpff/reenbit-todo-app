import { Document, InferSchemaType, Schema, model } from "mongoose";
import createHttpError from "http-errors";
import { body } from "express-validator";
import bcrypt from "bcrypt";
import { UserExceptionStatusCode, UserValidationField, UserValidationMessage } from "@constants";

const { String } = Schema.Types;

const userSchemaFields = {
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
};

const userSchema = new Schema(userSchemaFields);
type UserDocument = InferSchemaType<typeof userSchema> & Document;

const { PASSWORD, EMAIL, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } = UserValidationField;

const SALT = 7;

userSchema.pre("save", async function (next) {
  const req = { body: { email: this.email, password: this.password } };

  const emailError = await body(EMAIL).isEmail().run(req);
  const passwordError = await body(PASSWORD)
    .isLength({
      min: +PASSWORD_MIN_LENGTH,
      max: +PASSWORD_MAX_LENGTH,
    })
    .run(req);

  if (!emailError.isEmpty()) {
    throw createHttpError(UserExceptionStatusCode.UNPROCESSABLE, UserValidationMessage.INVALID_EMAIL_FORMAT);
  }

  if (!passwordError.isEmpty()) {
    throw createHttpError(UserExceptionStatusCode.UNPROCESSABLE, UserValidationMessage.INVALID_PASSWORD);
  }

  this.password = await bcrypt.hash(this.password, SALT);

  next();
});

export const UserModel = model<UserDocument>("User", userSchema);
