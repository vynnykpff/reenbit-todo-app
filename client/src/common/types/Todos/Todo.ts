import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

export type TodoState = {
  todos: TodoActions[];
  title: string;
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
  title: "",
  todo: { _id: "", title: "", createdDate: "", isCompleted: false, expirationDate: "", userId: "" },
  originalTodos: [],
  filterValue: TodoCurrentFilter.ALL,
  searchedTodos: [],
  searchValue: "",
  isPending: false,
  error: null,
};
