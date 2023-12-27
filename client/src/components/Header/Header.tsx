import { useNavigate } from "react-router-dom";
import { Routes } from "@/common/constants/Routes.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher/ThemeSwitcher.tsx";
import logoImage from "#/icons/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    navigate(Routes.LOGIN);
  };

  return (
    <header className={styles.headerContainer}>
      <img className={styles.headerLogo} src={logoImage} alt="logo image" />
      <h1 className={styles.headerTitle}>
        <span className={styles.headerContent}>to</span>
        <span className={styles.headerContent}>do</span>
      </h1>
      <div className={styles.headerNavigationContainer}>
        <Button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
