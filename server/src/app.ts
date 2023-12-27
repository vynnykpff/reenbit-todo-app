import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors";
import "dotenv/config";
import { UserRouter } from "@routes";
import { API_PATH, ServerExceptionMessage, ServerExceptionStatusCodes } from "@constants";

const { ENDPOINT_NOT_FOUND, UNKNOWN_ERROR } = ServerExceptionMessage;
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = ServerExceptionStatusCodes;

export const app = express();

app.use(cors());
app.use(express.json());

app.use(API_PATH, UserRouter);

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
