import { TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes } from "@/common/types/Todo.ts";

export const addTodo = (task: Todo): TodoActionTypes => ({
  type: TodoConstants.ADD_TODO,
  payload: {
    ...task,
  },
});
