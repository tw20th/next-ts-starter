import React from 'react';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  const articles = [
    { title: '記事タイトル1', description: '説明1', imageUrl: '/images/image1.jpg' },
    { title: '記事タイトル2', description: '説明2', imageUrl: '/images/image2.jpg' },
    { title: '記事タイトル3', description: '説明3', imageUrl: '/images/image3.jpg' },
  ];

  return (
    <main className="container">
      <h1 className="text-3xl font-bold text-center mb-8">ブログホームページ</h1>
      <div className="grid">
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
