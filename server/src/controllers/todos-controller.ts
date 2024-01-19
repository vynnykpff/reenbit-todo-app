import { NextFunction, Request, Response } from "express";
import { todosService } from "@services";
import { TodoCustomRequest, TodoDtoModel, TodoModelFields, TodosParams, UserDtoModel } from "@types";
import { ServerSuccessStatusCodes } from "@constants";

class TodosController {
  async getTodos(req: TodoCustomRequest, res: Response, next: NextFunction) {
    try {
      const { search, filter } = req.query as Omit<TodosParams, "userId">;
      const { id } = req.user as UserDtoModel;

      const todos = await todosService.getTodos({ userId: id, filter, search });

      return res.status(ServerSuccessStatusCodes.OK).json(todos);
    } catch (e) {
      next(e);
    }
  }

  async createTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, title, createdDate, expirationDate, isCompleted } = req.body as TodoModelFields;

      const todo = await todosService.createTodo({ userId, title, createdDate, expirationDate, isCompleted });

      return res.status(ServerSuccessStatusCodes.CREATED).json({ ...todo });
    } catch (e) {
      next(e);
    }
  }

  async editTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, expirationDate, isCompleted } = req.body as TodoDtoModel;
      const { id } = req.params;

      const editedTodo = await todosService.editTodo({ id, title, expirationDate, isCompleted });

      return res.status(ServerSuccessStatusCodes.OK).json({ ...editedTodo });
    } catch (e) {
      next(e);
    }
  }

  async deleteTodo(req: TodoCustomRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { id: userId } = req.user as UserDtoModel;

      const deletedTodo = await todosService.deleteTodo({ todoId: id, userId });

      return res.status(ServerSuccessStatusCodes.OK).json({ ...deletedTodo });
    } catch (e) {
      next(e);
    }
  }
}

export const todosController = new TodosController();
