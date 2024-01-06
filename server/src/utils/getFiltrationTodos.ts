import { TodoModel } from "@models";
import { TodoModelFields } from "@types";
import { EXCEPTION_VALUE, FiltrationTodosConstants } from "@constants";

type Params = {
  filter: FiltrationTodosConstants;
  userId: string;
};

export const getFiltrationTodos = async ({ filter = FiltrationTodosConstants.ALL, userId = "" }: Params) => {
  let todos = [] as TodoModelFields[];

  if (filter === FiltrationTodosConstants.COMPLETED) {
    todos = await TodoModel.find({ userId, isCompleted: true }).select({ userId: EXCEPTION_VALUE });
  }

  if (filter === FiltrationTodosConstants.ACTIVE) {
    todos = await TodoModel.find({ userId, isCompleted: false }).select({ userId: EXCEPTION_VALUE });
  }

  if (filter === FiltrationTodosConstants.ALL) {
    todos = await TodoModel.find({ userId }).select({ userId: EXCEPTION_VALUE });
  }

  return todos;
};
