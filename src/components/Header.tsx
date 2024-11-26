import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Blog</Link>
        </h1>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
