import { AuthActionTypes } from "@/common/types/Auth.ts";
import { UserPayload } from "@/common/types/User.ts";
import { AuthActions } from "@/common/constants/AuthConstants/AuthActions.ts";

type AuthState = {
  user: null | UserPayload;
  isPending: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  isPending: false,
  error: null,
};

const { AUTH_PENDING, AUTH_ERROR, AUTH_SUCCESS, RESET_USER, RESET_ERROR } = AuthActions;

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_PENDING:
      return {
        ...state,
        isPending: action.payload,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isPending: false,
        error: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    case RESET_USER:
      return {
        ...state,
        user: null,
        isPending: false,
        error: null,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
