import { CurrentTodoFilter, TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes } from "@/common/types/Todo.ts";

type TodoState = {
  todos: Todo[];
  todoTitle: string;
  todo: Todo;
  originalTodos: Todo[];
  filterValue: string;
};

const initialState: TodoState = {
  todos: [],
  todoTitle: "",
  todo: { todoId: "", todoTitle: "", createdDate: "", isCompleted: false, expirationDate: "" },
  originalTodos: [],
  filterValue: CurrentTodoFilter.ALL,
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

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case TodoConstants.ADD_TODO: {
      const newTodo = action.payload;
      const updatedOriginalTodos = [newTodo, ...state.originalTodos];

      return {
        ...state,
        filterValue: CurrentTodoFilter.ALL,
        todos: updatedOriginalTodos,
        originalTodos: updatedOriginalTodos,
      };
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
        originalTodos: updatedOriginalTodos,
      };
    }

    case TodoConstants.DELETE_TODO: {
      const filteredTodos = state.todos.filter(todo => todo.todoId !== action.payload.todoId);
      const filteredOriginalTodos = state.originalTodos.filter(todo => todo.todoId !== action.payload.todoId);
      return {
        ...state,
        todos: filteredTodos,
        originalTodos: filteredOriginalTodos,
      };
    }
    case TodoConstants.EDIT_TODO: {
      const { todoId, todoTitle, createdDate, expirationDate } = action.payload;
      const editedTodo = state.todos.map(todo => (todo.todoId === todoId ? { ...todo, todoTitle, createdDate, expirationDate } : todo));

      return {
        ...state,
        todos: editedTodo,
        originalTodos: editedTodo,
      };
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

      return {
        ...state,
        filterValue: filter,
        todos: filter === CurrentTodoFilter.ALL ? state.originalTodos : filteredTodos,
      };
    }

    case TodoConstants.DELETE_COMPLETED_TODOS: {
      const filteredCompletedTodos = state.originalTodos.filter(todo => !todo.isCompleted);

      return {
        ...state,
        todos: filteredCompletedTodos,
        originalTodos: filteredCompletedTodos,
      };
    }

    default:
      return state;
  }
};
