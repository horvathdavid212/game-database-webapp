import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#def1ff",
      100: "#afd1ff",
      200: "#7db3ff",
      300: "#4b94ff",
      400: "#1a75ff",
      500: "#005ce6",
      600: "#0047b4",
      700: "#003382",
      800: "#001f51",
      900: "#000a21",
    },
  },
});

export default theme;
