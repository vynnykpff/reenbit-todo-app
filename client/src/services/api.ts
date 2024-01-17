import { AppPaths } from "@/services/Paths.ts";
import axios, { AxiosError } from "axios";
import { ApiError } from "@/common/constants/ApiError.ts";
import { Routes } from "@/common/constants/Routes.ts";
import { DEFAULT_ERROR_MESSAGE } from "@/common/constants/ErrorMessages.ts";

const { BASE } = AppPaths;

export const api = axios.create({
  baseURL: `https://reenbit-todo-app.onrender.com${BASE}`,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("access-token")}`;
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    if (error?.response?.status === ApiError.UNAUTHORIZED && error.response.statusText === "Unauthorized") {
      localStorage.removeItem("access-token");
      window.location.hash = `#${Routes.LOGIN}`;
    }

    if (error.response) {
      error.response.data ??= DEFAULT_ERROR_MESSAGE;
    }

    return Promise.resolve(error.response ?? { data: DEFAULT_ERROR_MESSAGE });
  },
);
