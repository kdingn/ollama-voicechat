"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export function Theme({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {},
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
