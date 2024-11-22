import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f9f9", // デフォルトの背景色
        foreground: "#333", // デフォルトの文字色
        primary: "#3498db", // プライマリカラー
        secondary: "#2ecc71", // セカンダリカラー
        danger: "#e74c3c", // エラーカラー
      },
      spacing: {
        18: "4.5rem", // カスタム余白
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem", // カスタム角丸
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // カスタム影
      },
    },
  },
  plugins: [forms, typography],
};

export default config;
