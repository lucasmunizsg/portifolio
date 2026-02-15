import React from 'react';
import { Profile } from '../types';

interface HeaderProps {
    profile: Profile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
    const navItems = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Currículo', href: '#curriculo' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                            {profile.name}
                        </h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
