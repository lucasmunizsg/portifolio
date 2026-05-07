import React, { useState, useEffect } from 'react';

const logoLetters = [
    { char: "J", roll: ["J", "M", "R", "Y", "J"] },
    { char: "O", roll: ["O", "S", "E", "N", "O"] },
    { char: "U", roll: ["U", "A", "T", "L", "U"] },
    { char: "R", roll: ["R", "I", "C", "H", "R"] },
    { char: "N", roll: ["N", "F", "L", "O", "N"] },
    { char: "E", roll: ["E", "D", "G", "S", "E"] },
    { char: "Y", roll: ["Y", "W", "P", "V", "Y"] },
];

const Header: React.FC = () => {
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
                <a href="#work" className="flex gap-1 group/logo cursor-pointer">
                    {logoLetters.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative w-6 h-8 md:w-7 md:h-10 bg-[#161616] border border-white/5 group-hover/logo:border-white/20 rounded-[2px] overflow-hidden flex flex-col items-center justify-start transition-all duration-300 shadow-inner group-hover/logo:shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                        >
                            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/60 z-20" />
                            
                            {/* Inner scrolling column mimicking a mechanical SplitFlap transition */}
                            <div 
                                className="flex flex-col items-center w-full transition-transform duration-700 ease-in-out group-hover/logo:-translate-y-[80%]"
                                style={{ transitionDelay: `${index * 60}ms` }}
                            >
                                {item.roll.map((char, i) => (
                                    <span 
                                        key={i} 
                                        className="font-display font-black text-xs md:text-sm text-white/90 leading-none h-8 md:h-10 flex items-center justify-center shrink-0 z-10 group-hover/logo:text-white transition-colors"
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none z-10" />
                            <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] pointer-events-none" />
                        </div>
                    ))}
                </a>
                
                {/* Navbar links without leading section numbers */}
                <div className="hidden md:flex items-center gap-12">
                    <a className="font-label uppercase tracking-[0.2em] text-[10px] text-zinc-500 hover:text-white transition-colors duration-500" href="#work">Projetos</a>
                    <a className="font-label uppercase tracking-[0.2em] text-[10px] text-zinc-500 hover:text-white transition-colors duration-500" href="#xp">XP</a>
                    <a className="font-label uppercase tracking-[0.2em] text-[10px] text-zinc-500 hover:text-white transition-colors duration-500" href="#process">Processo</a>
                    <a className="font-label uppercase tracking-[0.2em] text-[10px] text-zinc-500 hover:text-white transition-colors duration-500" href="#contact">Contato</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
