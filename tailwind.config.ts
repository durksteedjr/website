import colors from "@durksteedjr/colors/colors.json";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        cousine: ["Cousine", "monospace"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
    },
  },
};

export default config;
