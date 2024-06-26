export enum TodoManagementActions {
  CREATE_TODO = "CREATE_TODO",
  DELETE_TODO = "DELETE_TODO",
  DELETE_COMPLETED_TODOS = "DELETE_COMPLETED_TODOS",
  RESET_TODOS = "RESET_TODOS",
  GET_TODOS = "GET_TODOS",
  GET_FILTERED_TODOS = "GET_FILTERED_TODOS",
}

export const TodoConstants = {
  ...TodoManagementActions,
};

export enum TodoEditingActions {
  EDIT_TODO = "EDIT_TODO",
  SET_TODO_TITLE = "SET_TODO_TITLE",
  SET_COMPLETED_TODO = "SET_COMPLETED_TODO",
  SET_CURRENT_TODO = "SET_CURRENT_TODO",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
}

export const TodoEditingConstants = {
  ...TodoEditingActions,
};

export enum TodoFilteringActions {
  SET_FILTRATION_VALUE = "SET_FILTRATION_VALUE",
  SEARCH_TODO = "SEARCH_TODO",
  SEARCH_VALUE = "SEARCH_VALUE",
  SET_AMOUNT_TODOS = "SET_AMOUNT_TODOS",
}

export const TodoFilteringConstants = {
  ...TodoFilteringActions,
};

export enum TodoAsyncActions {
  TODO_PENDING = "TODO_PENDING",
  TODO_SUCCESS = "TODO_SUCCESS",
  TODO_ERROR = "TODO_ERROR",
}
