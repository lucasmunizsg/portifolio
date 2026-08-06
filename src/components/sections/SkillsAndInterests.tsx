import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Skill } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

const wordVariantsSingleBlink: Variants = {
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
            ease: "easeInOut" as const,
        }
    })
};

// Palavra "HABILIDADES"/"SKILLS" do título piscando em azul (0,0,255)
const wordVariantsBlueSingleBlink: Variants = {
    hidden: {
        opacity: 0,
        textShadow: "0 0 0px rgba(0,0,255,0)"
    },
    visible: (index: number) => ({
        opacity: [0, 0.9, 0.15, 1],
        textShadow: [
            "0 0 0px rgba(0,0,255,0)",
            "0 0 15px rgba(0,0,255,0.6)",
            "0 0 2px rgba(0,0,255,0.1)",
            "0 0 12px rgba(0,0,255,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35,
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut" as const,
        }
    })
};

// Palavra "PROGRESSO"/"PROGRESS" do título piscando em laranja (255,165,0)
const wordVariantsOrangeSingleBlink: Variants = {
    hidden: {
        opacity: 0,
        textShadow: "0 0 0px rgba(255,165,0,0)"
    },
    visible: (index: number) => ({
        opacity: [0, 0.9, 0.15, 1],
        textShadow: [
            "0 0 0px rgba(255,165,0,0)",
            "0 0 15px rgba(255,165,0,0.6)",
            "0 0 2px rgba(255,165,0,0.1)",
            "0 0 12px rgba(255,165,0,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35,
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut" as const,
        }
    })
};
interface SkillsAndInterestsProps {
    skills: Skill[];
}

const SkillsAndInterests: React.FC<SkillsAndInterestsProps> = ({ skills }) => {
    const { t } = useLanguage();

    const sortedSkills = useMemo(() =>
        [...skills].sort((a, b) => b.yearLearned - a.yearLearned),
        [skills]
    );

    // Seção "Habilidades" unifica as categorias Linguagem e Interesse,
    // já que a seção agora se resume a apenas Habilidades e Progresso
    const habilidades = useMemo(() =>
        sortedSkills.filter(s =>
            (s.category as any) === 'Linguagem' || (s.category as any) === 'Language' ||
            (s.category as any) === 'Interesse' || (s.category as any) === 'Interest'
        ),
        [sortedSkills]
    );

    // Categoria "Progresso": habilidades ainda em evolução (ex: POO Inicial)
    const progresso = useMemo(() =>
        sortedSkills.filter(s => (s.category as any) === 'Progresso' || (s.category as any) === 'Progress'),
        [sortedSkills]
    );

    // Tema de cor por seção: Habilidades em azul (0,0,255), Progresso em laranja (255,165,0)
    const SkillCard = ({ skill, theme }: { skill: Skill; theme: 'habilidades' | 'progresso' }) => {
        const isLanguage = (skill.category as any) === 'Linguagem' || (skill.category as any) === 'Language';
        const isHabilidades = theme === 'habilidades';

        return (
            <div
                key={skill.id}
                className={`group relative p-8 transition-all duration-500 border border-white/5 overflow-hidden bg-[#1b1b1b] ${
                    isHabilidades
                        ? 'hover:border-[#0000ff] hover:shadow-[0_0_15px_rgba(0,0,255,0.35)]'
                        : 'hover:border-[#ffa500] hover:shadow-[0_0_15px_rgba(255,165,0,0.35)]'
                }`}
            >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                    <span className="material-symbols-outlined text-4xl text-white">
                        {isLanguage ? 'code' : 'bolt'}
                    </span>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                            isHabilidades
                                ? 'bg-[#0000ff] shadow-[0_0_8px_rgba(0,0,255,0.8)]'
                                : 'bg-[#ffa500] shadow-[0_0_8px_rgba(255,165,0,0.8)]'
                        }`}></span>
                        {/* Tempo de uso fixo no lugar do antigo cálculo de "X anos de exp" */}
                        <span className="font-label text-[10px] text-zinc-500 uppercase tracking-widest">
                            {skill.usageTime}
                        </span>
                    </div>

                    <h3 className={`font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-2 transition-all ${
                        isHabilidades ? 'group-hover:text-[#3d3dff]' : 'group-hover:text-[#ffa500]'
                    }`}>
                        {skill.name}
                    </h3>

                    <span className="font-label text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
                        {skill.category}
                    </span>
                </div>

                {/* Hover Reveal Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ${
                    isHabilidades
                        ? 'bg-[#0000ff] shadow-[0_0_10px_rgba(0,0,255,0.4)]'
                        : 'bg-[#ffa500] shadow-[0_0_10px_rgba(255,165,0,0.4)]'
                }`}></div>
            </div>
        );
    };

    return (
        <section id="process" className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#131313]">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-white/30"></span>
                            <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">{t('skills.subtitle')}</span>
                        </div>
                        <motion.h2 
                            className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-left flex flex-wrap gap-[0.3em]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                        >
                            {(t('skills.title') as string[]).map((word, i) => {
                                // Palavra "Habilidades" (índice 0) em azul, "Progresso" (índice 2) em laranja
                                const variant = i === 0 ? wordVariantsBlueSingleBlink : i === 2 ? wordVariantsOrangeSingleBlink : wordVariantsSingleBlink;
                                const colorClass = i === 0 ? 'text-[#0000ff]' : i === 2 ? 'text-[#ffa500]' : 'text-white';
                                return (
                                    <div key={word + i} className="relative inline-block">
                                        <span className="text-outline opacity-20">{word}</span>
                                        <motion.span
                                            variants={variant}
                                            custom={i}
                                            className={`absolute inset-0 pointer-events-none ${colorClass}`}
                                        >
                                            {word}
                                        </motion.span>
                                    </div>
                                );
                            })}
                        </motion.h2>
                    </div>
                </div>

                {/* Habilidades Section: tema azul (0,0,255) */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <h3 className="font-display text-xl font-bold text-[#0000ff]/70 uppercase tracking-[0.2em]">
                            {t('skills.habilidades')}
                        </h3>
                        <div className="h-[1px] flex-grow bg-[#0000ff]/10"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {habilidades.map((skill) => (
                            <SkillCard key={skill.id} skill={skill} theme="habilidades" />
                        ))}
                    </div>
                </div>

                {/* Progresso Section: tema laranja (255,165,0), habilidades ainda em evolução (ex: POO Inicial) */}
                {progresso.length > 0 && (
                    <div className="flex flex-col gap-8 mt-8">
                        <div className="flex items-center gap-4">
                            <h3 className="font-display text-xl font-bold text-[#ffa500]/70 uppercase tracking-[0.2em]">
                                {t('skills.progresso')}
                            </h3>
                            <div className="h-[1px] flex-grow bg-[#ffa500]/10"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {progresso.map((skill) => (
                                <SkillCard key={skill.id} skill={skill} theme="progresso" />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-40 text-center">
                <motion.h2 
                    className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 max-w-5xl mx-auto leading-[0.95] flex flex-wrap justify-center gap-[0.3em]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {(t('skills.footerTitle') as string[]).map((word, i) => (
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
        </section>
    );
};

export default SkillsAndInterests;

