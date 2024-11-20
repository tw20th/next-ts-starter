import React from 'react';
import Card from '../components/Card';

const HomePage = () => {
    const articles = [
        { title: '記事タイトル1', description: '説明1', imageUrl: '/path/to/image1.jpg' },
        { title: '記事タイトル2', description: '説明2', imageUrl: '/path/to/image2.jpg' },
        { title: '記事タイトル3', description: '説明3', imageUrl: '/path/to/image3.jpg' },
        // 他のダミー記事を追加
    ];

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">ブログホームページ</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <Card
                        key={index}
                        title={article.title}
                        description={article.description}
                        imageUrl={article.imageUrl}
                    />
                ))}
            </div>
        </main>
    );
};

export default HomePage;
