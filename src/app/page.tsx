import React from "react";
import Card from "../components/Card";

const HomePage: React.FC = () => {
  const articles = [
    { title: "記事タイトル1", description: "説明1" },
    { title: "記事タイトル2", description: "説明2" },
    { title: "記事タイトル3", description: "説明3" },
  ];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">ブログホームページ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
