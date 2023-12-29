import { Dispatch } from "react";
import { TodosService } from "@/services/todosService.ts";
import { GetTodoParams } from "@/common/types/Todos/Todo.ts";
import { TodoActionTypes } from "@/common/types/Todos/TodoActions.ts";
import { TodoAsyncActions, TodoManagementActions } from "@/common/constants/TodoConstants/TodoManagementActions.ts";

export function getTodosThunk({ token, userId }: GetTodoParams) {
  return async function (dispatch: Dispatch<TodoActionTypes>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const response = await TodosService.getTodos({ token, userId });

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
        payload: response.todos,
      });
    } catch (error) {
      dispatch({ type: TodoManagementActions.RESET_TODOS });
    }
  };
}
