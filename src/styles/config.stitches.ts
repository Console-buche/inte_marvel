import { createStitches } from "@stitches/react";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      cta: "rgb(255,179,122)",
      ctaHover: "#00000014",
      bg: "rgb(225,231,237)",
      dark: "rgb(38,38,38)",
      darkBlue: "#181a27",
      light: "rgb(255,255,255)",
      logoDot: "#a4b389",
    },
    fontSizes: {
      extraSmall: "0.5em",
      small: "0.9em",
      normal: "1em",
      large: "1.25em",
      largePlus: "2.15em",
      extraLarge: "4.75em",
    },
    space: {
      medium: "25px",
      mediumEm: "0.75em",
      large: "calc( $medium * 2)",
      extraLarge: "calc( var(--space-medium) * 2.5)",
      superExtraLarge: "calc( var(--space-medium) * 4.5)",
    },
    lineHeights: {
      medium: "1em",
      large: "1.25em",
      extraLarge: "calc( var(--space-medium) * 2.5)",
    },
    sizes: {
      extraLarge: "calc( var(--space-medium) * 2.5)",
    },
  },
});
