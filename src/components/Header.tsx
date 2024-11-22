import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white py-4 shadow-md">
            <div className="container flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link href="/">My Blog</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/about" className="hover:text-secondary">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-secondary">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-secondary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
