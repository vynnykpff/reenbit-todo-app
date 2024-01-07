import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

export const getCompletedTodos = (todos: TodoActions[]) => {
  return todos.filter(todo => todo.isCompleted);
};
