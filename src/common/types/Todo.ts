import { TodoConstants } from "@/common/constants/TodoConstants.ts";

export type Todo = {
  title: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;
};

type AddTodoAction = {
  type: typeof TodoConstants.ADD_TODO;
  payload: Todo;
};

export type TodoActionTypes = AddTodoAction;
