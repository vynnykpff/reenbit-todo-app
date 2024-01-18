import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

export type TodoResponse = {
  todos: TodoActions[];
};

export type TodoParams = {
  token: string;
} & TodoActions;

export type TodoDeleteParams = {
  token: string;
  todoId: string;
};

export type SearchTodoParams = {
  title: string;
  filter: string;
  token: string;
};
