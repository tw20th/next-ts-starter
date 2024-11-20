const About: React.FC = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-2">
                私は現在、Next.js と TypeScript を使用してブログサイトを作成しています。最終目標は、シンプルでカラフルなカードレイアウトが特徴のデザインを実現することです。
            </p>
            <p className="text-lg mb-2">
                これまでにプロジェクトのセットアップ、Next.jsの設定調整、Vercelへのデプロイなどを経験し、ネットワーク関連のトラブルや依存関係のエラーも解決してきました。段階的な確認とテストを重視しながら、安定した環境で開発を進めています。
            </p>
            <p className="text-lg">
                現在は、ヘッダー、フッター、メニューなどをコンポーネント化し、新しいページを追加することで、さらなる機能を拡充しています。
            </p>
        </div>
    );
};

export default About;
