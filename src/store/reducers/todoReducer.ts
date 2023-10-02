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
    default:
      return state;
  }
};
