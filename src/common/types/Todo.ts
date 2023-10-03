import { TodoConstants } from "@/common/constants/TodoConstants.ts";

export type Todo = {
  todoTitle: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;
  todoId: string;
};

type AddTodoAction = {
  type: typeof TodoConstants.ADD_TODO;
  payload: Todo;
};

type setTodoTitleAction = {
  type: typeof TodoConstants.SET_TODO_TITLE;
  payload: {
    todoTitle: Todo["todoTitle"];
  };
};

type setTodoCompletedAction = {
  type: typeof TodoConstants.SET_COMPLETED_TODO;
  payload: {
    todoId: Todo["todoId"];
  };
};

type deleteTodoAction = {
  type: typeof TodoConstants.DELETE_TODO;
  payload: {
    todoId: Todo["todoId"];
  };
};

export type TodoActionTypes = AddTodoAction | setTodoTitleAction | setTodoCompletedAction | deleteTodoAction;
