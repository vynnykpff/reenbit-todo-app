import { useContext, useEffect } from "react";
import { Routing } from "@/components/Routing.tsx";
import { THEME } from "@/common/constants/ThemeConstats.ts";
import { ThemeContext } from "@/providers/ThemeProvider.tsx";

export const App = () => {
  const { type } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.dataset.theme = type;
    localStorage.setItem(THEME, type);
  }, [type]);

  return <Routing />;
};
