import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        progress: {
          "0%": {
            left: "0%",
          },
          "100%": {
            left: "100%",
          },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        progress: "progress 3s steps(30) 2s forwards ",
        fade: "fade 0.45s linear 2s",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "sunset",
      // "wireframe"
    ],
  },
};

export default config;
