import axios, { AxiosError } from "axios";
import { ApiError } from "@/common/constants/ApiError.ts";
import { Routes } from "@/common/constants/Routes.ts";
import { DEFAULT_ERROR_MESSAGE } from "@/common/constants/ErrorMessages.ts";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
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
