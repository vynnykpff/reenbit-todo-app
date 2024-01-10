export enum AuthPaths {
  LOGIN = "/login",
}

export enum TodosPaths {
  DELETE_COMPLETED_TODOS = "delete-completed",
}

export enum AppPaths {
  TODOS = "/todos",
  AUTH = "/auth",
  BASE = "/api",
  WITH_ID = "/:id",
}

const { BASE, AUTH, TODOS } = AppPaths;

export const API_AUTH_PATH = `${BASE}${AUTH}`;
export const API_TODOS_PATH = `${BASE}${TODOS}`;
