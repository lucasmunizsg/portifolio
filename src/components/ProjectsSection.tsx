import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const wordVariantsRedSingleBlink = {
    hidden: { 
        opacity: 0,
        textShadow: "0 0 0px rgba(239,68,68,0)"
    },
    visible: (index: number) => ({
        opacity: [
            0,     // Começa apagado
            0.9,   // Pisca 1 (Acende)
            0.15,  // Pisca 1 (Apaga)
            1,     // Estabiliza totalmente aceso
        ],
        textShadow: [
            "0 0 0px rgba(239,68,68,0)",
            "0 0 15px rgba(239,68,68,0.6)",
            "0 0 2px rgba(239,68,68,0.1)",
            "0 0 12px rgba(239,68,68,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35, // Sequência de acendimento
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut",
        }
    })
};

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const handleCardClick = (e: React.MouseEvent, project: Project) => {
        if (activeId !== project.id) {
            e.preventDefault();
            e.stopPropagation();
            setActiveId(project.id);
            setIsPaused(true);
        } else {
            // Se já estiver ativo, abre os detalhes em uma nova aba
            window.open(project.repoUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const handleMouseEnter = (projectId: string) => {
        setActiveId(projectId);
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setActiveId(null);
        setIsPaused(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.project-card')) {
                setActiveId(null);
                setIsPaused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    if (!projects || projects.length === 0) return null;

    const renderProjectCard = (project: Project, index: number, isDuplicate = false) => {
        const isActive = activeId === project.id;
        const key = isDuplicate ? `${project.id}-dup` : project.id;
        
        return (
            <div 
                key={key} 
                onClick={(e) => handleCardClick(e, project)}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
                className={`project-card cursor-pointer shrink-0 w-[290px] sm:w-[350px] md:w-[420px] mr-6 group relative aspect-[4/5] bg-[#131313]/80 backdrop-blur-md overflow-hidden border transition-all duration-700 ${
                    isActive 
                        ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] z-10 scale-[1.02]' 
                        : 'border-white/5 hover:border-red-500/30'
                }`}
            >
                {/* 
                  Borda vermelha animada estilo Neon (Ativo/Hover)
                */}
                {isActive && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                        <motion.rect 
                            x="0" y="0" width="100%" height="100%" 
                            fill="none" 
                            stroke="#ef4444" 
                            strokeWidth="4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            style={{ filter: "drop-shadow(0 0 8px rgba(239,68,68,0.8))" }}
                        />
                    </svg>
                )}

                {/* Hover Border Accent */}
                <div className="absolute left-0 top-0 w-[2px] h-0 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] group-hover:h-full transition-all duration-700 z-10"></div>

                {/* Image with Discrete Zoom & Active State opacity */}
                <img 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive 
                            ? 'grayscale-0 opacity-100 scale-105' 
                            : 'grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                    }`} 
                    src={project.imageUrl || `/img${(index % 3) + 1}.png`} 
                    alt={project.title} 
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent transition-opacity ${
                    isActive ? 'opacity-80' : 'opacity-90 group-hover:opacity-70'
                }`}></div>
                
                {/* Project Info */}
                <div className={`absolute bottom-10 left-10 right-10 transform transition-transform duration-500 z-10 ${
                    isActive ? '-translate-y-2' : 'group-hover:-translate-y-2'
                }`}>
                    <span className="font-label text-[10px] text-red-400 uppercase tracking-[0.3em] mb-3 block font-bold" style={{ textShadow: '0 0 10px rgba(239,68,68,0.8)' }}>
                        Arquivo 0{index + 1}
                    </span>
                    <h3 className="font-display text-3xl font-black text-white tracking-tighter uppercase mb-6 leading-none group-hover:text-red-50 transition-colors">
                        {project.title}
                    </h3>
                    
                    <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-100 ${
                        isActive 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                    }`}>
                        {project.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-[9px] uppercase tracking-widest text-red-200 font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* View Button Overlay */}
                <div className={`absolute top-10 right-10 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border flex items-center justify-center transition-all duration-500 z-10 ${
                    isActive 
                        ? 'opacity-100 border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.6)] rotate-45' 
                        : 'opacity-0 border-white/10 group-hover:opacity-100 group-hover:rotate-45'
                }`}>
                    <span className={`material-symbols-outlined text-xl transition-colors ${isActive ? 'text-red-400' : 'text-white'}`}>arrow_outward</span>
                </div>
            </div>
        );
    };

    return (
        <section id="work" className="relative px-6 md:px-12 py-32 max-w-[1920px] mx-auto bg-[#0e0e0e] overflow-hidden">
            {/* Header section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-red-500/40"></span>
                        <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Trabalhos Selecionados</span>
                    </div>
                    {/* 
                      Animação Neon de piscada única (single blink) na cor vermelha (red-500).
                      O texto é desmembrado em palavras para acender de forma sequencial quando visível.
                    */}
                    <motion.h2 
                        className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap gap-[0.3em]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        {['PROJETOS', 'EM', 'DESTAQUE'].map((word, i) => (
                            <div key={i} className="relative inline-block">
                                <span className="text-outline opacity-20">{word}</span>
                                <motion.span
                                    variants={wordVariantsRedSingleBlink}
                                    custom={i}
                                    className="absolute inset-0 text-red-500 pointer-events-none"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </motion.h2>
                </div>
            </div>

            {/* Seamless Infinite Marquee Carousel */}
            <div className="overflow-hidden w-full relative">
                {/* Horizontal glowing lines top and bottom of carousel */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent z-0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent z-0"></div>

                <div 
                    className="flex animate-marquee w-max select-none py-4"
                    style={{
                        animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                >
                    {/* First group of cards */}
                    <div className="flex shrink-0">
                        {projects.map((project, index) => renderProjectCard(project, index, false))}
                    </div>

                    {/* Second group (Duplicated for perfectly seamless infinite looping) */}
                    <div className="flex shrink-0" aria-hidden="true">
                        {projects.map((project, index) => renderProjectCard(project, index, true))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
