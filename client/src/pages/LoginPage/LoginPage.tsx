import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/LoginForm/LoginForm.tsx";
import { Routes } from "@/common/constants/Routes.ts";
import styles from "./LoginPage.module.scss";

const LoginPage: FC = () => {
  const token = localStorage.getItem("access-token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      navigate(Routes.HOME);
    } else {
      navigate(Routes.LOGIN);
    }
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
