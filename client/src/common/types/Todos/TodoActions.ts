import {
  TodoConstants,
  TodoEditingConstants,
  TodoFilteringConstants,
  TodoManagementActions,
} from "@/common/constants/TodoConstants/TodoManagementActions.ts";

export type TodoActions = {
  todoId: string;
  todoTitle: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;
  userId?: string;
};

type SetTodoTitleAction = {
  type: typeof TodoEditingConstants.SET_TODO_TITLE;
  payload: {
    todoTitle: TodoActions["todoTitle"];
  };
};

type SetTodoCompletedAction = {
  type: typeof TodoEditingConstants.SET_COMPLETED_TODO;
  payload: {
    todoId: TodoActions["todoId"];
  };
};

type DeleteTodoAction = {
  type: typeof TodoConstants.DELETE_TODO;
  payload: {
    todoId: TodoActions["todoId"];
  };
};

export type EditTodo = {
  todoTitle: TodoActions["todoTitle"];
  createdDate: TodoActions["createdDate"];
  expirationDate: TodoActions["expirationDate"];
  todoId: TodoActions["todoId"];
};

type EditTodoAction = {
  type: typeof TodoEditingConstants.EDIT_TODO;
  payload: EditTodo;
};

type SetCurrentTodoAction = {
  type: typeof TodoEditingConstants.SET_CURRENT_TODO;
  payload: TodoActions;
};

type SetFiltrationValueAction = {
  type: typeof TodoFilteringConstants.SET_FILTRATION_VALUE;
  payload: {
    filter: string;
  };
};

type DeleteCompletedTodoAction = {
  type: typeof TodoConstants.DELETE_COMPLETED_TODOS;
};

type SearchTodosAction = {
  type: typeof TodoFilteringConstants.SEARCH_TODO;
  payload: TodoActions[];
};

type SetSearchValueAction = {
  type: typeof TodoFilteringConstants.SEARCH_VALUE;
  payload: TodoActions["todoTitle"];
};

type ResetTodosAction = {
  type: typeof TodoManagementActions.RESET_TODOS;
};

export type TodoActionTypes =
  | SetTodoTitleAction
  | SetTodoCompletedAction
  | DeleteTodoAction
  | EditTodoAction
  | SetCurrentTodoAction
  | SetFiltrationValueAction
  | DeleteCompletedTodoAction
  | SearchTodosAction
  | SetSearchValueAction
  | ResetTodosAction;
