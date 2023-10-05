import { TodoConstants } from "@/common/constants/TodoConstants.ts";

export type Todo = {
  todoTitle: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;
  todoId: string;
};

type AddTodoAction = {
  type: typeof TodoConstants.ADD_TODO;
  payload: Todo;
};

type SetTodoTitleAction = {
  type: typeof TodoConstants.SET_TODO_TITLE;
  payload: {
    todoTitle: Todo["todoTitle"];
  };
};

type SetTodoCompletedAction = {
  type: typeof TodoConstants.SET_COMPLETED_TODO;
  payload: {
    todoId: Todo["todoId"];
  };
};

type DeleteTodoAction = {
  type: typeof TodoConstants.DELETE_TODO;
  payload: {
    todoId: Todo["todoId"];
  };
};

export type EditTodo = {
  todoTitle: Todo["todoTitle"];
  createdDate: Todo["createdDate"];
  expirationDate: Todo["expirationDate"];
  todoId: Todo["todoId"];
};

type EditTodoAction = {
  type: typeof TodoConstants.EDIT_TODO;
  payload: EditTodo;
};

type SetCurrentTodoAction = {
  type: typeof TodoConstants.SET_CURRENT_TODO;
  payload: Todo;
};

type SetFiltrationValueAction = {
  type: typeof TodoConstants.SET_FILTRATION_VALUE;
  payload: {
    filter: string;
  };
};

type DeleteCompletedTodoAction = {
  type: typeof TodoConstants.DELETE_COMPLETED_TODOS;
};

export type TodoActionTypes =
  | AddTodoAction
  | SetTodoTitleAction
  | SetTodoCompletedAction
  | DeleteTodoAction
  | EditTodoAction
  | SetCurrentTodoAction
  | SetFiltrationValueAction
  | DeleteCompletedTodoAction;
