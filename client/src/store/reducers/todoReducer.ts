import {
  TodoAsyncActions,
  TodoEditingActions,
  TodoEditingConstants,
  TodoFilteringActions,
  TodoFilteringConstants,
  TodoManagementActions,
} from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { TodoState, initialTodoState } from "@/common/types/Todos/Todo.ts";
import { TodoActionTypes } from "@/common/types/Todos/TodoActions.ts";
import { AsyncTodosActions } from "@/common/types/Todos/TodoAsyncActions.ts";
import { getReversedTodos } from "@/utils/getReversedTodos.ts";

export const todoReducer = (state = initialTodoState, action: TodoActionTypes | AsyncTodosActions): TodoState => {
  switch (action.type) {
    case TodoEditingConstants.SET_TODO_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case TodoFilteringActions.SET_AMOUNT_TODOS: {
      return {
        ...state,
        amountTodos: action.payload,
      };
    }

    case TodoFilteringConstants.SET_FILTRATION_VALUE: {
      return {
        ...state,
        filterValue: action.payload,
      };
    }

    case TodoEditingActions.SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }

    case TodoEditingConstants.SET_CURRENT_TODO: {
      return {
        ...state,
        todo: action.payload,
      };
    }

    case TodoAsyncActions.TODO_PENDING: {
      return {
        ...state,
        isPending: true,
        error: null,
      };
    }

    case TodoAsyncActions.TODO_SUCCESS: {
      return {
        ...state,
        isPending: false,
        error: null,
      };
    }

    case TodoAsyncActions.TODO_ERROR: {
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    }

    case TodoManagementActions.GET_TODOS: {
      const reversedTodos = getReversedTodos(action.payload);

      return {
        ...state,
        todos: reversedTodos,
      };
    }

    case TodoManagementActions.GET_FILTERED_TODOS: {
      const reversedTodos = getReversedTodos(action.payload);

      return {
        ...state,
        todos: reversedTodos,
      };
    }

    case TodoManagementActions.CREATE_TODO: {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    }

    case TodoFilteringActions.SEARCH_TODO: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case TodoManagementActions.RESET_TODOS: {
      return initialTodoState;
    }

    default:
      return state;
  }
};
