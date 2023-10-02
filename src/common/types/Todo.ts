import { TodoConstants } from "@/common/constants/TodoConstants.ts";

export type Todo = {
  todoTitle: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;
};

type AddTodoAction = {
  type: typeof TodoConstants.ADD_TODO;
  payload: Todo;
};

export type TodoTitle = {
  todoTitle: string;
};

type setTodoTitleAction = {
  type: typeof TodoConstants.SET_TODO_TITLE;
  payload: TodoTitle;
};

export type TodoActionTypes = AddTodoAction | setTodoTitleAction;
