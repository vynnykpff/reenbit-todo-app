import { RequestHandler } from "express";
import { TodoModelFields } from "@types";
import { TodoModel } from "@models";
import { getAmountTodos, getAuthenticatedUser, getFiltrationTodos, makeError } from "@utils";
import {
  AuthExceptionMessage,
  AuthExceptionStatusCode,
  EXCEPTION_VALUE,
  FiltrationTodosConstants,
  ServerExceptionStatusCodes,
  ServerSuccessStatusCodes,
  TodoExceptionMessage,
  TodoSuccessMessage,
  TodosPaths,
} from "@constants";

const { PARAMETERS_MISSING } = AuthExceptionMessage;
const { DELETE_COMPLETED_TODOS } = TodosPaths;

export const getAllTodos: RequestHandler = async (req, res, next) => {
  try {
    const { search, filter } = req.query;
    const userId = (await getAuthenticatedUser(req, res, next)) as string;

    let todos = [];

    if (search && typeof search === "string") {
      todos = await TodoModel.find({ userId, title: { $regex: new RegExp(search, "i") } });
    } else {
      todos = await TodoModel.find({ userId }).select({ userId: EXCEPTION_VALUE });
    }

    const filteredTodos = await getFiltrationTodos({ filter: filter as FiltrationTodosConstants, todos });

    res.status(ServerSuccessStatusCodes.OK).json({ todos: filteredTodos, amountTodos: { ...getAmountTodos(todos) } });
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
  const { title, expirationDate, isCompleted } = req.body as TodoModelFields;

  try {
    const { id } = req.params;

    if (!id) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    const updateFields: Record<string, any> = { id };

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
      return makeError({
        res,
        statusCode: AuthExceptionStatusCode.BAD_REQUEST,
        exceptionMessage: AuthExceptionMessage.PARAMETERS_MISSING,
      });
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedTodo) {
      return makeError({
        res,
        statusCode: ServerExceptionStatusCodes.NOT_FOUND,
        exceptionMessage: TodoExceptionMessage.TODO_NOT_FOUND,
      });
    }

    const todo = {
      _id: id,
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
  try {
    const { id } = req.params;
    const userId = await getAuthenticatedUser(req, res, next);

    if (!id) {
      return makeError({ res, statusCode: AuthExceptionStatusCode.BAD_REQUEST, exceptionMessage: PARAMETERS_MISSING });
    }

    if (id === (DELETE_COMPLETED_TODOS as string) && userId) {
      await TodoModel.deleteMany({ userId, isCompleted: true });
    } else {
      await TodoModel.findByIdAndDelete(id);
    }

    res.status(ServerSuccessStatusCodes.OK).json({ message: TodoSuccessMessage.TODO_DELETED });
  } catch (error) {
    next(error);
  }
};
