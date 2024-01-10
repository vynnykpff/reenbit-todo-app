import { AuthResponse } from "@/common/types/Auth.ts";
import { UserPayload } from "@/common/types/User.ts";
import { AppPaths, AuthPaths } from "@/services/Paths.ts";
import { api } from "./api.ts";

const { LOGIN } = AuthPaths;
const { AUTH } = AppPaths;

export class AuthService {
  public static async setLogin({ email, password }: UserPayload): Promise<AuthResponse | string> {
    const response = await api.post<AuthResponse>(`${AUTH}${LOGIN}`, { email, password });
    return response.data;
  }
}
