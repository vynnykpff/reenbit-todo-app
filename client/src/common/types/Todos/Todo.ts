import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

export type GetTodoParams = {
  userId: string;
  token: string;
};

export type TodoState = {
  todos: TodoActions[];
  todoTitle: string;
  todo: TodoActions;
  originalTodos: TodoActions[];
  filterValue: typeof TodoCurrentFilter.ALL;
  searchedTodos: TodoActions[];
  searchValue: string;
  isPending: boolean;
  error: string | null;
};

export const initialTodoState: TodoState = {
  todos: [],
  todoTitle: "",
  todo: { todoId: "", todoTitle: "", createdDate: "", isCompleted: false, expirationDate: "", userId: "" },
  originalTodos: [],
  filterValue: TodoCurrentFilter.ALL,
  searchedTodos: [],
  searchValue: "",
  isPending: false,
  error: null,
};
