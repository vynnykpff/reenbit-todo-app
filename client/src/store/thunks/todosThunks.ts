import { Dispatch } from "react";
import { format } from "date-fns";
import { TodoAsyncActions, TodoManagementActions } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { TodoActionTypes, TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { AsyncTodosActions } from "@/common/types/Todos/TodoAsyncActions.ts";
import { TodosService } from "@/services/todosService.ts";

export function getTodosThunk(token: string) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const rawResponse = await TodosService.getTodos(token);

      const response = rawResponse.todos.map(todo => {
        const formattedCreatedDate = format(new Date(todo.createdDate), "dd.MM.yyyy HH:mm");
        const formattedExpirationDate = format(new Date(todo.expirationDate), "dd.MM.yyyy HH:mm");

        return {
          ...todo,
          createdDate: formattedCreatedDate,
          expirationDate: formattedExpirationDate,
        };
      });

      dispatch({
        type: TodoManagementActions.GET_TODOS,
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

export function editTodosThunk(params: TodoActions) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      await TodosService.editTodo({ ...params });

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: TodoManagementActions.RESET_TODOS });
    }
  };
}
