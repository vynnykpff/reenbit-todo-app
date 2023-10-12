import { ThemeConstants } from "@/common/constants/ThemeConstats.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { ThemeContext } from "@/providers/ThemeProvider.tsx";
import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { type, setType } = useContext(ThemeContext);

  return (
    <Button
      className={styles.switchThemeButton}
      onClick={() => setType(prevState => (prevState === ThemeConstants.LIGHT ? ThemeConstants.DARK : ThemeConstants.LIGHT))}
    >
      {type === ThemeConstants.LIGHT ? <BiMoon /> : <BiSun />}
    </Button>
  );
};
