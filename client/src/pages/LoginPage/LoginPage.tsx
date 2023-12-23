import { FC } from "react";
import { LoginForm } from "@/components/LoginForm/LoginForm.tsx";
import styles from "./LoginPage.module.scss";

const LoginPage: FC = () => {
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
