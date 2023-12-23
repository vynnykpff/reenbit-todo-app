import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "@models";
import { getUserToken, makeError, validateEnv, verifyAccessToken } from "@utils";
import {
  AuthExceptionMessage,
  AuthExceptionStatusCode,
  ServerExceptionStatusCodes,
  ServerSuccessStatusCodes,
  UserExceptionMessage,
  UserValidationField,
} from "@constants";

const EXPIRATION_TIME = "15d";
const { JWT_ACCESS_SECRET } = validateEnv();

const { PASSWORD, EMAIL } = UserValidationField;
const { USER_NOT_FOUND, INVALID_PASSWORD } = UserExceptionMessage;
const { UNAUTHORIZED, PARAMETERS_MISSING } = AuthExceptionMessage;

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  try {
    const token = getUserToken(req);

    if (!token) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.UNAUTHORIZED, exceptionMessage: UNAUTHORIZED });
    }

    const userId = verifyAccessToken(token);
    const user = await UserModel.findById(userId).select(`+${EMAIL}`).exec();

    if (!user) {
      return makeError({ res, statusCode: ServerExceptionStatusCodes.NOT_FOUND, exceptionMessage: USER_NOT_FOUND });
    }

    res.status(ServerSuccessStatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const user = await UserModel.findOne({ email }).select(`+${PASSWORD} +${EMAIL}`).exec();

    if (!user) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.UNAUTHORIZED, exceptionMessage: USER_NOT_FOUND });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.UNAUTHORIZED, exceptionMessage: INVALID_PASSWORD });
    }

    const token = jwt.sign({ userId: user._id }, JWT_ACCESS_SECRET, { expiresIn: EXPIRATION_TIME });
    res.status(ServerSuccessStatusCodes.CREATED).json({ user, token });
  } catch (error) {
    next(error);
  }
};