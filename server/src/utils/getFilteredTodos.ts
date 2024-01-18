import { TodoModelParams, TodosParams } from "@types";
import { TodosFiltrationConstants } from "@constants";

type Params = {
  todos: TodoModelParams[];
} & Pick<TodosParams, "filter">;

const { ALL, ACTIVE, COMPLETED } = TodosFiltrationConstants;

export const getFilteredTodos = async ({ filter = ALL, todos }: Params): Promise<TodoModelParams[]> => {
  let filteredTodos = [] as TodoModelParams[];

  if (filter === COMPLETED) {
    filteredTodos = todos.filter(todo => todo.isCompleted);
  }

  if (filter === ACTIVE) {
    filteredTodos = todos.filter(todo => !todo.isCompleted);
  }

  if (filter === ALL) {
    filteredTodos = todos;
  }

  return filteredTodos;
};
