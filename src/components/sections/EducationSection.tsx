import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Education } from '../../types';
import EducationTimeline from './EducationTimeline';

const wordVariantsEmeraldSingleBlink: Variants = {
    hidden: { 
        opacity: 0,
        textShadow: "0 0 0px rgba(52,211,153,0)"
    },
    visible: (index: number) => ({
        opacity: [
            0,     // Começa apagado
            0.9,   // Pisca 1 (Acende)
            0.15,  // Pisca 1 (Apaga)
            1,     // Estabiliza totalmente aceso
        ],
        textShadow: [
            "0 0 0px rgba(52,211,153,0)",
            "0 0 15px rgba(52,211,153,0.6)",
            "0 0 2px rgba(52,211,153,0.1)",
            "0 0 12px rgba(52,211,153,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35, // Sequência de acendimento
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut" as const,
        }
    })
};

interface EducationSectionProps {
    studies: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ studies }) => {
    return (
        <section id="education" className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#0e0e0e]">
            <div className="flex flex-col items-start text-left gap-8 mb-32">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-emerald-400/30"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Formação</span>
                </div>
                {/* 
                  Animação de piscada única (single blink) na cor esmeralda (emerald-400) correspondente a Formação Acadêmica,
                  sendo ativada quando entra no campo visual.
                */}
                <motion.h2 
                    className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap gap-[0.3em] leading-none"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {['CAMINHO', 'ACADÊMICO'].map((word, i) => (
                        <div key={i} className="relative inline-block">
                            <span className="text-outline opacity-20">{word}</span>
                            <motion.span
                                variants={wordVariantsEmeraldSingleBlink}
                                custom={i}
                                className="absolute inset-0 text-emerald-400 pointer-events-none"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </motion.h2>
            </div>
            
            <EducationTimeline education={studies} />
        </section>
    );
};

export default EducationSection;

