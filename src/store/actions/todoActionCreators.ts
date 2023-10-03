import { TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes } from "@/common/types/Todo.ts";

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: TodoConstants.ADD_TODO,
  payload: {
    ...todo,
  },
});

export const setTodoTitle = (todoTitle: Todo["todoTitle"]): TodoActionTypes => ({
  type: TodoConstants.SET_TODO_TITLE,
  payload: {
    todoTitle,
  },
});

export const updateStatusTodo = (todoId: Todo["todoId"]): TodoActionTypes => ({
  type: TodoConstants.SET_COMPLETED_TODO,
  payload: {
    todoId,
  },
});
