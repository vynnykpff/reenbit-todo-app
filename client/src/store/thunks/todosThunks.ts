import { TodoAsyncActions, TodoManagementActions } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { GetTodoParams } from "@/common/types/Todos/Todo.ts";
import { TodoActionTypes, TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { AsyncTodosActions } from "@/common/types/Todos/TodoAsyncActions.ts";
import { TodosService } from "@/services/todosService.ts";
import { Dispatch } from "react";

export function getTodosThunk({ token, userId }: GetTodoParams) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const response = await TodosService.getTodos({ token, userId });

      dispatch({
        type: TodoManagementActions.GET_TODOS,
        payload: response.todos,
      });

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: TodoManagementActions.RESET_TODOS });
    }
  };
}

export function createTodosThunk(params: TodoActions) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const response = await TodosService.createTodo({ ...params });

      dispatch({
        type: TodoManagementActions.CREATE_TODO,
        payload: response,
      });

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: TodoManagementActions.RESET_TODOS });
    }
  };
}
