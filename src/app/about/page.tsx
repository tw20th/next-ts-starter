const About: React.FC = () => {
    return (
        <div className="container bg-white rounded-xl shadow-custom p-8 mt-8">
            <h2 className="text-4xl font-extrabold text-center text-primary mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                私は現在、Next.js と TypeScript を使用してブログサイトを作成しています。最終目標は、シンプルでカラフルなカードレイアウトが特徴のデザインを実現することです。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                これまでにプロジェクトのセットアップ、Next.jsの設定調整、Vercelへのデプロイなどを経験し、ネットワーク関連のトラブルや依存関係のエラーも解決してきました。段階的な確認とテストを重視しながら、安定した環境で開発を進めています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                現在は、ヘッダー、フッター、メニューなどをコンポーネント化し、新しいページを追加することで、さらなる機能を拡充しています。
            </p>
        </div>
    );
};

export default About;
