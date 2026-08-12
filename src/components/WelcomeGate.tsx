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
            className="relative h-screen w-full flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-[#07070a]"
            onClick={startJounery}
            style={{
                // Variaveis CSS do design (Journey Glass.dc.html), escopadas a esta secao:
                // --pi = prismIntensity, --psp = prismSpeed, --gb = glassFrost (blur das superficies de vidro)
                ['--pi' as string]: 0.9,
                ['--psp' as string]: 1,
                ['--gb' as string]: '16px'
            } as React.CSSProperties}
        >
            {/* Fundo "Glass effect com gradiente em prisma", importado do Claude Designer (Journey Glass.dc.html):
                duas camadas de gradiente diagonal base + 3 blobs de prisma animados independentemente
                (translacao + rotacao + escala, em loop) + um reflexo diagonal (sheen) cruzando a tela +
                camadas de escurecimento para legibilidade do texto. Substitui o prisma giratorio simples
                usado anteriormente.
                O grupo inteiro (ref="prism" no design) tem opacity:var(--pi) e filter:hue-rotate/saturate
                (identidade nos valores padrao, sem efeito visivel ate que sejam alterados). */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ opacity: 'var(--pi)', filter: 'hue-rotate(0deg) saturate(1)' } as React.CSSProperties}
            >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,#241733 0%,#15142a 38%,#191f1c 66%,#0d1120 100%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(140deg,#1b1226 0%,#101024 40%,#13181a 70%,#0a0d18 100%)', opacity: 0.9 }} />

            <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
                {/* Blob de prisma A (canto superior esquerdo) */}
                <motion.div
                    className="absolute -left-[25%] -top-[30%] w-[90vw] h-[90vw] rounded-full"
                    style={{
                        filter: 'blur(90px)',
                        mixBlendMode: 'screen',
                        opacity: 0.28,
                        background: 'conic-gradient(from 0deg, #ff2d55, #ff9d00, #3dff9e, #2b4bff, #a020f0, #ff2d55)'
                    }}
                    animate={{
                        x: ['-12%', '14%', '-12%'],
                        y: ['-8%', '10%', '-8%'],
                        rotate: [0, 180, 360],
                        scale: [1.05, 1.35, 1.05]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Blob de prisma B (canto inferior direito) */}
                <motion.div
                    className="absolute -right-[20%] -bottom-[30%] w-[80vw] h-[80vw] rounded-full"
                    style={{
                        filter: 'blur(110px)',
                        mixBlendMode: 'screen',
                        opacity: 0.24,
                        background: 'conic-gradient(from 140deg, #2b4bff, #14e0a0, #f5f500, #a020f0, #2b4bff)'
                    }}
                    animate={{
                        x: ['18%', '-16%', '18%'],
                        y: ['12%', '-10%', '12%'],
                        rotate: [0, -200, -360],
                        scale: [1.2, 1, 1.2]
                    }}
                    transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                />

                {/* Blob de prisma C (centro) */}
                <motion.div
                    className="absolute left-[25%] top-[20%] w-[60vw] h-[60vw] rounded-full"
                    style={{
                        filter: 'blur(120px)',
                        mixBlendMode: 'screen',
                        opacity: 0.17,
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,45,85,0.9), rgba(160,32,240,0.5) 45%, transparent 70%)'
                    }}
                    animate={{
                        x: ['0%', '-10%', '0%'],
                        y: ['20%', '-14%', '20%'],
                        scale: [1.1, 1.4, 1.1]
                    }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                />

                {/* Reflexo diagonal (sheen) atravessando a tela.
                    No CSS original o transform (translateX) so tem keyframes em 0%/100% (interpola
                    ease-in-out ao longo de todo o ciclo), enquanto a opacidade tem 4 paradas
                    (0%/12%/88%/100%). Por isso cada propriedade precisa de sua propria transition,
                    em vez de compartilhar um unico array "times". */}
                <motion.div
                    className="absolute -top-[20%] left-0 w-[45%] h-[140%]"
                    style={{
                        filter: 'blur(26px)',
                        background: 'linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.05) 42%, rgba(160,32,240,0.16) 50%, rgba(20,224,160,0.12) 58%, transparent 80%)',
                        skewX: -18
                    }}
                    animate={{ x: ['-60%', '120%'], opacity: [0, 1, 1, 0] }}
                    transition={{
                        x: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 19, repeat: Infinity, ease: "easeInOut", times: [0, 0.12, 0.88, 1] }
                    }}
                />
            </div>

            {/* Camadas de escurecimento para legibilidade do texto sobre o prisma */}
            <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'rgba(7,7,10,0.45)' }} />
            <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(110% 85% at 50% 45%, rgba(7,7,10,0.25) 0%, rgba(7,7,10,0.8) 100%)' }} />
            </div>

            {/* O design coloca o blur pesado de vidro fosco (blur(28px)) apenas no "restante da pagina"
                (fora do escopo desta secao) — a primeira dobra fica direto sobre o prisma, com a
                legibilidade garantida apenas pelo veu plano + vinheta acima. Por isso o antigo overlay
                de backdrop-blur (80/140px) que cobria a tela inteira foi removido daqui. */}

            {/* Extra Background Effects like Grid */}
            <div className="absolute inset-0 pointer-events-none z-[6]">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-10"></div>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center gap-12 px-6 select-none w-full max-w-5xl">
                
                {/* Language Toggle Button — superficie de vidro exatamente como especificado no design:
                    gradiente diagonal sutil, borda 1px translucida, backdrop-blur(var(--gb)) saturate(150%),
                    cantos quase retos (3px) e duas sombras (brilho interno no topo + sombra externa profunda).
                    Hover: borda ganha destaque e o botao sobe 3px. */}
                <motion.button
                    onClick={toggleLanguage}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="group relative flex items-center gap-3 px-6 py-2 border border-white/[0.085] hover:border-white/40 transition-all duration-300 hover:-translate-y-[3px] z-20 overflow-hidden"
                    style={{
                        background: 'linear-gradient(150deg, rgba(255,255,255,0.075), rgba(255,255,255,0.018) 65%)',
                        backdropFilter: 'blur(var(--gb)) saturate(150%)',
                        WebkitBackdropFilter: 'blur(var(--gb)) saturate(150%)',
                        borderRadius: '3px',
                        boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset, 0 24px 44px -26px rgba(0,0,0,0.9)'
                    } as React.CSSProperties}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-white transition-colors">
                        {t('welcome.switchLanguage')}
                    </span>
                    <span className="material-symbols-outlined text-sm text-zinc-500 group-hover:text-white group-hover:rotate-180 transition-all duration-500">
                        language
                    </span>
                </motion.button>

                {/* Titulo em uma unica linha (fonte reduzida de 8vw para 5vw para caber sem quebrar) */}
                <h1 className="font-display font-black text-[5vw] leading-none tracking-tighter uppercase flex items-center justify-center">
                    <div className="relative flex flex-nowrap justify-center gap-x-[1.2vw] py-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={language + "-line"}
                                className="flex flex-nowrap gap-x-[1.2vw]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {[...welcomeLine1, ...welcomeLine2].map((word: string, i: number) => (
                                    <div key={word + i} className="relative inline-block whitespace-nowrap">
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
                </h1>

                {/* Nova tagline importada do Claude Designer, abaixo do titulo (fonte JetBrains Mono, igual ao design original) */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="text-[11px] tracking-[0.28em] text-white/70 uppercase max-w-lg text-center"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    {t('welcome.tagline')}
                </motion.p>
            </div>

            {/* Novo indicador de scroll importado do Claude Designer: texto "SCROLL" + linha vertical com gradiente */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2.5"
            >
                <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {t('welcome.scroll')}
                </span>
                <span className="w-px h-[52px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.5), transparent)' }}></span>
            </motion.div>
        </section>
    );
};

export default WelcomeGate;
