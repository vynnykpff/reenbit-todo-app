import { UserPayload } from "@/common/types/User.ts";
import { AuthActions } from "@/common/constants/AuthConstants/AuthActions.ts";

type LoginPendingAction = {
  type: typeof AuthActions.AUTH_PENDING;
  payload: boolean;
};

type LoginSuccessAction = {
  type: typeof AuthActions.AUTH_SUCCESS;
  payload: UserPayload;
};

type LoginErrorAction = {
  type: typeof AuthActions.AUTH_ERROR;
  payload: string | null;
};

type ResetErrorAction = {
  type: typeof AuthActions.RESET_ERROR;
  payload: null;
};

type ResetUserAction = {
  type: typeof AuthActions.RESET_USER;
  payload: null;
};

export type AuthActionTypes = LoginPendingAction | LoginSuccessAction | LoginErrorAction | ResetErrorAction | ResetUserAction;

export type AuthResponse = {
  user: UserPayload;
  accessToken: string;
};
