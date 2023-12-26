import { AuthResponse } from "@/common/types/Auth.ts";
import { UserPayload } from "@/common/types/User.ts";
import { Routes } from "@/common/constants/Routes.ts";
import { authApi } from "./api.ts";

export class AuthService {
  public static async getAuthenticatedUser(token: string): Promise<string> {
    const response = await authApi.get<string>(Routes.HOME, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  }

  public static async setLogin({ email, password }: UserPayload): Promise<AuthResponse | string> {
    const response = await authApi.post<AuthResponse>(Routes.LOGIN, { email, password });
    return response.data;
  }
}
