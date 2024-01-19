import { TodoModel } from "@models";
import { TodoModelParams, TodosParams } from "@types";
import { EXCEPTION_VALUE } from "@constants";

export const getSearchedTodos = async ({ search, userId }: Omit<TodosParams, "filter">): Promise<TodoModelParams[]> => {
  const regexTitle = new RegExp(search, "i");

  if (search?.length) {
    return TodoModel.find({ userId, title: { $regex: regexTitle } });
  }

  return TodoModel.find({ userId }).select({ userId: EXCEPTION_VALUE });
};
