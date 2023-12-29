import { Request, RequestHandler } from "express";
import { UserRequestId } from "@types";
import { getUserToken, verifyAccessToken } from "@utils";
import { AuthExceptionMessage, AuthExceptionStatusCode } from "@constants";

export type RequestData = UserRequestId & Request;

export const requiresAuth: RequestHandler = (req: RequestData, res, next) => {
  const rawAccessToken = req.headers.authorization!;
  const accessToken = getUserToken(rawAccessToken);

  if (!accessToken) {
    return res.status(AuthExceptionStatusCode.UNAUTHORIZED).json(AuthExceptionMessage.UNAUTHORIZED);
  }

  try {
    req.userId = verifyAccessToken({ res, accessToken });
    next();
  } catch {
    return res.status(AuthExceptionStatusCode.UNAUTHORIZED).json(AuthExceptionMessage.UNAUTHORIZED);
  }
};
