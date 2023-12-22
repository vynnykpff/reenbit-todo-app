import { Request, RequestHandler } from "express";
import createHttpError from "http-errors";
import { UserRequestId } from "@types";
import { getUserToken, verifyAccessToken } from "@utils";
import { AuthExceptionMessage, AuthExceptionStatusCode } from "@constants";

type RequestData = UserRequestId & Request;

export const requiresAuth: RequestHandler = (req: RequestData, _, next) => {
  const token = getUserToken(req);

  if (!token) {
    return next(createHttpError(AuthExceptionStatusCode.UNAUTHORIZED, AuthExceptionMessage.UNAUTHORIZED));
  }

  try {
    req.userId = verifyAccessToken(token);
    next();
  } catch {
    next(createHttpError(AuthExceptionStatusCode.UNAUTHORIZED, AuthExceptionMessage.UNAUTHORIZED));
  }
};
