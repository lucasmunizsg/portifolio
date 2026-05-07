import React, { useEffect, useState } from 'react';
import { Project } from '../types';

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

    return (
        <section id="work" className="relative px-6 md:px-12 py-32 max-w-[1920px] mx-auto bg-[#0e0e0e] overflow-hidden">
            {/* Header section (manual buttons removed) */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-white/30"></span>
                        <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Trabalhos Selecionados</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Projetos em <span className="text-outline">Destaque</span>
                    </h2>
                </div>
            </div>

            {/* Seamless Infinite Marquee Carousel */}
            <div className="overflow-hidden w-full relative">
                <div 
                    className="flex animate-marquee w-max select-none"
                    style={{
                        animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                >
                    {/* First group of cards */}
                    <div className="flex shrink-0">
                        {projects.map((project, index) => {
                            const isActive = activeId === project.id;
                            return (
                                <div 
                                    key={project.id} 
                                    onClick={(e) => handleCardClick(e, project)}
                                    onMouseEnter={() => handleMouseEnter(project.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`project-card cursor-pointer shrink-0 w-[290px] sm:w-[350px] md:w-[420px] mr-6 group relative aspect-[4/5] bg-[#131313] overflow-hidden border transition-all duration-500 ${
                                        isActive 
                                            ? 'neon-border z-10 scale-[1.02]' 
                                            : 'border-white/5'
                                    }`}
                                >
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
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity ${
                                        isActive ? 'opacity-50' : 'opacity-80 group-hover:opacity-60'
                                    }`}></div>
                                    
                                    {/* Project Info */}
                                    <div className={`absolute bottom-10 left-10 right-10 transform transition-transform duration-500 ${
                                        isActive ? '-translate-y-2' : 'group-hover:-translate-y-2'
                                    }`}>
                                        <span className="font-label text-[10px] neon-text uppercase tracking-[0.3em] mb-3 block font-bold">
                                            Arquivo 0{index + 1}
                                        </span>
                                        <h3 className="font-display text-3xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
                                            {project.title}
                                        </h3>
                                        
                                        <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-100 ${
                                            isActive 
                                                ? 'opacity-100 translate-y-0' 
                                                : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                                        }`}>
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-zinc-300 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* View Button Overlay */}
                                    <div className={`absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border flex items-center justify-center transition-all duration-500 ${
                                        isActive 
                                            ? 'opacity-100 neon-border rotate-45' 
                                            : 'opacity-0 border-white/10 group-hover:opacity-100 group-hover:rotate-45'
                                    }`}>
                                        <span className="material-symbols-outlined text-white text-xl">arrow_outward</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Second group (Duplicated for perfectly seamless infinite looping) */}
                    <div className="flex shrink-0" aria-hidden="true">
                        {projects.map((project, index) => {
                            const isActive = activeId === project.id;
                            return (
                                <div 
                                    key={`${project.id}-dup`} 
                                    onClick={(e) => handleCardClick(e, project)}
                                    onMouseEnter={() => handleMouseEnter(project.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`project-card cursor-pointer shrink-0 w-[290px] sm:w-[350px] md:w-[420px] mr-6 group relative aspect-[4/5] bg-[#131313] overflow-hidden border transition-all duration-500 ${
                                        isActive 
                                            ? 'neon-border z-10 scale-[1.02]' 
                                            : 'border-white/5'
                                    }`}
                                >
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
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity ${
                                        isActive ? 'opacity-50' : 'opacity-80 group-hover:opacity-60'
                                    }`}></div>
                                    
                                    {/* Project Info */}
                                    <div className={`absolute bottom-10 left-10 right-10 transform transition-transform duration-500 ${
                                        isActive ? '-translate-y-2' : 'group-hover:-translate-y-2'
                                    }`}>
                                        <span className="font-label text-[10px] neon-text uppercase tracking-[0.3em] mb-3 block font-bold">
                                            Arquivo 0{index + 1}
                                        </span>
                                        <h3 className="font-display text-3xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
                                            {project.title}
                                        </h3>
                                        
                                        <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-100 ${
                                            isActive 
                                                ? 'opacity-100 translate-y-0' 
                                                : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                                        }`}>
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-zinc-300 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* View Button Overlay */}
                                    <div className={`absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border flex items-center justify-center transition-all duration-500 ${
                                        isActive 
                                            ? 'opacity-100 neon-border rotate-45' 
                                            : 'opacity-0 border-white/10 group-hover:opacity-100 group-hover:rotate-45'
                                    }`}>
                                        <span className="material-symbols-outlined text-white text-xl">arrow_outward</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
