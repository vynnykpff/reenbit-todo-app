export enum ServerExceptionMessage {
  UNKNOWN_ERROR = "An unknown error occurred",
  ENDPOINT_NOT_FOUND = "Endpoint not found",
}

export enum ServerExceptionStatusCodes {
  INTERNAL_SERVER_ERROR = 500,
  NOT_FOUND = 404,
}

export enum ServerSuccessStatusCodes {
  OK = 200,
  CREATED = 201,
}
