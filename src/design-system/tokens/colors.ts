export const colors = {
  // Primary Brand Colors (Emerald)
  primary: {
    950: "#022c22", // Backgrounds/Darkest text
    900: "#064e3b", // Headlines
    800: "#065f46", // UI Elements
    500: "#10b981", // Accents/Buttons
    400: "#34d399", // Highlights
  },
  
  // Secondary Brand Colors (Amber)
  secondary: {
    500: "#f59e0b", // Warnings/Highlights
    400: "#fbbf24", // Accents
  },

  // Interface Neutrals (Zinc - aligned with Tailwind default but explicit here)
  neutral: {
    50:  "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
  
  // Semantic Colors
  background: "#fafafa",
  foreground: "#18181b",
} as const;
