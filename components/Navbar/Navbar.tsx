import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
    <nav className="flex items-center justify-between p-5 bg-primary text-secondary h-50">
        <div className="flex-grow-0 w-100">
            <Link href="/">
                <img src="keys.svg" alt="logo" className="w-100" />
            </Link>
        </div>
        <div className="flex justify-end flex-grow-1 space-x-8">
            <Link href="/analytics-measurement" className="nav-link">
                Measured Analytics
            </Link>
            <Link href="/web-development" className="nav-link">
                Custom Development
            </Link>
            <Link href="/signature-management" className="nav-link">
                Signature Management
            </Link>
            <Link href="/blog" className="nav-link">
                Blog
            </Link>
        </div>
    </nav>
    );
}
export default Navbar;
