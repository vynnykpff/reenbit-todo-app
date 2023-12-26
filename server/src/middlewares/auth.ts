import { Request, RequestHandler } from "express";
import { UserRequestId } from "@types";
import { getUserToken, verifyAccessToken } from "@utils";
import { AuthExceptionMessage, AuthExceptionStatusCode } from "@constants";

type RequestData = UserRequestId & Request;

export const requiresAuth: RequestHandler = (req: RequestData, res, next) => {
  const token = getUserToken(req);

  if (!token) {
    return res.status(AuthExceptionStatusCode.UNAUTHORIZED).json(AuthExceptionMessage.UNAUTHORIZED);
  }

  try {
    req.userId = verifyAccessToken(token);
    next();
  } catch {
    return res.status(AuthExceptionStatusCode.UNAUTHORIZED).json(AuthExceptionMessage.UNAUTHORIZED);
  }
};
