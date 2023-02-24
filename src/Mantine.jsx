import { useTheme, useThemeMode } from "@juel/hooks/theme";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { darkColors, lightColors } from "./utils/colors";

function Mantine() {
  const { mode, toggleMode } = useThemeMode();
  const customTheme = {
    primaryColor: "main",
    colors: mode === "dark" ? darkColors : lightColors,
    fontFamily: "El Messiri, sans-serif",
    primaryShade: 5,
  };
  const theme = useTheme(customTheme);

  return (
    <ColorSchemeProvider colorScheme={mode} toggleColorScheme={toggleMode}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Mantine;
