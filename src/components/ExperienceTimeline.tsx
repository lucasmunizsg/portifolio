import React, { useState } from 'react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const sortedExperiences = [...experiences].sort((a, b) => {
        if (a.startDate === 'Atual' || b.startDate === 'Atual') {
            return a.startDate === 'Atual' ? -1 : 1;
        }
        return b.startDate.localeCompare(a.startDate);
    });

    return (
        <section id="xp" className="py-24 md:py-40 px-6 md:px-12 bg-[#0e0e0e] overflow-hidden relative">
            <div className="flex flex-col items-center text-center gap-8 mb-32">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/30"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Histórico</span>
                    <span className="w-12 h-[1px] bg-white/30"></span>
                </div>
                <h2 className="font-display text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                    <span className="text-outline">Trajetória Profissional</span>
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Timeline Line with Glow */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent transform md:-translate-x-1/2"></div>

                {/* Timeline content wrapper with balanced gap */}
                <div className="flex flex-col gap-16 relative">
                    {sortedExperiences.map((exp, index) => {
                        const isExpanded = expandedId === exp.id;
                        return (
                            <div 
                                key={exp.id} 
                                className={`group relative flex flex-col w-full ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}
                            >
                                {/* Dot on Timeline with expand state glow */}
                                <div className={`absolute left-[-6px] md:left-1/2 top-0 w-3 h-3 bg-white rounded-full transform md:-translate-x-1/2 border-4 border-[#0e0e0e] transition-all duration-500 z-30 ${
                                    isExpanded 
                                        ? 'scale-150 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]' 
                                        : 'group-hover:scale-150 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                                }`}></div>

                                {/* Compact and elegant card: md:w-[40%] and p-8 padding */}
                                <div 
                                    onClick={() => toggleExpand(exp.id)}
                                    className={`w-full md:w-[40%] cursor-pointer p-8 bg-[#131313] border transition-all duration-700 relative overflow-hidden ${
                                        index % 2 === 0 ? 'md:text-left' : 'md:text-left'
                                    } ${
                                        isExpanded 
                                            ? 'neon-border scale-[1.01]' 
                                            : 'border-white/5 hover:neon-border'
                                    }`}
                                >
                                    {/* Decorative Index */}
                                    <span className="absolute -top-4 -right-4 font-display text-6xl font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-colors">
                                        0{sortedExperiences.length - index}
                                    </span>

                                    <div className="flex flex-col gap-6 relative z-10">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="font-label text-[10px] neon-text uppercase tracking-[0.2em] font-bold">
                                                    {exp.startDate} — {exp.endDate}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-outline transition-all duration-500">
                                                {exp.role}
                                            </h3>
                                            <h4 className="font-label text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">
                                                {exp.company}
                                            </h4>
                                        </div>

                                        {/* Collapsible Details Panel with smooth max-height animation */}
                                        <div 
                                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                                isExpanded 
                                                    ? 'max-h-[1000px] opacity-100 mt-6' 
                                                    : 'max-h-0 opacity-0 mt-0'
                                            }`}
                                        >
                                            <ul className="flex flex-col gap-4">
                                                {exp.description.split('. ').filter(t => t.trim()).map((task, i) => (
                                                    <li key={i} className="flex items-start gap-4 group/item">
                                                        <span className="w-1.5 h-[1px] bg-white shadow-[0_0_5px_rgba(255,255,255,0.4)] mt-2.5 flex-shrink-0 group-hover/item:w-4 transition-all duration-300"></span>
                                                        <p className="font-sans text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                                                            {task.endsWith('.') ? task : `${task}.`}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Minimalist Details Toggle - Only text, glows on hover or when expanded */}
                                        <div className="pt-6 border-t border-white/5 mt-4 flex items-center">
                                            <span 
                                                className={`font-label text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 cursor-pointer hover:neon-text ${
                                                    isExpanded 
                                                        ? 'neon-text' 
                                                        : 'text-zinc-600 group-hover:text-zinc-400'
                                                }`}
                                            >
                                                {isExpanded ? 'Fechar' : 'Detalhes'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hover Border Accent */}
                                    <div className="absolute left-0 top-0 w-[2px] h-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)] group-hover:h-full transition-all duration-700"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
