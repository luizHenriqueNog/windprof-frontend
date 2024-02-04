import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   "background-page": "url('/img/bg.png')",
      // },
      
      colors: {
        "gray": "#343541",
        "light-gray": "#40414F",
        "grey-100": "#f6f5fa",
        "grey-200": "#e3e2ed",
        "blue-100": "#5a5d8d",
        "blue-400": "#4200FF",
        "blue-600": "#5a5d8d",
        "blue-800": "#000082",
        "purple-100": "#f9f1ff",
        "purple-400": "#b25ef4"
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1"}
        }
      },
      animation: {
        blink: "blink 1s infinite"
      }
    },
  },
  plugins: [],
};
export default config;
