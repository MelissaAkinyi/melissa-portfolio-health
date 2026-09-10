import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F3",
        "paper-alt": "#F1ECE0",
        ink: "#1E2420",
        "ink-muted": "#57625B",
        "ink-faint": "#8A9089",
        teal: {
          DEFAULT: "#2B5A63",
          deep: "#17363D",
          soft: "#DCE6E5",
        },
        gold: {
          DEFAULT: "#AD8A46",
          soft: "#EFE6D2",
        },
        line: "#DDD6C5",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [],
};
export default config;
