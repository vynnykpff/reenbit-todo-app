import { Response } from "express";
import createHttpError from "http-errors";

type Params = {
  res: Response;
  statusCode: number;
  exceptionMessage: string;
};

export const makeError = ({ res, statusCode, exceptionMessage }: Params) => {
  res.status(statusCode).json(exceptionMessage);
  throw createHttpError(statusCode, exceptionMessage);
};
