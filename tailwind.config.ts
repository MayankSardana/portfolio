import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050807",
        surface: "#0b100e",
        card: "#0e1412",
        line: "#1c2622",
        accent: "#4ade80",
        "accent-strong": "#22c55e",
        muted: "#a3aea8",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(74 222 128 / 0.35), 0 0 40px -6px rgb(74 222 128 / 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
