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

const Hero: React.FC<HeroProps> = ({ profile }) => {
    const [index, setIndex] = useState(0);
    const lastScrollTime = React.useRef(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Previne a rolagem padrão da página enquanto o mouse está sob o contêiner de textos
            e.preventDefault();
            const now = Date.now();
            if (now - lastScrollTime.current < 500) return; // Cooldown de 500ms

            if (e.deltaY > 0) {
                // Scroll para baixo -> próximo título
                setIndex((prev) => (prev + 1) % titles.length);
                lastScrollTime.current = now;
            } else if (e.deltaY < 0) {
                // Scroll para cima -> título anterior
                setIndex((prev) => (prev - 1 + titles.length) % titles.length);
                lastScrollTime.current = now;
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

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
                        Disponível para Projetos
                    </motion.span>
                </div>

                <div
                    ref={containerRef}
                    onClick={() => setIndex((prev) => (prev + 1) % titles.length)}
                    className="relative min-h-[22vw] md:min-h-[17vw] overflow-hidden mt-4 w-full flex flex-col items-center justify-center cursor-pointer md:cursor-ns-resize"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ y: "40%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-40%", opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 22,
                            }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            {titles[index].map((line, lineIndex) => (
                                <span
                                    key={lineIndex}
                                    className={`font-display font-black text-[8vw] leading-[0.95] tracking-tighter uppercase ${lineIndex === 1
                                            ? 'text-outline hover:text-white transition-all duration-1000 cursor-default'
                                            : 'text-white hero-glow'
                                        }`}
                                >
                                    {line}
                                </span>
                            ))}
                        </motion.div>
                    </AnimatePresence>
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
                                    setIndex(i);
                                }}
                                className={`h-[2px] transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
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
