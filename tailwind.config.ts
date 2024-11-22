import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // ページファイル
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // コンポーネント
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // アプリディレクトリ
    "./src/**/*.{html,js}", // 追加: 必要に応じたHTMLやJS
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f7f6", // 背景色
        cardBg: "#ffffff", // カード背景
        cardShadow: "rgba(0, 0, 0, 0.1)", // カード影
        textPrimary: "#333333", // 主な文字色
        accent: "#f7c8d2", // アクセントカラー
      },
      borderRadius: {
        card: "16px", // カードの丸み
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.1)", // カードの影
        cardHover: "0 8px 16px rgba(0, 0, 0, 0.15)", // ホバー時の影
      },
    },
  },
  plugins: [],
};

export default config;
