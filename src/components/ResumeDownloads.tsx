import React from 'react';
import { motion } from 'framer-motion';
import { ResumeVersion } from '../types';

const wordVariantsSingleBlink = {
    hidden: { 
        opacity: 0,
        textShadow: "0 0 0px rgba(255,255,255,0)"
    },
    visible: (index: number) => ({
        opacity: [
            0,     // Começa apagado
            0.9,   // Pisca 1 (Acende)
            0.15,  // Pisca 1 (Apaga)
            1,     // Estabiliza totalmente aceso
        ],
        textShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 15px rgba(255,255,255,0.6)",
            "0 0 2px rgba(255,255,255,0.1)",
            "0 0 12px rgba(255,255,255,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35, // Sequência de acendimento
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut",
        }
    })
};
interface ResumeDownloadsProps {
    versions: ResumeVersion[];
}

const ResumeDownloads: React.FC<ResumeDownloadsProps> = ({ versions }) => {
    return (
        <section id="curriculo" className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#0e0e0e]">
            <div className="flex flex-col items-center text-center gap-8 mb-20">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Recursos</span>
                    <span className="w-12 h-[1px] bg-white/20"></span>
                </div>
                {/* 
                  Implementação do efeito de acendimento neon único (single blink).
                  O texto é desmembrado em palavras para que a animação (delay staggered) 
                  acenda cada palavra de forma isolada e sequencial quando entrar em foco.
                */}
                <motion.h2 
                    className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap justify-center gap-[0.3em]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {['DOCUMENTAÇÃO', 'TÉCNICA'].map((word, i) => (
                        <div key={i} className="relative inline-block">
                            <span className="text-outline opacity-20">{word}</span>
                            <motion.span
                                variants={wordVariantsSingleBlink}
                                custom={i}
                                className="absolute inset-0 text-white pointer-events-none"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </motion.h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {versions.map((version) => (
                    <div
                        key={version.id}
                        className="group relative bg-[#131313] border border-white/5 p-8 md:p-12 hover:bg-[#1b1b1b] transition-all duration-700"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className="font-label text-[10px] text-white uppercase tracking-[0.2em] border border-white/20 px-3 py-1">
                                {version.language}
                            </span>
                            <span className="material-symbols-outlined text-white text-3xl opacity-20 group-hover:opacity-100 transition-opacity">
                                download
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
                            {version.title}
                        </h3>
                        <p className="font-body text-sm text-zinc-400 font-light leading-relaxed mb-12">
                            {version.description}
                        </p>

                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const email = formData.get('email');
                                if (email) {
                                    console.log(`Lead captured: ${email}`);
                                    // Aqui você poderia enviar para um webhook/API futuramente
                                }
                                
                                // Trigger download
                                const link = document.createElement('a');
                                link.href = version.fileUrl;
                                link.download = '';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="flex flex-col gap-4"
                        >
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Seu e-mail (opcional para download)"
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-xs focus:outline-none focus:neon-border transition-all"
                            />
                            <button
                                type="submit"
                                className="inline-block w-full text-center font-label uppercase tracking-[0.2em] text-[10px] bg-white text-[#1a1c1c] py-4 hover:bg-zinc-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-700"
                            >
                                Baixar Currículo
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResumeDownloads;
