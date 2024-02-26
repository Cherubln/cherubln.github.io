import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        progress: "progress 4s steps(30) 3s forwards ",
        fade: "fade 0.45s linear 2s",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["sunset"],
  },
};
export default config;
