import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

export type TodosParams = {
  title?: string;
  filter?: string;
};

export type AmountTodos = {
  total: number;
  completed: number;
};

export type TodoState = {
  todos: TodoActions[];
  amountTodos: AmountTodos;
  searchValue: string;
  title: string;
  todo: TodoActions;
  filterValue: typeof TodoCurrentFilter.ALL;
  isPending: boolean;
  error: string | null;
};

export const initialTodoState: TodoState = {
  todos: [],
  title: "",
  amountTodos: { total: 0, completed: 0 },
  todo: { _id: "", title: "", createdDate: "", isCompleted: false, expirationDate: "", userId: "" },
  filterValue: TodoCurrentFilter.ALL,
  searchValue: "",
  isPending: false,
  error: null,
};
