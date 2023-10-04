export enum TodoConstants {
  ADD_TODO = "ADD_TODO",
  SET_CURRENT_TODO = "SET_CURRENT_TODO",
  DELETE_TODO = "DELETE_TODO",
  EDIT_TODO = "EDIT_TODO",
  SET_TODO_TITLE = "SET_TODO_TITLE",
  SET_COMPLETED_TODO = "SET_COMPLETED_TODO",
}

export const enum TodoValidateFields {
  TODO_TITLE = "todoTitle",
  CREATED_DATE = "createdDate",
  EXPIRATION_DATE = "expirationDate",
}

export const enum TodoErrorMessages {
  MAX_LENGTH = "The maximum length of the title mustn't exceed 120 characters",
  EMPTY_TITLE = "You can't to create empty todo",
  REQUIRED_FIELD = "Required field",
}

export const enum TodoTimeConstants {
  ADDITION_TODO_TIME = 5,
  TIME_INTERVAL = 1,
}
