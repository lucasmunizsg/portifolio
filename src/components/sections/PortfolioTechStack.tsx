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
    { name: 'PostCSS', slug: 'postcss' },
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

const wordVariantsEmeraldSingleBlink: Variants = {
    hidden: {
        opacity: 0,
        textShadow: "0 0 0px rgba(52,211,153,0)"
    },
    visible: (index: number) => ({
        opacity: [0, 0.9, 0.15, 1],
        textShadow: [
            "0 0 0px rgba(52,211,153,0)",
            "0 0 15px rgba(52,211,153,0.6)",
            "0 0 2px rgba(52,211,153,0.1)",
            "0 0 12px rgba(52,211,153,0.4)"
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

    const renderTechCard = (tech: { name: string; slug: string }, isDuplicate = false) => (
        <div
            key={isDuplicate ? `${tech.slug}-dup` : tech.slug}
            className="shrink-0 w-[140px] mr-6 flex flex-col items-center justify-center gap-4 p-6 bg-[#131313] border border-white/5 hover:border-emerald-400/40 transition-all duration-500 group"
        >
            <img
                src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                alt={tech.name}
                loading="lazy"
                className="w-10 h-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="font-label text-[10px] text-zinc-500 group-hover:text-emerald-300 uppercase tracking-widest text-center transition-colors">
                {tech.name}
            </span>
        </div>
    );

    return (
        <section id="portfolio-stack" className="relative px-6 md:px-12 py-24 md:py-32 max-w-[1920px] mx-auto bg-[#0e0e0e] overflow-hidden">
            <div className="flex flex-col gap-4 mb-16 relative z-10">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-emerald-400/30"></span>
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

            {/* Carrossel contínuo (marquee), no mesmo padrão usado na seção de Projetos */}
            <div className="overflow-hidden w-full relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent z-0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent z-0"></div>

                <div className="flex animate-marquee w-max select-none py-4">
                    <div className="flex shrink-0">
                        {PORTFOLIO_TECHNOLOGIES.map((tech) => renderTechCard(tech, false))}
                    </div>
                    <div className="flex shrink-0" aria-hidden="true">
                        {PORTFOLIO_TECHNOLOGIES.map((tech) => renderTechCard(tech, true))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioTechStack;
