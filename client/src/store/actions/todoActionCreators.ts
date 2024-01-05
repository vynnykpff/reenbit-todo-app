import { TodoConstants, TodoEditingConstants, TodoFilteringConstants } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { EditTodo, TodoActionTypes, TodoActions } from "@/common/types/Todos/TodoActions.ts";

export const setTodoTitle = (todoTitle: TodoActions["todoTitle"]): TodoActionTypes => ({
  type: TodoEditingConstants.SET_TODO_TITLE,
  payload: {
    todoTitle,
  },
});

export const updateStatusTodo = (todoId: TodoActions["todoId"]): TodoActionTypes => ({
  type: TodoEditingConstants.SET_COMPLETED_TODO,
  payload: {
    todoId,
  },
});

export const deleteTodo = (todoId: TodoActions["todoId"]): TodoActionTypes => ({
  type: TodoConstants.DELETE_TODO,
  payload: {
    todoId,
  },
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
