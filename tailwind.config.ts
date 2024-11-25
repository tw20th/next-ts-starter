import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ソース内の全ての対応ファイル
    "./public/**/*.html", // 公開ディレクトリ内のHTML
  ],
  safelist: [
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-center", // 必要なクラスを明示的に許可
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f7f6", // 背景色
        cardBg: "#ffffff", // カード背景色
        cardShadow: "rgba(0, 0, 0, 0.1)", // カード影
        textPrimary: "#333333", // 主な文字色
        accent: "#f7c8d2", // アクセントカラー
      },
      borderRadius: {
        card: "16px", // カードの丸み
      },
      boxShadow: {
        card: "0 6px 10px rgba(0, 0, 0, 0.1)", // 通常の影
        cardHover: "0 10px 20px rgba(0, 0, 0, 0.2)", // ホバー時の影
        cardSoft: "0 4px 15px rgba(0, 0, 0, 0.08)", // 柔らかい影
        cardDeep: "0 8px 25px rgba(0, 0, 0, 0.25)", // 立体的な影
      },
      spacing: {
        18: "4.5rem", // カスタム余白
        22: "5.5rem", // カスタム余白
      },
    },
  },
  plugins: [],
};

export default config;
