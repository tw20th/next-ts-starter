import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="header p-4 bg-gray-800 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">
                <Link href="/">My Blog</Link>
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/">ホーム</Link></li>
                    <li><Link href="/about">プロフィール</Link></li>
                    <li><Link href="/blog">ブログ</Link></li>
                    <li><Link href="/contact">お問い合わせ</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
