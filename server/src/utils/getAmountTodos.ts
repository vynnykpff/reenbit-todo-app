import { TodoModelParams } from "@types";

export const getAmountTodos = (todos: TodoModelParams[]) => {
  const completedTodos = todos.filter(todo => todo.isCompleted);

  return {
    total: todos.length,
    completed: completedTodos.length,
  };
};
