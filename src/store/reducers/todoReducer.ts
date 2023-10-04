import { TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes } from "@/common/types/Todo.ts";

type TodoState = {
  todos: Todo[];
  todoTitle: string;
  todo: Todo;
};

const initialState: TodoState = {
  todos: [],
  todoTitle: "",
  todo: { todoId: "", todoTitle: "", createdDate: "", isCompleted: false, expirationDate: "" },
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case TodoConstants.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case TodoConstants.SET_TODO_TITLE:
      return {
        ...state,
        ...action.payload,
      };
    case TodoConstants.SET_COMPLETED_TODO: {
      const { todoId } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo => (todo.todoId === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
      };
    }
    case TodoConstants.DELETE_TODO: {
      const filteredTodos = state.todos.filter(todo => todo.todoId !== action.payload.todoId);

      return {
        ...state,
        todos: filteredTodos,
      };
    }
    case TodoConstants.EDIT_TODO: {
      const { todoId, todoTitle, createdDate, expirationDate } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo => (todo.todoId === todoId ? { ...todo, todoTitle, createdDate, expirationDate } : todo)),
      };
    }
    case TodoConstants.SET_CURRENT_TODO: {
      return {
        ...state,
        todo: action.payload,
      };
    }
    default:
      return state;
  }
};
