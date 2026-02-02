export const typography = {
  fontFamily: {
    sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    widest: "0.05em",
  },
} as const;
