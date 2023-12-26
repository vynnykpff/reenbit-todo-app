import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import { UserRequestId } from "@types";
import { validateEnv } from "@utils";
import { AuthExceptionMessage, AuthExceptionStatusCode } from "@constants";

const { JWT_ACCESS_SECRET } = validateEnv();

export const verifyAccessToken = (token: string) => {
  try {
    console.log(token);
    const decoded = jwt.verify(token, JWT_ACCESS_SECRET) as UserRequestId;
    return decoded.userId;
  } catch (error) {
    throw createHttpError(AuthExceptionStatusCode.UNAUTHORIZED, AuthExceptionMessage.UNAUTHORIZED);
  }
};
