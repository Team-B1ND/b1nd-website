import { ReactNode } from "react";
import { DodamThemeProvider,DodamGlobalStyles } from "@b1nd/dds-web";

type Props = {
  children: ReactNode;
};

const ThemeProviderContainer = ({ children }: Props) => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  
  return (
    <DodamThemeProvider theme={isDarkMode ? "DARK" :"LIGHT"}>
      <DodamGlobalStyles />
      {children}
    </DodamThemeProvider>
  );
};

export default ThemeProviderContainer;
