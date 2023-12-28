import { RequestHandler } from "express";
import { TodoModel } from "@models";
import { getAuthenticatedUser, makeError } from "@utils";
import { AuthExceptionMessage, AuthExceptionStatusCode, EXCEPTION_VALUE, ServerSuccessStatusCodes } from "@constants";

const { PARAMETERS_MISSING } = AuthExceptionMessage;

export const getAllTodos: RequestHandler = async (req, res, next) => {
  const { userId } = req.query;
  try {
    getAuthenticatedUser(req, res, next);

    if (!userId) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const todos = await TodoModel.find({ userId }).select({ userId: EXCEPTION_VALUE });

    res.status(ServerSuccessStatusCodes.CREATED).json({ todos });
  } catch (error) {
    next(error);
  }
};
