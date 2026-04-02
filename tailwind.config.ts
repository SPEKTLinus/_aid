import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          charcoal: "#1A1C1E",
          steel: "#2C2F33",
          fog: "#4A4D52",
          olive: "#4B5320",
          oliveDark: "#323718",
          oliveLight: "#6B7A30",
          khaki: "#BFB48F",
          white: "#F0F2F0",
          alert: "#C8102E",
          gold: "#D4AF37",
          slate: "#3B4A6B",
        },
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
