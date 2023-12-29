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

    res.status(ServerSuccessStatusCodes.OK).json({ todos });
  } catch (error) {
    next(error);
  }
};

export const createTodo: RequestHandler = async (req, res, next) => {
  const { todoId, todoTitle, createdDate, expirationDate, isCompleted } = req.body;

  try {
    if (!todoId || !todoTitle || !createdDate || !expirationDate) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const newTodo = new TodoModel({ todoId, todoTitle, createdDate, expirationDate, isCompleted });

    await newTodo.save();

    res.status(ServerSuccessStatusCodes.CREATED).json({ todo: newTodo });
  } catch (error) {
    next(error);
  }
};
