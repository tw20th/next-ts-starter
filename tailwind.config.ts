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
        base: "#fefbf6", // ベース背景
        cardBlue: "#d8ebf2",
        cardPink: "#fbe3e8",
        cardYellow: "#fef3d8",
        textGray: "#4a4a4a",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.1)", // カード用の柔らかい影
      },
      borderRadius: {
        card: "12px", // カードの角丸
      },
    },
  },
  plugins: [],
};

export default config;
