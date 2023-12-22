import { RequestHandler } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "@models";
import { getUserToken, validateEnv, verifyAccessToken } from "@utils";
import {
  AuthExceptionMessage,
  AuthExceptionStatusCode,
  ServerExceptionStatusCodes,
  ServerSuccessStatusCodes,
  UserExceptionMessage,
} from "@constants";

const EXPIRATION_TIME = "15d";

const { JWT_ACCESS_SECRET } = validateEnv();

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  try {
    const token = getUserToken(req);

    if (!token) {
      throw createHttpError(AuthExceptionStatusCode.UNAUTHORIZED, AuthExceptionMessage.UNAUTHORIZED);
    }

    const userId = verifyAccessToken(token);
    const user = await UserModel.findById(userId).select("+email").exec();

    if (!user) {
      throw createHttpError(ServerExceptionStatusCodes.NOT_FOUND, UserExceptionMessage.USER_NOT_FOUND);
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
      throw createHttpError(AuthExceptionStatusCode.BAD_REQUEST, AuthExceptionMessage.PARAMETERS_MISSING);
    }

    const user = await UserModel.findOne({ email }).select("+password +email").exec();

    if (!user) {
      // User not found
      throw createHttpError(AuthExceptionStatusCode.UNAUTHORIZED, "Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // Invalid password
      throw createHttpError(AuthExceptionStatusCode.UNAUTHORIZED, "Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, JWT_ACCESS_SECRET, { expiresIn: EXPIRATION_TIME });
    res.status(ServerSuccessStatusCodes.CREATED).json({ user, token });
  } catch (error) {
    next(error);
  }
};
