export enum TodoManagementActions {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  DELETE_COMPLETED_TODOS = "DELETE_COMPLETED_TODOS",
}

export enum TodoEditingActions {
  EDIT_TODO = "EDIT_TODO",
  SET_TODO_TITLE = "SET_TODO_TITLE",
  SET_COMPLETED_TODO = "SET_COMPLETED_TODO",
  SET_CURRENT_TODO = "SET_CURRENT_TODO",
}

export enum TodoFilteringActions {
  SET_FILTRATION_VALUE = "SET_FILTRATION_VALUE",
}

export const TodoConstants = {
  ...TodoManagementActions,
  ...TodoEditingActions,
  ...TodoFilteringActions,
};

export const enum TodoValidateFields {
  TODO_TITLE = "todoTitle",
  CREATED_DATE = "createdDate",
  EXPIRATION_DATE = "expirationDate",
}

export const enum TodoErrorMessages {
  MAX_LENGTH = "The maximum length of the title mustn't exceed 120 characters",
  EMPTY_TITLE = "You can't to create empty todo",
  REQUIRED_FIELD = "Required field",
  CLEAR_COMPLETED = "Successfully cleared the completed tasks",
}

export const enum TodoTimeConstants {
  ADDITION_TODO_TIME = 5,
  TIME_INTERVAL = 1,
}

export const CurrentTodoFilter = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

export const CurrentTodoFilterArray = Object.values(CurrentTodoFilter);
