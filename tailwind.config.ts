import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cc-white": "#f8fafc",
        "cc-yellow": "#f5d565",
        "cc-cream": "#f5e8d5",
        "cc-orange": "#e9a23b",
        "cc-light-green": "#a0ecb1",
        "cc-green": "#32d657",
        "cc-pink": "#f7d4d3",
        "cc-red": "#dd524c",
        "cc-light-gray": "#e3e8ef",
        "cc-dark-gray": "#97a3b6",
        "cc-blue": "#3662e3",
        "cc-gray": "#00000033",
      },
      fontSize: {
        "cf-50": "12px",
        "cf-100": "14px",
        "cf-200": "16px",
        "cf-300": "20px",
        "cf-400": "40px",
      },
    },
  },
  plugins: [],
};
export default config;
