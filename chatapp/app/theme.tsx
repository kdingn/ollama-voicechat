"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { light, mirage } from "ayu";

export function Theme({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      ...(prefersDarkMode
        ? {
            background: {
              default: mirage.editor.bg.hex(),
              paper: mirage.editor.bg.hex(),
            },
            text: {
              primary: mirage.editor.fg.hex(),
              secondary: mirage.common.accent.hex(),
            },
          }
        : {
            background: {
              default: light.editor.bg.hex(),
              paper: light.editor.bg.hex(),
            },
            text: {
              primary: light.editor.fg.hex(),
              secondary: light.common.accent.hex(),
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
