import { AuthExceptionMessage, AuthExceptionStatusCode } from "@constants";

const { UNAUTHORIZED_CODE, BAD_REQUEST_CODE } = AuthExceptionStatusCode;
const { UNAUTHORIZED_MESSAGE } = AuthExceptionMessage;

export class ApiError<T> extends Error {
  status: number;
  errors: T[];

  constructor(status: number, message: string, errors: T[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(UNAUTHORIZED_CODE, UNAUTHORIZED_MESSAGE);
  }

  static BadRequest<T>(message: string, errors: T[] = []) {
    return new ApiError(BAD_REQUEST_CODE, message, errors);
  }
}
