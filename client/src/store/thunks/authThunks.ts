import { Dispatch } from "react";
import { AuthService } from "@/services/authService.ts";
import { AuthActionTypes } from "@/common/types/Auth.ts";
import { UserPayload } from "@/common/types/User.ts";
import { AuthActions } from "@/common/constants/AuthConstants/AuthActions.ts";

export function loginThunk({ email, password }: UserPayload) {
  return async function (dispatch: Dispatch<AuthActionTypes>) {
    dispatch({
      type: AuthActions.AUTH_PENDING,
      payload: true,
    });

    const response = await AuthService.setLogin({ email, password });

    if (typeof response === "string") {
      dispatch({
        type: AuthActions.AUTH_ERROR,
        payload: response,
      });
      return;
    }

    dispatch({
      type: AuthActions.AUTH_SUCCESS,
      payload: response?.user,
    });

    localStorage.setItem("access-token", response.accessToken);
  };
}
