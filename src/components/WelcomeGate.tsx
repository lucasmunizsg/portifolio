import React from 'react';
import { motion, Variants } from 'framer-motion';

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
            delay: 1.55 + index * 0.45, // Sincronizado com a desaceleração sutil do feixe mais lento de 1.6s
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            ease: "easeInOut" as const,
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

            {/* 2. Frosted Glass Mask / Overlay (Keeping background black with glass blur) */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-[60px] md:backdrop-blur-[120px] border-b border-white/5 z-[5]" />

            {/* 3. Extra Background Effects like Grid */}
            <div className="absolute inset-0 pointer-events-none z-[6]">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-10"></div>
            </div>


            <div className="relative z-10 text-center flex flex-col gap-8 px-6 select-none w-full max-w-5xl">
                <h1 className="font-display font-black text-[8vw] leading-none tracking-tighter uppercase flex flex-col items-center gap-[2vw]">
                    {/* Linha 1 */}
                    <div className="relative w-full flex flex-wrap justify-center gap-x-[2vw] py-2">
                        {/* Line 1 Beam: Sweeps from left and slows down to gently touch "VAMOS" */}
                        <motion.div
                            className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent z-[15] pointer-events-none"
                            style={{ 
                                top: "50%",
                                transform: "translateY(-50%)",
                                boxShadow: "0 0 15px rgba(255,255,255,0.7), 0 0 5px rgba(255,255,255,0.3)" 
                            }}
                            initial={{ left: "-30%", width: "25%", opacity: 0 }}
                            animate={{ 
                                left: ["-30%", "-5%", "22%"],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{ 
                                duration: 1.6, 
                                times: [0, 0.4, 1],
                                ease: [0.16, 1, 0.3, 1], // Desaceleração suave e cinematográfica (ultra-smooth easeOut)
                                delay: 0.1
                            }}
                        />

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
                    <div className="relative w-full flex flex-wrap justify-center gap-x-[2vw] py-2">

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
