import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
    <nav className="flex items-center justify-between p-5 bg-primary text-secondary h-50 text-uppercase">
        <div className="flex-grow-0">
            <Link href="/" className="flex flex-row items-center">
                <img src="keys.svg" alt="logo" className="w-100" />
                <p className="text-secondary text-4xl">Step Wise Media</p>
            </Link>
        </div>
        <div className="flex justify-end flex-grow-1 space-x-8">
            <Link href="/brand-identity" className="nav-link">
                Brand Identity
            </Link>
            <Link href="/digital-analytics" className="nav-link">
                Digital Analytics
            </Link>
            <Link href="/web-development" className="nav-link">
                Web Development
            </Link>
            <Link href="/blog" className="nav-link">
                Blog
            </Link>
        </div>
    </nav>
    );
}
export default Navbar;
