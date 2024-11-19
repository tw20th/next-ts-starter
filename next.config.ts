// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // 静的エクスポートを有効にする
  trailingSlash: true,     // URLにスラッシュを追加して安定させる
  distDir: "out",          // ビルドファイルを 'out' ディレクトリに出力
};

module.exports = nextConfig;
