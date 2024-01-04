import { TodoAsyncActions, TodoManagementActions } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";

type TodosPendingAction = {
  type: typeof TodoAsyncActions.TODO_PENDING;
};

type TodosSuccessAction = {
  type: typeof TodoAsyncActions.TODO_SUCCESS;
};

type TodosErrorAction = {
  type: typeof TodoAsyncActions.TODO_ERROR;
  payload: string | null;
};

type GetTodosAction = {
  type: typeof TodoManagementActions.GET_TODOS;
  payload: TodoActions[];
};

type CreateTodoAction = {
  type: typeof TodoManagementActions.CREATE_TODO;
  payload: TodoActions;
};

export type AsyncTodosActions = TodosPendingAction | TodosSuccessAction | TodosErrorAction | GetTodosAction | CreateTodoAction;
