import { RequestHandler } from "express";
import { TodoModel } from "@models";
import { getAuthenticatedUser, makeError } from "@utils";
import {
  AuthExceptionMessage,
  AuthExceptionStatusCode,
  EXCEPTION_VALUE,
  ServerExceptionStatusCodes,
  ServerSuccessStatusCodes,
  TodoExceptionMessage,
} from "@constants";

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
  const { todoId, userId, todoTitle, createdDate, expirationDate, isCompleted } = req.body;

  try {
    if (!todoId || !todoTitle || !createdDate || !expirationDate) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const newTodo = new TodoModel({ todoId, userId, todoTitle, createdDate, expirationDate, isCompleted });

    await newTodo.save();

    const todo = {
      todoId: newTodo._id,
      todoTitle: newTodo.todoTitle,
      createdDate: newTodo.createdDate,
      expirationDate: newTodo.expirationDate,
      isCompleted: newTodo.isCompleted,
    };

    res.status(ServerSuccessStatusCodes.CREATED).json({ ...todo });
  } catch (error) {
    next(error);
  }
};

export const editTodo: RequestHandler = async (req, res, next) => {
  const { todoId, todoTitle, expirationDate, isCompleted } = req.body;

  try {
    if (!todoId) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const updateFields: Record<string, any> = { todoId };

    if (todoTitle !== undefined) {
      updateFields.todoTitle = todoTitle;
    }

    if (expirationDate !== undefined) {
      updateFields.expirationDate = expirationDate;
    }

    if (isCompleted !== undefined) {
      updateFields.isCompleted = isCompleted;
    }

    if (!Object.keys(updateFields).length) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: AuthExceptionMessage.PARAMETERS_MISSING });
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, updateFields, { new: true });

    if (!updatedTodo) {
      return makeError({ res, statusCode: ServerExceptionStatusCodes.NOT_FOUND, exceptionMessage: TodoExceptionMessage.TODO_NOT_FOUND });
    }

    const todo = {
      todoId,
      todoTitle: updatedTodo.todoTitle,
      createdDate: updatedTodo.createdDate,
      expirationDate: updatedTodo.expirationDate,
      isCompleted: updatedTodo.isCompleted,
    };

    res.status(ServerSuccessStatusCodes.OK).json({ ...todo });
  } catch (error) {
    next(error);
  }
};
