import { AppPaths } from "../Paths";

export enum AuthPaths {
  LOGIN = "/login",
  LOGOUT = "/logout",
  REFRESH = "/refresh",
}

const { BASE, AUTH } = AppPaths;

export const API_AUTH_PATH = `${BASE}${AUTH}`;
