import logoImage from "#/icons/logo.svg";
import { SwitchTheme } from "@/components/ui/SwitchTheme/SwitchTheme.tsx";
import { FC } from "react";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.headerLogo} src={logoImage} alt="logo image" />
      <h1 className={styles.headerTitle}>
        <span className={styles.headerContent}>to</span>
        <span className={styles.headerContent}>do</span>
      </h1>
      <SwitchTheme />
    </header>
  );
};
