import { RequestHandler } from "express";
import { TodoModel } from "@models";
import { getAuthenticatedUser, makeError } from "@utils";
import { TodoModelFields } from "@types";
import { AuthExceptionMessage, AuthExceptionStatusCode, EXCEPTION_VALUE, ServerSuccessStatusCodes } from "@constants";

const { PARAMETERS_MISSING } = AuthExceptionMessage;

export const getAllTodos: RequestHandler = async (req, res, next) => {
  try {
    const userId = await getAuthenticatedUser(req, res, next);
    const todos = await TodoModel.find({ userId }).select({ userId: EXCEPTION_VALUE });

    res.status(ServerSuccessStatusCodes.OK).json({ todos });
  } catch (error) {
    next(error);
  }
};

export const createTodo: RequestHandler = async (req, res, next) => {
  const { userId, title, createdDate, expirationDate, isCompleted } = req.body as TodoModelFields;

  try {
    if (!title || !createdDate || !expirationDate) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const newTodo = new TodoModel({ userId, title, createdDate, expirationDate, isCompleted });
    await newTodo.save();

    const todo = {
      _id: newTodo._id,
      title: newTodo.title,
      createdDate: newTodo.createdDate,
      expirationDate: newTodo.expirationDate,
      isCompleted: newTodo.isCompleted,
    };

    res.status(ServerSuccessStatusCodes.CREATED).json({ ...todo });
  } catch (error) {
    next(error);
  }
};
