import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

export const getReversedTodos = (todos: TodoActions[]) => {
  return todos.slice().reverse();
};
