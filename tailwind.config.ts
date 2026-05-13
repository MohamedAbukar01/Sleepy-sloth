import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#0F1117",
          900: "#141822",
          800: "#1B1F2A",
          700: "#242A38",
        },
        dusk: {
          800: "#221F33",
          700: "#2D2A40",
          600: "#3A3653",
        },
        moon: {
          50: "#FBF8F1",
          100: "#F2EDE2",
          200: "#E6DECB",
          300: "#D2C6A8",
        },
        moss: {
          300: "#94A286",
          400: "#7A8A6E",
          500: "#5F6E55",
        },
        peach: {
          200: "#F4D2B8",
          300: "#E9B89A",
          400: "#D89A77",
        },
        lavender: {
          300: "#C8BEE0",
          400: "#B4A7D6",
          500: "#9586BD",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-1.2deg)" },
          "50%": { transform: "rotate(1.2deg)" },
        },
      },
      animation: {
        breathe: "breathe 8s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        sway: "sway 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
