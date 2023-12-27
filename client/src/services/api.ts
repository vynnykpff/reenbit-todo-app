import axios, { AxiosError } from "axios";
import { DEFAULT_ERROR_MESSAGE } from "@/common/constants/ErrorMessages.ts";

export const authApi = axios.create({
  baseURL: "https://reenbit-todo-app.onrender.com/api/users",
});

authApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response) {
      error.response.data ??= DEFAULT_ERROR_MESSAGE;
    }

    return Promise.resolve(error.response ?? { data: DEFAULT_ERROR_MESSAGE });
  },
);
