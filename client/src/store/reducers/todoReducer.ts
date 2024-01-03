import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import {
  TodoAsyncActions,
  TodoConstants,
  TodoEditingConstants,
  TodoFilteringConstants,
  TodoManagementActions,
} from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { TodoState, initialTodoState } from "@/common/types/Todos/Todo.ts";
import { TodoActionTypes, TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { AsyncTodosActions } from "@/common/types/Todos/TodoAsyncActions.ts";

const filterTodos = (todos: TodoActions[], filter: string): TodoActions[] => {
  switch (filter) {
    case TodoCurrentFilter.ACTIVE:
      return todos.filter(todo => !todo.isCompleted);
    case TodoCurrentFilter.COMPLETED:
      return todos.filter(todo => todo.isCompleted);
    default:
      return todos;
  }
};

const updateTodosAndOriginalTodos = (
  state: TodoState,
  updatedTodos: TodoActions[],
  filterValue: typeof TodoCurrentFilter.ALL,
): TodoState => {
  const filteredTodos = filterTodos(updatedTodos, filterValue);
  return {
    ...state,
    todos: filteredTodos,
    searchedTodos: filteredTodos,
    originalTodos: updatedTodos,
    filterValue,
    isPending: false,
    searchValue: "",
  };
};

const getSearchedTodos = (todos: TodoActions[], searchValue: string) => {
  return todos?.filter(todo => todo.todoTitle?.toLowerCase().includes(searchValue?.toLowerCase()));
};

export const todoReducer = (state = initialTodoState, action: TodoActionTypes | AsyncTodosActions): TodoState => {
  switch (action.type) {
    case TodoEditingConstants.SET_TODO_TITLE:
      return {
        ...state,
        ...action.payload,
      };
    case TodoEditingConstants.SET_COMPLETED_TODO: {
      const { todoId } = action.payload;
      const updatedTodos = state.todos.map(todo =>
        todo.todoId === todoId
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo,
      );
      const updatedOriginalTodos = state.originalTodos.map(todo =>
        todo.todoId === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      );

      const filteredTodos = filterTodos(updatedTodos, state.filterValue);

      return {
        ...state,
        todos: filteredTodos,
        searchedTodos: filteredTodos,
        originalTodos: updatedOriginalTodos,
        searchValue: "",
      };
    }

    case TodoEditingConstants.SET_CURRENT_TODO: {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case TodoFilteringConstants.SET_FILTRATION_VALUE: {
      const { filter } = action.payload;
      const filteredTodos = filterTodos(state.originalTodos, filter);
      const updatedTodos = filter === TodoCurrentFilter.ALL ? state.originalTodos : filteredTodos;

      return {
        ...state,
        filterValue: filter,
        todos: updatedTodos,
        searchedTodos: getSearchedTodos(filteredTodos, state.searchValue),
      };
    }
    case TodoConstants.DELETE_COMPLETED_TODOS: {
      const filteredCompletedTodos = state.originalTodos.filter(todo => !todo.isCompleted);
      return updateTodosAndOriginalTodos(state, filteredCompletedTodos, TodoCurrentFilter.ALL);
    }
    case TodoFilteringConstants.SEARCH_VALUE: {
      const searchValue = action.payload;

      return {
        ...state,
        searchValue,
        searchedTodos: getSearchedTodos(state.todos, searchValue),
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
      const reversedTodos = action.payload.slice().reverse();

      return {
        ...state,
        searchedTodos: reversedTodos,
        todos: reversedTodos,
        originalTodos: reversedTodos,
      };
    }

    case TodoManagementActions.RESET_TODOS: {
      return initialTodoState;
    }

    case TodoManagementActions.CREATE_TODO: {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    }

    case TodoEditingConstants.EDIT_TODO: {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    }

    default:
      return state;
  }
};
