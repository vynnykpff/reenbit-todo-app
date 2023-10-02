import { TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes, TodoTitle } from "@/common/types/Todo.ts";

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: TodoConstants.ADD_TODO,
  payload: {
    ...todo,
  },
});

export const setTodoTitle = (data: TodoTitle): TodoActionTypes => ({
  type: TodoConstants.SET_TODO_TITLE,
  payload: data,
});
