import { TodosParams } from "@/common/types/Todos/Todo.ts";
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

export function getFilteredTodosThunk({ filter }: TodosParams) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const rawResponse = await TodosService.getTodos({ filter });

      dispatch({
        type: TodoManagementActions.GET_FILTERED_TODOS,
        payload: setFormattedDates(rawResponse.todos),
      });

      dispatch({
        type: TodoFilteringActions.SET_AMOUNT_TODOS,
        payload: rawResponse.amountTodos!,
      });

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
      });

      return setFormattedDates(rawResponse.todos);
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

export function deleteAllTodosThunk() {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const response = await TodosService.deleteAllTodos();

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

export function searchTodoThunk({ title, filter }: TodosParams) {
  return async function (dispatch: Dispatch<TodoActionTypes | AsyncTodosActions>) {
    try {
      dispatch({
        type: TodoAsyncActions.TODO_PENDING,
      });

      const rawResponse = await TodosService.getTodos({ title, filter });

      dispatch({
        type: TodoFilteringActions.SEARCH_TODO,
        payload: setFormattedDates(rawResponse.todos),
      });

      dispatch({
        type: TodoFilteringActions.SET_AMOUNT_TODOS,
        payload: rawResponse.amountTodos!,
      });

      dispatch({
        type: TodoAsyncActions.TODO_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: TodoManagementActions.RESET_TODOS });
    }
  };
}
