import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
    title: 'My Blog',
    description: 'A Next.js and Tailwind CSS powered blog site.',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow container mx-auto p-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
