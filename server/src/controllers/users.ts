import { UserPayload } from "@types";
import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "@models";
import { makeError, validateEnv } from "@utils";
import {
  AuthExceptionMessage,
  AuthExceptionStatusCode,
  ServerSuccessStatusCodes,
  UserExceptionMessage,
  UserValidationField,
} from "@constants";

const EXPIRATION_TIME = "1m";
const { JWT_ACCESS_SECRET } = validateEnv();

const { PASSWORD, EMAIL } = UserValidationField;
const { USER_NOT_FOUND, INVALID_PASSWORD } = UserExceptionMessage;
const { PARAMETERS_MISSING } = AuthExceptionMessage;

export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const user: UserPayload | null = await UserModel.findOne({ email }).select(`+${PASSWORD} +${EMAIL}`).lean().exec();

    if (!user) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.UNAUTHORIZED, exceptionMessage: USER_NOT_FOUND });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.UNAUTHORIZED, exceptionMessage: INVALID_PASSWORD });
    }

    const userCredential: Partial<UserPayload> = { ...user };
    delete userCredential.password;

    const accessToken = jwt.sign({ userId: user._id }, JWT_ACCESS_SECRET, { expiresIn: EXPIRATION_TIME });
    res.status(ServerSuccessStatusCodes.CREATED).json({ user: userCredential, accessToken });
  } catch (error) {
    next(error);
  }
};
