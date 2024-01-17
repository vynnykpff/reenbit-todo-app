import { TodoModelFields } from "@types";

export const getAmountTodos = (todos: TodoModelFields[]) => {
  const completedTodos = todos.filter(todo => todo.isCompleted);

  return {
    total: todos.length,
    completed: completedTodos.length,
  };
};
