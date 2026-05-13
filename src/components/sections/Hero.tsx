import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Profile } from '../../types';

interface HeroProps {
    profile: Profile;
}

const titles = [
    ["DESENVOLVEDOR", "DE SOFTWARE"],
    ["MELHORADOR", "DE SOFTWARE"],
    ["MELHORADOR", "DE IDEIAS"],
    ["DESENVOLVEDOR", "DE IDEIAS"]
];

const word1Options = ["DESENVOLVEDOR", "MELHORADOR"];
const word2Options = ["DE SOFTWARE", "DE IDEIAS"];

const Hero: React.FC<HeroProps> = ({ profile }) => {
    const [word1Index, setWord1Index] = useState(0);
    const [word2Index, setWord2Index] = useState(0);
    const lastScrollTime = React.useRef(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const hoveredPartRef = React.useRef<'first' | 'second' | null>(null);

    // Mapeamento inverso para manter as bolinhas de progresso sincronizadas
    const getActiveDotIndex = () => {
        if (word1Index === 0 && word2Index === 0) return 0;
        if (word1Index === 1 && word2Index === 0) return 1;
        if (word1Index === 1 && word2Index === 1) return 2;
        if (word1Index === 0 && word2Index === 1) return 3;
        return 0;
    };

    const currentIndex = getActiveDotIndex();

    const selectCombination = (i: number) => {
        if (i === 0) {
            setWord1Index(0);
            setWord2Index(0);
        } else if (i === 1) {
            setWord1Index(1);
            setWord2Index(0);
        } else if (i === 2) {
            setWord1Index(1);
            setWord2Index(1);
        } else if (i === 3) {
            setWord1Index(0);
            setWord2Index(1);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Previne a rolagem padrão da página enquanto o mouse está sob o contêiner de textos
            e.preventDefault();
            const now = Date.now();
            if (now - lastScrollTime.current < 500) return; // Cooldown de 500ms

            const isDown = e.deltaY > 0;

            if (hoveredPartRef.current === 'first') {
                setWord1Index((prev) => (isDown ? (prev + 1) % word1Options.length : (prev - 1 + word1Options.length) % word1Options.length));
                lastScrollTime.current = now;
            } else if (hoveredPartRef.current === 'second') {
                setWord2Index((prev) => (isDown ? (prev + 1) % word2Options.length : (prev - 1 + word2Options.length) % word2Options.length));
                lastScrollTime.current = now;
            } else {
                // Caso o mouse não esteja diretamente em cima de uma palavra, rotaciona a combinação inteira
                const nextCombination = isDown ? (currentIndex + 1) % 4 : (currentIndex - 1 + 4) % 4;
                selectCombination(nextCombination);
                lastScrollTime.current = now;
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [currentIndex]);

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden pt-32 md:pt-60 pb-32 px-6 md:px-12 max-w-[1920px] mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-30"></div>
                <div className="prism-leak absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-40"></div>
                <div className="prism-leak absolute bottom-[10%] left-[-10%] w-[800px] h-[800px] opacity-20" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }}></div>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full">
                <div className="flex items-center gap-4 mb-4 justify-start">
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-[1px] bg-white/20"
                    ></motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500"
                    >
                        Disponível para Projetos como:
                    </motion.span>
                </div>

                <div
                    ref={containerRef}
                    onClick={() => {
                        const nextCombination = (currentIndex + 1) % 4;
                        selectCombination(nextCombination);
                    }}
                    className="relative min-h-[22vw] md:min-h-[17vw] overflow-hidden mt-4 w-full flex flex-col items-center justify-center cursor-pointer md:cursor-ns-resize select-none"
                >
                    <div className="flex flex-col items-center text-center w-full">
                        {/* Primeira Linha (Primeira Palavra) */}
                        <div 
                            onClick={(e) => {
                                e.stopPropagation();
                                setWord1Index((prev) => (prev + 1) % word1Options.length);
                            }}
                            onMouseEnter={() => { hoveredPartRef.current = 'first'; }}
                            onMouseLeave={() => { hoveredPartRef.current = null; }}
                            className="relative h-[11vw] md:h-[8.5vw] flex items-center justify-center"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={word1Index}
                                    initial={{ y: "40%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-40%", opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 180,
                                        damping: 22,
                                    }}
                                    className="font-display font-black text-[8vw] leading-none tracking-tighter uppercase text-white hero-glow cursor-pointer md:cursor-ns-resize"
                                >
                                    {word1Options[word1Index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        {/* Segunda Linha (Segunda Palavra/Frase) */}
                        <div 
                            onClick={(e) => {
                                e.stopPropagation();
                                setWord2Index((prev) => (prev + 1) % word2Options.length);
                            }}
                            onMouseEnter={() => { hoveredPartRef.current = 'second'; }}
                            onMouseLeave={() => { hoveredPartRef.current = null; }}
                            className="relative h-[11vw] md:h-[8.5vw] flex items-center justify-center mt-2"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={word2Index}
                                    initial={{ y: "40%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-40%", opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 180,
                                        damping: 22,
                                    }}
                                    className="font-display font-black text-[8vw] leading-none tracking-tighter uppercase text-outline hover:text-white transition-colors duration-1000 cursor-pointer md:cursor-ns-resize"
                                >
                                    {word2Options[word2Index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Subtle progress indicator */}
                <div className="flex flex-col items-center gap-4 mt-6">
                    {/* Navigation Dots */}
                    <div className="flex gap-2 justify-center">
                        {titles.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    selectCombination(i);
                                }}
                                className={`h-[2px] transition-all duration-500 rounded-full ${i === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Ir para slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Technical Metadata Strip */}
            <div className="relative z-10 mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
                <div className="flex flex-col gap-4">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Sobre</h4>
                    <p className="font-body text-sm font-light text-[#e2e2e2] leading-relaxed max-w-xs">
                        {profile.bio}
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Localização</h4>
                    <p className="font-body text-sm font-light text-[#e2e2e2]">Sediado no Brasil / Global</p>
                </div>
                <div className="flex flex-col gap-4 md:col-span-2">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Tecnologias</h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {['React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-[#1b1b1b] text-[10px] uppercase tracking-widest text-zinc-400 border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
