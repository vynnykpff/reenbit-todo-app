import {
  TodoEditingConstants,
  TodoFilteringActions,
  TodoFilteringConstants,
} from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { AmountTodos } from "@/common/types/Todos/Todo.ts";
import { TodoActionTypes, TodoActions } from "@/common/types/Todos/TodoActions.ts";

export const setTodoTitle = (title: TodoActions["title"]): TodoActionTypes => ({
  type: TodoEditingConstants.SET_TODO_TITLE,
  payload: title,
});

export const setCurrentTodo = (todo: TodoActions): TodoActionTypes => ({
  type: TodoEditingConstants.SET_CURRENT_TODO,
  payload: {
    ...todo,
  },
});

export const setFiltrationValue = (filter: string): TodoActionTypes => ({
  type: TodoFilteringConstants.SET_FILTRATION_VALUE,
  payload: filter,
});

export const setSearchValue = (search: string): TodoActionTypes => ({
  type: TodoEditingConstants.SET_SEARCH_VALUE,
  payload: search,
});

export const setAmountTodos = (params: AmountTodos): TodoActionTypes => ({
  type: TodoFilteringActions.SET_AMOUNT_TODOS,
  payload: params,
});
