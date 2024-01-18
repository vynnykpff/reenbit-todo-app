export enum AuthPaths {
  LOGIN = "/login",
  REFRESH = "/refresh",
}

export enum TodosPaths {
  DELETE_COMPLETED_TODOS = "/delete-completed-todos",
}

export enum AppPaths {
  TODOS = "/todos",
  AUTH = "/auth",
  BASE = "/api",
}

const { AUTH } = AppPaths;
const { REFRESH } = AuthPaths;

export const REFRESH_PATH = `${AUTH}${REFRESH}`;
