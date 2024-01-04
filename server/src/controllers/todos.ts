import { RequestHandler } from "express";
import { TodoModel } from "@models";
import { getAuthenticatedUser } from "@utils";
import { EXCEPTION_VALUE, ServerSuccessStatusCodes } from "@constants";

export const getAllTodos: RequestHandler = async (req, res, next) => {
  try {
    const userId = await getAuthenticatedUser(req, res, next);
    const todos = await TodoModel.find({ userId }).select({ userId: EXCEPTION_VALUE });

    res.status(ServerSuccessStatusCodes.OK).json({ todos });
  } catch (error) {
    next(error);
  }
};
