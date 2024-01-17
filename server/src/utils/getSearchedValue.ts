import { TodoModel } from "@models";
import { TodoModelFields } from "@types";
import { EXCEPTION_VALUE, FiltrationTodosConstants } from "@constants";

type Params = {
  filter: FiltrationTodosConstants;
  title: string;
};

export const getSearchedValue = async ({ filter = FiltrationTodosConstants.ALL, title }: Params) => {
  let todos = [] as TodoModelFields[];

  const regexTitle = new RegExp(title, "i");

  if (filter === FiltrationTodosConstants.COMPLETED) {
    todos = await TodoModel.find({ isCompleted: true, title: { $regex: regexTitle } }).select({ userId: EXCEPTION_VALUE });
  }

  if (filter === FiltrationTodosConstants.ACTIVE) {
    todos = await TodoModel.find({ isCompleted: false, title: { $regex: regexTitle } }).select({ userId: EXCEPTION_VALUE });
  }

  if (filter === FiltrationTodosConstants.ALL) {
    todos = await TodoModel.find({ title: { $regex: regexTitle } }).select({ userId: EXCEPTION_VALUE });
  }

  return todos;
};
