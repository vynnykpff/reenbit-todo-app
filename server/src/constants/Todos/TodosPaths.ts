import { AppPaths } from "../Paths";

export enum TodosPaths {
  DELETE_COMPLETED_TODOS = "delete-completed-todos",
}

const { BASE, TODOS } = AppPaths;

export const API_TODOS_PATH = `${BASE}${TODOS}`;
