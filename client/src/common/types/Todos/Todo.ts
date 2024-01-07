import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

export type GetTodosParams = {
  token: string;
  filter: string;
};

export type TodoState = {
  todos: TodoActions[];
  filteredTodos: TodoActions[];
  amountCompletedTodos: number;
  amountActiveTodos: number;
  amountAllTodos: number;
  title: string;
  todo: TodoActions;
  filterValue: typeof TodoCurrentFilter.ALL;
  isPending: boolean;
  error: string | null;
};

export const initialTodoState: TodoState = {
  todos: [],
  filteredTodos: [],
  title: "",
  todo: { _id: "", title: "", createdDate: "", isCompleted: false, expirationDate: "", userId: "" },
  filterValue: TodoCurrentFilter.ALL,
  amountActiveTodos: 0,
  amountAllTodos: 0,
  amountCompletedTodos: 0,
  isPending: false,
  error: null,
};
