import Link from 'next/link';

const Blog: React.FC = () => {
    const articles = [
        { id: 1, title: '記事タイトル1', description: 'こちらは記事1の概要です。' },
        { id: 2, title: '記事タイトル2', description: 'こちらは記事2の概要です。' },
        { id: 3, title: '記事タイトル3', description: 'こちらは記事3の概要です。' },
    ];

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Blog</h2>
            <ul className="space-y-4">
                {articles.map((article) => (
                    <li key={article.id} className="p-4 bg-white rounded shadow hover:shadow-md transition-shadow">
                        <Link href={`/blog/${article.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                            {article.title}
                        </Link>
                        <p className="text-gray-600 mt-2">{article.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
