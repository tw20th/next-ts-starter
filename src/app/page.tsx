// src/app/page.tsx
"use client"; // クライアントコンポーネント指示

import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';

interface Article {
  id: number;
  title: string;
  body: string;
}

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // 仮のAPIから記事データを取得
    const fetchArticles = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setArticles(data.slice(0, 5)); // 最初の5件を表示
    };
    
    fetchArticles();
  }, []);

  return (
    <main className="container">
      <h1>Welcome to My Blog</h1>
      <div className="grid-container">
        {articles.map((article) => (
          <Card key={article.id} title={article.title} description={article.body} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
