import { TodoCurrentFilter } from "@/common/constants/TodoConstants/TodoFilters.ts";
import {
  TodoAsyncActions,
  TodoConstants,
  TodoEditingConstants,
  TodoFilteringConstants,
  TodoManagementActions,
} from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { TodoActionTypes, TodoActions } from "@/common/types/Todos/TodoActions.ts";

type TodoState = {
  todos: TodoActions[];
  title: string;
  todo: TodoActions;
  originalTodos: TodoActions[];
  filterValue: typeof TodoCurrentFilter.ALL;
  searchedTodos: TodoActions[];
  searchValue: string;
  isPending: boolean;
  error: string | null;
};

const initialState: TodoState = {
  todos: [],
  title: "",
  todo: { _id: "", title: "", createdDate: "", isCompleted: false, expirationDate: "" },
  originalTodos: [],
  filterValue: TodoCurrentFilter.ALL,
  searchedTodos: [],
  searchValue: "",
  isPending: false,
  error: null,
};

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
  return todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()));
};

export const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case TodoConstants.ADD_TODO: {
      const newTodo = action.payload;
      const updatedOriginalTodos = [newTodo, ...state.originalTodos];
      return updateTodosAndOriginalTodos(state, updatedOriginalTodos, TodoCurrentFilter.ALL);
    }
    case TodoEditingConstants.SET_TODO_TITLE:
      return {
        ...state,
        ...action.payload,
      };
    case TodoEditingConstants.SET_COMPLETED_TODO: {
      const { todoId } = action.payload;
      const updatedTodos = state.todos.map(todo =>
        todo._id === todoId
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo,
      );
      const updatedOriginalTodos = state.originalTodos.map(todo =>
        todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo,
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
    case TodoConstants.DELETE_TODO: {
      const filteredTodos = state.originalTodos.filter(todo => todo._id !== action.payload.todoId);
      return updateTodosAndOriginalTodos(state, filteredTodos, state.filterValue);
    }

    case TodoEditingConstants.EDIT_TODO: {
      const { _id: userId, todoTitle, createdDate, expirationDate } = action.payload;

      const updatedTodoIndex = state.originalTodos.findIndex(todo => todo._id === userId);

      if (updatedTodoIndex === -1) {
        return state;
      }

      const updatedTodo = {
        ...state.originalTodos[updatedTodoIndex],
        todoTitle,
        createdDate,
        expirationDate,
      };

      const updatedOriginalTodos = [
        ...state.originalTodos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.originalTodos.slice(updatedTodoIndex + 1),
      ];

      return updateTodosAndOriginalTodos(state, updatedOriginalTodos, state.filterValue);
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
      const uniqTodos = state.originalTodos.filter(todo => action.payload.filter(item => item._id !== todo._id));

      if (!uniqTodos.length && action.payload.length) {
        const updatedOriginalTodos = [...action.payload, ...state.originalTodos];
        return updateTodosAndOriginalTodos(state, updatedOriginalTodos, TodoCurrentFilter.ALL);
      }

      return updateTodosAndOriginalTodos(state, uniqTodos, TodoCurrentFilter.ALL);
    }

    case TodoAsyncActions.TODO_ERROR: {
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    }

    case TodoManagementActions.RESET_TODOS: {
      return initialState;
    }

    default:
      return state;
  }
};
