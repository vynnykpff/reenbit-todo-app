import { TodoModelFields } from "@types";
import { FiltrationTodosConstants } from "@constants";

type Params = {
  filter: FiltrationTodosConstants;
  todos: TodoModelFields[];
};

export const getFiltrationTodos = async ({ filter = FiltrationTodosConstants.ALL, todos }: Params) => {
  let filteredTodos = [] as TodoModelFields[];

  if (filter === FiltrationTodosConstants.COMPLETED) {
    filteredTodos = todos.filter(todo => todo.isCompleted);
  }

  if (filter === FiltrationTodosConstants.ACTIVE) {
    filteredTodos = todos.filter(todo => !todo.isCompleted);
  }

  if (filter === FiltrationTodosConstants.ALL) {
    filteredTodos = todos;
  }

  return filteredTodos;
};
