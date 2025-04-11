"use client";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { light, mirage, dark } from "ayu";

export function Theme({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) return null;

  const isDark = resolvedTheme === "dark";

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      ...(isDark
        ? {
            background: {
              default: mirage.editor.bg.hex(),
              paper: mirage.editor.bg.hex(),
            },
            text: {
              primary: mirage.editor.fg.hex(),
              secondary: mirage.common.accent.hex(),
            },
            // background: {
            //   default: dark.editor.bg.hex(),
            //   paper: dark.editor.bg.hex(),
            // },
            // text: {
            //   primary: dark.editor.fg.hex(),
            //   secondary: dark.common.accent.hex(),
            // },
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
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
