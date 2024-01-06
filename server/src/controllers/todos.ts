import { RequestHandler } from "express";
import { TodoModelFields } from "@types";
import { TodoModel } from "@models";
import { getAuthenticatedUser, getFiltrationTodos, makeError } from "@utils";
import {
  AuthExceptionMessage,
  AuthExceptionStatusCode,
  FiltrationTodosConstants,
  ServerExceptionStatusCodes,
  ServerSuccessStatusCodes,
  TodoExceptionMessage,
  TodoSuccessMessage,
} from "@constants";

const { PARAMETERS_MISSING } = AuthExceptionMessage;

export const getAllTodos: RequestHandler = async (req, res, next) => {
  try {
    const { filter } = req.query;

    const userId = (await getAuthenticatedUser(req, res, next)) as string;

    const todos = await getFiltrationTodos({ userId, filter: filter as FiltrationTodosConstants });

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

export const editTodo: RequestHandler = async (req, res, next) => {
  const { _id, title, expirationDate, isCompleted } = req.body as TodoModelFields;

  try {
    if (!_id) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const updateFields: Record<string, any> = { _id };

    if (title !== undefined) {
      updateFields.title = title;
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

    const updatedTodo = await TodoModel.findByIdAndUpdate(_id, updateFields, { new: true });

    if (!updatedTodo) {
      return makeError({ res, statusCode: ServerExceptionStatusCodes.NOT_FOUND, exceptionMessage: TodoExceptionMessage.TODO_NOT_FOUND });
    }

    const todo = {
      _id,
      title: updatedTodo.title,
      createdDate: updatedTodo.createdDate,
      expirationDate: updatedTodo.expirationDate,
      isCompleted: updatedTodo.isCompleted,
    };

    res.status(ServerSuccessStatusCodes.OK).json({ ...todo });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  const { todoId } = req.query;

  try {
    if (!todoId) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    await TodoModel.findByIdAndDelete(todoId);

    res.status(ServerSuccessStatusCodes.OK).json({ message: TodoSuccessMessage.TODO_DELETED });
  } catch (error) {
    next(error);
  }
};

export const deleteAllTodos: RequestHandler = async (req, res, next) => {
  try {
    const userId = await getAuthenticatedUser(req, res, next);

    if (!userId) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    await TodoModel.find({ userId });
    await TodoModel.deleteMany({ userId, isCompleted: true });

    res.status(ServerSuccessStatusCodes.OK).json(TodoSuccessMessage.TODO_DELETED);
  } catch (error) {
    next(error);
  }
};

export const searchTodo: RequestHandler = async (req, res, next) => {
  const { title } = req.query;

  try {
    if (!title || typeof title !== "string") {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const todos = await TodoModel.find({ title: { $regex: new RegExp(title, "i") } });

    res.status(ServerSuccessStatusCodes.OK).json({ todos });
  } catch (error) {
    next(error);
  }
};
