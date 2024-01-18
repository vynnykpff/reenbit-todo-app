export enum AuthExceptionMessage {
  UNAUTHORIZED_MESSAGE = "Unauthorized",
  USER_NOT_FOUND_MESSAGE = "User not found",
  USER_ALREADY_EXISTS_MESSAGE = "User with this email already exists",
}

export enum AuthExceptionStatusCode {
  UNAUTHORIZED_CODE = 401,
  BAD_REQUEST_CODE = 400,
}
