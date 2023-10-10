import { ThemeConstants } from "@/common/constants/ThemeConstats.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { ThemeContext } from "@/providers/ThemeProvider.tsx";
import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import styles from "./SwitchTheme.module.scss";

export const SwitchTheme = () => {
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
