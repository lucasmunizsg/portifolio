import React from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const wordVariants: Variants = {
    hidden: { 
        opacity: 0,
        textShadow: "0 0 0px rgba(255,255,255,0)"
    },
    visible: (index: number) => ({
        opacity: [
            0,     // Começa apagado
            0.9,   // Pisca 1 (Acende)
            0.15,  // Pisca 1 (Apaga)
            0.9,   // Pisca 2 (Acende)
            0.15,  // Pisca 2 (Apaga)
            1,     // Estabiliza totalmente aceso
        ],
        textShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 15px rgba(255,255,255,0.6)",
            "0 0 2px rgba(255,255,255,0.1)",
            "0 0 15px rgba(255,255,255,0.6)",
            "0 0 2px rgba(255,255,255,0.1)",
            "0 0 12px rgba(255,255,255,0.4)"
        ],
        transition: {
            duration: 0.8,
            delay: 0.4 + index * 0.4, // Inicia mais cedo agora que o feixe de luz foi removido
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            ease: "easeInOut" as const,
        }
    })
};

const WelcomeGate: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();
    
    const startJounery = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleLanguage = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que o clique no botão acione o scroll
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    const welcomeLine1 = t('welcome.line1');
    const welcomeLine2 = t('welcome.line2');

    return (
        <section 
            id="welcome"
            className="relative h-screen w-full flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-black"
            onClick={startJounery}
        >
            {/* 1. Moving Background Animated Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Glowing Orb 1 (Elegant White) */}
                <motion.div
                    className="absolute top-[15%] left-[20%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-white/5 blur-[100px] md:blur-[140px]"
                    animate={{
                        x: [0, 80, -60, 0],
                        y: [0, -60, 90, 0],
                        scale: [1, 1.15, 0.9, 1]
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                />
                
                {/* Glowing Orb 2 (Muted Silver) */}
                <motion.div
                    className="absolute bottom-[15%] right-[20%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-zinc-400/4 blur-[110px] md:blur-[150px]"
                    animate={{
                        x: [0, -90, 60, 0],
                        y: [0, 70, -80, 0],
                        scale: [1, 0.85, 1.1, 1]
                    }}
                    transition={{
                        duration: 26,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                />

                {/* Glowing Orb 3 (Deep Muted Slate) */}
                <motion.div
                    className="absolute top-[40%] left-[45%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-zinc-600/3 blur-[90px] md:blur-[120px]"
                    animate={{
                        x: [0, 50, -70, 0],
                        y: [0, 90, -50, 0],
                        scale: [1, 1.1, 0.85, 1]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* 2. Frosted Glass Overlay */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[80px] md:backdrop-blur-[140px] border-b border-white/10 z-[5]" />

            {/* 3. Extra Background Effects like Grid */}
            <div className="absolute inset-0 pointer-events-none z-[6]">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-10"></div>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center gap-12 px-6 select-none w-full max-w-5xl">
                
                {/* Language Toggle Button */}
                <motion.button
                    onClick={toggleLanguage}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="group relative flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 z-20 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-white transition-colors">
                        {t('welcome.switchLanguage')}
                    </span>
                    <span className="material-symbols-outlined text-sm text-zinc-500 group-hover:text-white group-hover:rotate-180 transition-all duration-500">
                        language
                    </span>
                </motion.button>

                <h1 className="font-display font-black text-[8vw] leading-none tracking-tighter uppercase flex flex-col items-center gap-[2vw]">
                    {/* Linha 1 */}
                    <div className="relative w-full flex flex-wrap justify-center gap-x-[2vw] py-2">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={language + "-line1"}
                                className="flex gap-x-[2vw]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {welcomeLine1.map((word: string, i: number) => (
                                    <div key={word + i} className="relative inline-block">
                                        <span className="text-outline opacity-20">{word}</span>
                                        <motion.span 
                                            variants={wordVariants}
                                            custom={i}
                                            initial="hidden"
                                            animate="visible"
                                            className="absolute inset-0 text-white pointer-events-none"
                                        >
                                            {word}
                                        </motion.span>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Linha 2 */}
                    <div className="relative w-full flex flex-wrap justify-center gap-x-[2vw] py-2">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={language + "-line2"}
                                className="flex gap-x-[2vw]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                {welcomeLine2.map((word: string, i: number) => (
                                    <div key={word + i} className="relative inline-block">
                                        <span className="text-outline opacity-20">{word}</span>
                                        <motion.span 
                                            variants={wordVariants}
                                            custom={i + 2}
                                            initial="hidden"
                                            animate="visible"
                                            className="absolute inset-0 text-white pointer-events-none"
                                        >
                                            {word}
                                        </motion.span>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </h1>
            </div>

            {/* Discrete scroll indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
                <span className="material-symbols-outlined text-white text-3xl">
                    expand_more
                </span>
            </div>
        </section>
    );
};

export default WelcomeGate;
