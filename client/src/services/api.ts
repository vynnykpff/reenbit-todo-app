import { ApiError } from "@/common/constants/ApiError.ts";
import { AppPaths, REFRESH_PATH } from "@/services/Paths.ts";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Routes } from "@/common/constants/Routes.ts";

const { BASE } = AppPaths;
const API_URL = `https://reenbit-todo-app-server.vercel.app${BASE}`;
const { UNAUTHORIZED } = ApiError;

type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
};

type InternalAxiosRequestConfig = {
  _isRetry?: boolean;
} & AxiosRequestConfig;

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig;

    if (error.response?.status === UNAUTHORIZED && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<RefreshResponse>(`${API_URL}${REFRESH_PATH}`, { withCredentials: true });
        localStorage.setItem("token", response.data.accessToken);

        return api.request(originalRequest);
      } catch (e) {
        localStorage.removeItem("token");
        window.location.hash = `#${Routes.LOGIN}`;
      }
    }
    throw error;
  },
);
