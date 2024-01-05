import { TodoConstants, TodoEditingConstants, TodoFilteringConstants } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { EditTodo, TodoActionTypes, TodoActions } from "@/common/types/Todos/TodoActions.ts";

export const setTodoTitle = (title: TodoActions["title"]): TodoActionTypes => ({
  type: TodoEditingConstants.SET_TODO_TITLE,
  payload: title,
});

export const updateStatusTodo = (_id: TodoActions["_id"]): TodoActionTypes => ({
  type: TodoEditingConstants.SET_COMPLETED_TODO,
  payload: _id,
});

export const deleteTodo = (_id: TodoActions["_id"]): TodoActionTypes => ({
  type: TodoConstants.DELETE_TODO,
  payload: _id,
});

export const editTodo = (todo: EditTodo): TodoActionTypes => ({
  type: TodoEditingConstants.EDIT_TODO,
  payload: {
    ...todo,
  },
});

export const setCurrentTodo = (todo: TodoActions): TodoActionTypes => ({
  type: TodoEditingConstants.SET_CURRENT_TODO,
  payload: {
    ...todo,
  },
});

export const setFiltrationValue = (filter: string): TodoActionTypes => ({
  type: TodoFilteringConstants.SET_FILTRATION_VALUE,
  payload: {
    filter,
  },
});

export const deleteCompletedTodos = (): TodoActionTypes => ({
  type: TodoConstants.DELETE_COMPLETED_TODOS,
});

export const setSearchValue = (todo: TodoActions["title"]): TodoActionTypes => ({
  type: TodoFilteringConstants.SEARCH_VALUE,
  payload: todo,
});
