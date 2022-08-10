import { extendTheme, theme, withDefaultVariant } from "@chakra-ui/react";
const { colors } = theme;

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// similar to obsidian css variables for easy interop
const defaultColors = {
  backgroundPrimary: colors.gray[900],
  backgroundSecondary: colors.gray[800],
  borderNormal: colors.gray[800],

  textNormal: colors.gray[100],
  textMuted: colors.gray[300],
  textFaint: colors.gray[500],
  // textTitleH1:              var(red),
  // textTitleH2:              var(orange),
  // textTitleH3:              var(yellow),
  // textTitleH4:              var(green),
  // textTitleH5:              var(purple),
  // textTitleH6:              var(orange),
  textA: colors.blue[400],
  textAHover: colors.blue[500],
  textHighlightBg: colors.yellow[200],

  interactiveBgBefore: colors.gray[800],
  interactiveBgAfter: colors.gray[700],
  // interactiveBgPressed: colors.gray[600],
};

export const defaultTheme = extendTheme(
  {
    config,
    colors: defaultColors,
    styles: {
      global: {
        body: {
          bg: "backgroundPrimary",
          color: "textNormal",
        },
      },
    },
    components: {
      Button: {
        variants: {
          base: {
            bg: "interactiveBgBefore",
            color: "textNormal",
            _hover: {
              bg: "interactiveBgAfter",
            },
          },
        },
      },
    },
  },
  withDefaultVariant({ variant: "base", components: ["Button"] })
);
