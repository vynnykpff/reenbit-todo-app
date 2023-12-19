import { THEME, ThemeConstants } from "@/common/constants/ThemeConstats.ts";
import { SetState } from "@/common/types/Root.ts";
import { FC, PropsWithChildren, createContext, useState } from "react";

type ThemeState = {
  type: ThemeConstants;
  setType: SetState<ThemeConstants>;
};

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem(THEME)}`;
  if ([ThemeConstants.LIGHT, ThemeConstants.DARK].includes(theme as ThemeConstants)) {
    return theme as ThemeConstants;
  }
  const userMedia = window.matchMedia(`(prefers-color-scheme: ${ThemeConstants.DARK})`);

  if (userMedia.matches) return ThemeConstants.DARK;

  return ThemeConstants.LIGHT;
};

export const ThemeContext = createContext<ThemeState>({
  type: getTheme(),
  setType: () => {},
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [type, setType] = useState<ThemeConstants>(getTheme());

  return <ThemeContext.Provider value={{ type, setType }}>{children}</ThemeContext.Provider>;
};
