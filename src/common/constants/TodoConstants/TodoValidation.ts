export const enum TodoValidateFields {
  TODO_TITLE = "todoTitle",
  CREATED_DATE = "createdDate",
  EXPIRATION_DATE = "expirationDate",
}

export const enum TodoNotificationMessages {
  MAX_LENGTH = "The maximum length of the title mustn't exceed 120 characters",
  EMPTY_TITLE = "You can't create an empty todo",
  REQUIRED_FIELD = "Required field",
  DELETE_COMPLETED_TODOS = "Successfully cleared the completed tasks",
  DELETE_TODO = "Successfully deleted the todo",
}

export const enum TodoConfirmMessages {
  DELETE_TODO = "delete current todo",
  DELETE_COMPLETED_TODOS = "delete completed todos",
}
