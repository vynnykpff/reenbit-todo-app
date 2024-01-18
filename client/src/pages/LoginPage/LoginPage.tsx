import { AuthActions } from "@/common/constants/AuthConstants/AuthActions.ts";
import { TodoManagementActions } from "@/common/constants/TodoConstants/TodoManagementActions.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/LoginForm/LoginForm.tsx";
import { Routes } from "@/common/constants/Routes.ts";
import styles from "./LoginPage.module.scss";

const LoginPage: FC = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      navigate(Routes.HOME);
      return;
    }

    navigate(Routes.LOGIN);
    dispatch({ type: AuthActions.RESET_USER });
    dispatch({ type: TodoManagementActions.RESET_TODOS });
  }, [location.pathname]);

  if (token) {
    return null;
  }

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginFormContainer}>
        <h4 className={styles.loginPageTitle}>Login</h4>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
