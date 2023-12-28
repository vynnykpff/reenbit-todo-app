import { Dispatch } from "react";
import { TodoAsyncActions } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { GetTodoParams } from "@/common/types/Todos/Todo.ts";
import { TodoActionTypes } from "@/common/types/Todos/TodoActions.ts";
import { TodosService } from "@/services/todosService.ts";

export function getTodosThunk({ token, userId }: GetTodoParams) {
  return async function (dispatch: Dispatch<TodoActionTypes>) {
    dispatch({
      type: TodoAsyncActions.TODO_PENDING,
    });

    const response = await TodosService.getTodos({ token, userId });

    dispatch({
      type: TodoAsyncActions.TODO_SUCCESS,
      payload: response.todos,
    });
  };
}
