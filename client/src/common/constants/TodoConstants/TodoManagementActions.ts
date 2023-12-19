export enum TodoManagementActions {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  DELETE_COMPLETED_TODOS = "DELETE_COMPLETED_TODOS",
}

export const TodoConstants = {
  ...TodoManagementActions,
};

export enum TodoEditingActions {
  EDIT_TODO = "EDIT_TODO",
  SET_TODO_TITLE = "SET_TODO_TITLE",
  SET_COMPLETED_TODO = "SET_COMPLETED_TODO",
  SET_CURRENT_TODO = "SET_CURRENT_TODO",
}

export const TodoEditingConstants = {
  ...TodoEditingActions,
};

export enum TodoFilteringActions {
  SET_FILTRATION_VALUE = "SET_FILTRATION_VALUE",
  SEARCH_TODO = "SEARCH_TODO",
  SEARCH_VALUE = "SEARCH_VALUE",
}

export const TodoFilteringConstants = {
  ...TodoFilteringActions,
};
