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
    const [isAutoplayRolling, setIsAutoplayRolling] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = ['process', 'work', 'xp', 'contact'];

        const handleScroll = () => {
            // Controle de visibilidade da Navbar fixa ao rolar a página
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Lógica inteligente para rastrear a seção atual sob visualização do usuário
            let current = '';
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Se a seção está ocupando a área de leitura principal (top 40% da tela)
                    if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
                        current = sectionId;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Executa uma checagem inicial ao carregar a página
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Ativa o rolo automático quando a navbar fica visível
            setIsAutoplayRolling(true);
            const timer = setTimeout(() => {
                setIsAutoplayRolling(false);
            }, 1800); // tempo suficiente para durar a transição de todas as letras
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-[#131313]/80 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8 max-w-[1920px] mx-auto">
                <a href="#hero" className="flex gap-1 group/logo cursor-pointer">
                    {logoLetters.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative w-6 h-8 md:w-7 md:h-10 bg-[#161616] border border-white/5 group-hover/logo:border-white/20 rounded-[2px] overflow-hidden flex flex-col items-center justify-start transition-all duration-300 shadow-inner group-hover/logo:shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                        >
                            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/60 z-20" />
                            
                            {/* Inner scrolling column mimicking a mechanical SplitFlap transition */}
                            <div 
                                className={`flex flex-col items-center w-full transition-transform duration-700 ease-in-out ${
                                    isAutoplayRolling ? '-translate-y-[80%]' : 'group-hover/logo:-translate-y-[80%]'
                                }`}
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
                
                {/* 
                  Links da Navbar com efeitos dinâmicos de cor neon e brilho específicos para cada seção.
                  Efeito ativado ao passar o mouse (hover), ao clicar, ou automaticamente durante a rolagem (scroll tracker).
                */}
                <div className="hidden md:flex items-center gap-12">
                    {/* Stacks - Tema Branco/Prata Neon */}
                    <a 
                        className={`font-label uppercase tracking-[0.2em] text-[10px] transition-all duration-300 ${
                            activeSection === 'process' 
                                ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]' 
                                : 'text-zinc-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                        }`} 
                        href="#process"
                    >
                        Stacks
                    </a>

                    {/* Projetos - Tema Vermelho Neon */}
                    <a 
                        className={`font-label uppercase tracking-[0.2em] text-[10px] transition-all duration-300 ${
                            activeSection === 'work' 
                                ? 'text-red-500 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]' 
                                : 'text-zinc-500 hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]'
                        }`} 
                        href="#work"
                    >
                        Projetos
                    </a>

                    {/* XP - Tema Ciano Neon */}
                    <a 
                        className={`font-label uppercase tracking-[0.2em] text-[10px] transition-all duration-300 ${
                            activeSection === 'xp' 
                                ? 'text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]' 
                                : 'text-zinc-500 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]'
                        }`} 
                        href="#xp"
                    >
                        XP
                    </a>

                    {/* Contato - Tema Branco/Prata Neon */}
                    <a 
                        className={`font-label uppercase tracking-[0.2em] text-[10px] transition-all duration-300 ${
                            activeSection === 'contact' 
                                ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]' 
                                : 'text-zinc-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                        }`} 
                        href="#contact"
                    >
                        Contato
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
