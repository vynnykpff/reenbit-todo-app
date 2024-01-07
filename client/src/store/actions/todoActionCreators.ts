import { TodoEditingConstants, TodoFilteringConstants } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
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
