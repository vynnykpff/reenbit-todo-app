import { CurrentTodoFilter, TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes } from "@/common/types/Todo.ts";

type TodoState = {
  todos: Todo[];
  todoTitle: string;
  todo: Todo;
  originalTodos: Todo[];
  filterValue: typeof CurrentTodoFilter.ALL;
  searchedTodos: Todo[];
  searchValue: string;
};

const initialState: TodoState = {
  todos: [],
  todoTitle: "",
  todo: { todoId: "", todoTitle: "", createdDate: "", isCompleted: false, expirationDate: "" },
  originalTodos: [],
  filterValue: CurrentTodoFilter.ALL,
  searchedTodos: [],
  searchValue: "",
};

const filterTodos = (todos: Todo[], filter: string): Todo[] => {
  switch (filter) {
    case CurrentTodoFilter.ACTIVE:
      return todos.filter(todo => !todo.isCompleted);
    case CurrentTodoFilter.COMPLETED:
      return todos.filter(todo => todo.isCompleted);
    default:
      return todos;
  }
};

const updateTodosAndOriginalTodos = (state: TodoState, updatedTodos: Todo[], filterValue: typeof CurrentTodoFilter.ALL): TodoState => {
  const filteredTodos = filterTodos(updatedTodos, filterValue);
  return {
    ...state,
    todos: filteredTodos,
    searchedTodos: filteredTodos,
    originalTodos: updatedTodos,
    filterValue,
    searchValue: "",
  };
};

const getSearchedTodos = (todos: Todo[], searchValue: string) => {
  return todos.filter(todo => todo.todoTitle.toLowerCase().includes(searchValue.toLowerCase()));
};

export const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case TodoConstants.ADD_TODO: {
      const newTodo = action.payload;
      const updatedOriginalTodos = [newTodo, ...state.originalTodos];
      return updateTodosAndOriginalTodos(state, updatedOriginalTodos, CurrentTodoFilter.ALL);
    }
    case TodoConstants.SET_TODO_TITLE:
      return {
        ...state,
        ...action.payload,
      };
    case TodoConstants.SET_COMPLETED_TODO: {
      const { todoId } = action.payload;
      const updatedTodos = state.todos.map(todo => (todo.todoId === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));
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
    case TodoConstants.DELETE_TODO: {
      const filteredTodos = state.originalTodos.filter(todo => todo.todoId !== action.payload.todoId);
      return updateTodosAndOriginalTodos(state, filteredTodos, state.filterValue);
    }

    case TodoConstants.EDIT_TODO: {
      const { todoId, todoTitle, createdDate, expirationDate } = action.payload;

      const updatedTodoIndex = state.originalTodos.findIndex(todo => todo.todoId === todoId);

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
    case TodoConstants.SET_CURRENT_TODO: {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case TodoConstants.SET_FILTRATION_VALUE: {
      const { filter } = action.payload;
      const filteredTodos = filterTodos(state.originalTodos, filter);
      const updatedTodos = filter === CurrentTodoFilter.ALL ? state.originalTodos : filteredTodos;

      return {
        ...state,
        filterValue: filter,
        todos: updatedTodos,
        searchedTodos: getSearchedTodos(filteredTodos, state.searchValue),
      };
    }
    case TodoConstants.DELETE_COMPLETED_TODOS: {
      const filteredCompletedTodos = state.originalTodos.filter(todo => !todo.isCompleted);
      return updateTodosAndOriginalTodos(state, filteredCompletedTodos, CurrentTodoFilter.ALL);
    }
    case TodoConstants.SEARCH_VALUE: {
      const searchValue = action.payload;

      return {
        ...state,
        searchValue,
        searchedTodos: getSearchedTodos(state.todos, searchValue),
      };
    }
    default:
      return state;
  }
};
