export const enum UserValidationMessage {
  INVALID_EMAIL_FORMAT = "Invalid email format",
  INVALID_PASSWORD = "The password must be between 6 and 16 characters long.",
}

export enum UserValidationField {
  EMAIL = "email",
  PASSWORD = "password",
  PASSWORD_MIN_LENGTH = 6,
  PASSWORD_MAX_LENGTH = 16,
}
