import { Dispatch } from "react";
import { TodosService } from "@/services/todosService.ts";
import { TodoActionTypes } from "@/common/types/Todos/TodoActions.ts";
import { TodoAsyncActions, TodoManagementActions } from "@/common/constants/TodoConstants/TodoManagementActions.ts";

export function getTodosThunk(token: string) {
  return async function (dispatch: Dispatch<TodoActionTypes>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const response = await TodosService.getTodos(token);

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
        payload: response.todos,
      });
    } catch (error) {
      dispatch({ type: TodoManagementActions.RESET_TODOS });
    }
  };
}
