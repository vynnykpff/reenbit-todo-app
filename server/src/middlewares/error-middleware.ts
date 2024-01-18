import { Request, Response } from "express";
import { ApiError } from "@exceptions";
import { ServerExceptionMessage, ServerExceptionStatusCodes } from "@constants";

const { INTERNAL_SERVER_ERROR_CODE } = ServerExceptionStatusCodes;
const { INTERNAL_SERVER_ERROR_MESSAGE } = ServerExceptionMessage;

export const errorMiddleware = (err: Error | ApiError<any>, req: Request, res: Response) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }

  return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR_MESSAGE });
};
