import { Response } from "express";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import { UserRequestId } from "@types";
import { validateEnv } from "@utils";
import { AuthExceptionMessage, AuthExceptionStatusCode } from "@constants";

const { JWT_ACCESS_SECRET } = validateEnv();

type Params = {
  accessToken: string;
  res: Response;
};

export const verifyAccessToken = ({ res, accessToken }: Params) => {
  try {
    const decoded = jwt.verify(accessToken, JWT_ACCESS_SECRET) as UserRequestId;
    return decoded.userId;
  } catch (error) {
    res.status(AuthExceptionStatusCode.UNAUTHORIZED).json({ message: AuthExceptionMessage.UNAUTHORIZED });
    throw createHttpError(AuthExceptionStatusCode.UNAUTHORIZED, AuthExceptionMessage.UNAUTHORIZED);
  }
};
