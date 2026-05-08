import React from 'react';
import { motion } from 'framer-motion';

const wordVariants = {
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
            delay: index * 0.35, // Sequência de acendimento (stagger)
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            ease: "easeInOut",
        }
    })
};

const WelcomeGate: React.FC = () => {
    const startJounery = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            className="relative h-screen w-full flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-[#0e0e0e]"
            onClick={startJounery}
        >
            {/* Background Effects matching the cinematic theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-20"></div>
                <div className="prism-leak absolute top-[20%] left-[30%] w-[500px] h-[500px] opacity-30"></div>
            </div>

            <div className="relative z-10 text-center flex flex-col gap-8 px-6 select-none">
                <h1 className="font-display font-black text-[8vw] leading-none tracking-tighter uppercase flex flex-col items-center gap-[1vw]">
                    {/* Linha 1 */}
                    <div className="flex flex-wrap justify-center gap-x-[2vw]">
                        <div className="relative inline-block">
                            <span className="text-outline opacity-20">VAMOS</span>
                            <motion.span 
                                variants={wordVariants}
                                custom={0}
                                initial="hidden"
                                animate="visible"
                                className="absolute inset-0 text-white pointer-events-none"
                            >
                                VAMOS
                            </motion.span>
                        </div>

                        <div className="relative inline-block">
                            <span className="text-outline opacity-20">INICIAR</span>
                            <motion.span 
                                variants={wordVariants}
                                custom={1}
                                initial="hidden"
                                animate="visible"
                                className="absolute inset-0 text-white pointer-events-none"
                            >
                                INICIAR
                            </motion.span>
                        </div>
                    </div>

                    {/* Linha 2 */}
                    <div className="flex flex-wrap justify-center gap-x-[2vw]">
                        <div className="relative inline-block">
                            <span className="text-outline opacity-20">A</span>
                            <motion.span 
                                variants={wordVariants}
                                custom={2}
                                initial="hidden"
                                animate="visible"
                                className="absolute inset-0 text-white pointer-events-none"
                            >
                                A
                            </motion.span>
                        </div>

                        <div className="relative inline-block">
                            <span className="text-outline opacity-20">JORNADA</span>
                            <motion.span 
                                variants={wordVariants}
                                custom={3}
                                initial="hidden"
                                animate="visible"
                                className="absolute inset-0 text-white pointer-events-none"
                            >
                                JORNADA
                            </motion.span>
                        </div>
                    </div>
                </h1>
            </div>

            {/* Discrete scroll indicator arrow at the bottom border */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
                <span className="material-symbols-outlined text-white text-3xl">
                    expand_more
                </span>
            </div>
        </section>
    );
};

export default WelcomeGate;
