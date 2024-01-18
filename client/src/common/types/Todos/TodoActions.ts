import {
  TodoConstants,
  TodoEditingActions,
  TodoEditingConstants,
  TodoFilteringActions,
  TodoFilteringConstants,
  TodoManagementActions,
} from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { AmountTodos } from "@/common/types/Todos/Todo.ts";

export type TodoActions = {
  title: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;
  id?: string;
  userId?: string;
};

type SetTodoTitleAction = {
  type: typeof TodoEditingConstants.SET_TODO_TITLE;
  payload: TodoActions["title"];
};

type SetTodoCompletedAction = {
  type: typeof TodoEditingConstants.SET_COMPLETED_TODO;
  payload: TodoActions["id"];
};

type DeleteTodoAction = {
  type: typeof TodoConstants.DELETE_TODO;
  payload: TodoActions["id"];
};

export type EditTodo = {
  title: TodoActions["title"];
  createdDate: TodoActions["createdDate"];
  expirationDate: TodoActions["expirationDate"];
  _id: TodoActions["id"];
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
  payload: string;
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
  payload: TodoActions["title"];
};

type ResetTodosAction = {
  type: typeof TodoManagementActions.RESET_TODOS;
};

type GetFilteredTodos = {
  type: typeof TodoManagementActions.GET_FILTERED_TODOS;
  payload: TodoActions[];
};

type SetSearchValue = {
  type: typeof TodoEditingActions.SET_SEARCH_VALUE;
  payload: string;
};

type SetAmountTodos = {
  type: typeof TodoFilteringActions.SET_AMOUNT_TODOS;
  payload: AmountTodos;
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
  | GetFilteredTodos
  | SetSearchValue
  | SetAmountTodos
  | ResetTodosAction;
