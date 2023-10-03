import { TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes } from "@/common/types/Todo.ts";

type TodoState = {
  todos: Todo[];
  todoTitle: string;
};

const initialState: TodoState = {
  todos: [],
  todoTitle: "",
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
    case TodoConstants.SET_COMPLETED_TODO:
      const clonedTodos = structuredClone(state.todos);
      const candidate = clonedTodos.findIndex(o => o.todoId === action.payload.todoId);
      if (candidate < 0) {
        return state;
      }
      clonedTodos[candidate].isCompleted = !clonedTodos[candidate].isCompleted;

      return { ...state, todos: clonedTodos };

    case TodoConstants.DELETE_TODO:
      const filteredTodos = state.todos.filter(todo => todo.todoId !== action.payload.todoId);

      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};
