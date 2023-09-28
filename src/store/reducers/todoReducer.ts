import { TodoConstants } from "@/common/constants/TodoConstants.ts";
import { Todo, TodoActionTypes } from "@/common/types/Todo.ts";

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case TodoConstants.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
