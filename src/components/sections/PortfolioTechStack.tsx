import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Lista das tecnologias efetivamente usadas para construir este portfólio,
// com o slug correspondente no CDN da Simple Icons (https://simpleicons.org)
const PORTFOLIO_TECHNOLOGIES = [
    { name: 'React', slug: 'react' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Vite', slug: 'vite' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Framer Motion', slug: 'framer' },
    { name: 'ESLint', slug: 'eslint' },
    { name: 'Vitest', slug: 'vitest' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css' },
    { name: 'Git', slug: 'git' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Vercel', slug: 'vercel' },
    { name: 'Node.js', slug: 'nodedotjs' }
];

// Cor da seção "Tecnologias do Portfólio" atualizada de esmeralda para violeta (127,0,255)
const wordVariantsVioletSingleBlink: Variants = {
    hidden: {
        opacity: 0,
        textShadow: "0 0 0px rgba(127,0,255,0)"
    },
    visible: (index: number) => ({
        opacity: [0, 0.9, 0.15, 1],
        textShadow: [
            "0 0 0px rgba(127,0,255,0)",
            "0 0 15px rgba(127,0,255,0.6)",
            "0 0 2px rgba(127,0,255,0.1)",
            "0 0 12px rgba(127,0,255,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35,
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut" as const,
        }
    })
};

const PortfolioTechStack: React.FC = () => {
    const { t } = useLanguage();

    // keyPrefix evita colisao de "key" entre as duas linhas do carrossel (cada uma repete a mesma lista)
    const renderTechCard = (tech: { name: string; slug: string }, isDuplicate: boolean, keyPrefix: string) => (
        <div
            key={`${keyPrefix}-${tech.slug}${isDuplicate ? '-dup' : ''}`}
            className="shrink-0 w-[108px] mr-4 flex flex-col items-center justify-center gap-2.5 p-4 bg-transparent transition-all duration-500 group"
        >
            {/* Logo em branco (variante /white da Simple Icons), de volta ao tema escuro da secao */}
            <img
                src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                alt={tech.name}
                loading="lazy"
                className="w-7 h-7 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="font-label text-[9px] text-zinc-500 group-hover:text-[#c084fc] uppercase tracking-widest text-center transition-colors">
                {tech.name}
            </span>
        </div>
    );

    // Segunda linha em ordem invertida, para nao parecer um espelho exato da primeira
    const reversedTechnologies = [...PORTFOLIO_TECHNOLOGIES].reverse();

    return (
        <section id="portfolio-stack" className="relative px-6 md:px-12 py-24 md:py-32 max-w-[1920px] mx-auto bg-[#0e0e0e] overflow-hidden">
            <div className="flex flex-col gap-4 mb-16 relative z-10">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-[#7f00ff]/30"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">{t('techStack.subtitle')}</span>
                </div>
                <motion.h2
                    className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap gap-[0.3em]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {(t('techStack.title') as string[]).map((word, i) => (
                        <div key={i} className="relative inline-block">
                            <span className="text-outline opacity-20">{word}</span>
                            <motion.span
                                variants={wordVariantsVioletSingleBlink}
                                custom={i}
                                className="absolute inset-0 text-[#7f00ff] pointer-events-none"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </motion.h2>
            </div>

            {/* Carrossel com duas linhas em sentidos opostos, fundo igual ao da secao (tema escuro) */}
            <div className="overflow-hidden w-full relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7f00ff]/20 to-transparent z-0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7f00ff]/20 to-transparent z-0"></div>

                {/* Linha 1: da esquerda para a direita */}
                <div className="flex animate-marquee w-max select-none py-2">
                    <div className="flex shrink-0">
                        {PORTFOLIO_TECHNOLOGIES.map((tech) => renderTechCard(tech, false, 'row1'))}
                    </div>
                    <div className="flex shrink-0" aria-hidden="true">
                        {PORTFOLIO_TECHNOLOGIES.map((tech) => renderTechCard(tech, true, 'row1'))}
                    </div>
                </div>

                {/* Linha 2: sentido invertido */}
                <div className="flex animate-marquee-reverse w-max select-none py-2 mt-3">
                    <div className="flex shrink-0">
                        {reversedTechnologies.map((tech) => renderTechCard(tech, false, 'row2'))}
                    </div>
                    <div className="flex shrink-0" aria-hidden="true">
                        {reversedTechnologies.map((tech) => renderTechCard(tech, true, 'row2'))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioTechStack;
