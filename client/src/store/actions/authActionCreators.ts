import { AuthActions } from "@/common/constants/AuthConstants/AuthActions.ts";
import { AuthActionTypes } from "@/common/types/Auth.ts";
import { UserPayload } from "@/common/types/User.ts";

export const loginPending = (isPending: boolean): AuthActionTypes => ({
  type: AuthActions.AUTH_PENDING,
  payload: isPending,
});

export const loginSuccess = (user: UserPayload): AuthActionTypes => ({
  type: AuthActions.AUTH_SUCCESS,
  payload: user,
});

export const loginError = (error: string | null): AuthActionTypes => ({
  type: AuthActions.AUTH_ERROR,
  payload: error,
});
