import { Dispatch } from "react";
import { setFormattedDates } from "@/utils/setDateFormat.ts";
import {
  TodoAsyncActions,
  TodoConstants,
  TodoFilteringActions,
  TodoManagementActions,
} from "@/common/constants/TodoConstants/TodoManagementActions.ts";
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

      dispatch({
        type: TodoManagementActions.GET_TODOS,
        payload: setFormattedDates(rawResponse.todos),
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

export function deleteTodoThunk(todoId: string) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const response = await TodosService.deleteTodo(todoId);

      dispatch({
        type: TodoConstants.DELETE_TODO,
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

export function deleteAllTodosThunk(token: string) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const response = await TodosService.deleteAllTodos(token);

      dispatch({
        type: TodoConstants.DELETE_TODO,
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

export function searchTodoThunk(title: string) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const rawResponse = await TodosService.searchTodo(title);

      dispatch({
        type: TodoFilteringActions.SEARCH_TODO,
        payload: setFormattedDates(rawResponse.todos),
      });

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: TodoManagementActions.RESET_TODOS });
    }
  };
}
