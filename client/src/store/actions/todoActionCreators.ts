import { TodoConstants, TodoEditingConstants, TodoFilteringConstants } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { EditTodo, Todo, TodoActionTypes } from "@/common/types/Todo.ts";

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: TodoConstants.ADD_TODO,
  payload: {
    ...todo,
  },
});

export const setTodoTitle = (todoTitle: Todo["todoTitle"]): TodoActionTypes => ({
  type: TodoEditingConstants.SET_TODO_TITLE,
  payload: {
    todoTitle,
  },
});

export const updateStatusTodo = (todoId: Todo["todoId"]): TodoActionTypes => ({
  type: TodoEditingConstants.SET_COMPLETED_TODO,
  payload: {
    todoId,
  },
});

export const deleteTodo = (todoId: Todo["todoId"]): TodoActionTypes => ({
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

export const setCurrentTodo = (todo: Todo): TodoActionTypes => ({
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

export const setSearchValue = (todo: Todo["todoTitle"]): TodoActionTypes => ({
  type: TodoFilteringConstants.SEARCH_VALUE,
  payload: todo,
});
