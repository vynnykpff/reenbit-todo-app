import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import "dotenv/config";
import { ServerExceptionMessage, ServerExceptionStatusCodes } from "@constants";

const { ENDPOINT_NOT_FOUND, UNKNOWN_ERROR } = ServerExceptionMessage;
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = ServerExceptionStatusCodes;

export const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(NOT_FOUND, ENDPOINT_NOT_FOUND));
});

app.use((error, req: Request, res: Response) => {
  let errorMessage = UNKNOWN_ERROR as string;
  let statusCode = INTERNAL_SERVER_ERROR;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});
