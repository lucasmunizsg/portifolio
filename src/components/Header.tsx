import React, { useState, useEffect } from 'react';
import { Profile } from '../types';

interface HeaderProps {
    profile: Profile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-[#131313]/80 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8 max-w-[1920px] mx-auto">
                <div className="text-xl md:text-2xl font-black text-white tracking-tighter font-headline">
                    {profile.name.toUpperCase()}
                </div>
                
                <div className="hidden md:flex items-center gap-12">
                    <a className="font-label uppercase tracking-[0.2em] text-[10px] text-white font-bold border-b-2 border-white/20 pb-1" href="#work">Work</a>
                    <a className="font-label uppercase tracking-[0.2em] text-[10px] text-zinc-500 hover:text-white transition-colors duration-500" href="#process">Process</a>
                    <a className="font-label uppercase tracking-[0.2em] text-[10px] text-zinc-500 hover:text-white transition-colors duration-500" href="#contact">Contact</a>
                </div>
                
                <button className="font-label uppercase tracking-[0.2em] text-[10px] bg-white text-[#1a1c1c] px-4 md:px-6 py-2 md:py-3 hover:bg-white/5 hover:text-white transition-all duration-700 active:scale-95">
                    Hire Me
                </button>
            </div>
        </nav>
    );
};

export default Header;
