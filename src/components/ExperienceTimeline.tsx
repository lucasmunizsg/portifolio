import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Experience } from '../types';
import BeamLine from './BeamLine';

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceItem: React.FC<{
    exp: Experience;
    index: number;
    total: number;
    isExpanded: boolean;
    onToggle: () => void;
}> = ({ exp, index, total, isExpanded, onToggle }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, { margin: "-50% 0px", once: false });

    return (
        <div 
            ref={itemRef}
            className={`group relative flex flex-col w-full ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}
        >
            {/* Dot on Timeline with expand state glow */}
            <div className={`absolute left-4 md:left-1/2 top-0 w-3 h-3 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-2 transition-all duration-500 z-30 ${
                isInView ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-125' : 'bg-[#0e0e0e] border-zinc-600'
            } ${
                isExpanded ? 'scale-150' : 'group-hover:scale-150'
            }`}></div>

            {/* Connection Line from Timeline to Card (Desktop) */}
            <motion.div 
                className={`hidden md:block absolute top-[5px] h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-20 ${index % 2 === 0 ? 'origin-right' : 'origin-left'}`}
                style={{ 
                    left: index % 2 === 0 ? '40%' : '50%', 
                    width: '10%' 
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Connection Line from Timeline to Card (Mobile) */}
            <motion.div 
                className={`block md:hidden absolute top-[5px] left-4 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-20 origin-left`}
                style={{ width: 'calc(2rem - 6px)' }} // from left-4 to pl-12 (which is left-4 + 2rem)
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Compact and elegant card: md:w-[40%] and p-8 padding */}
            <div 
                onClick={onToggle}
                className={`w-[calc(100%-2rem)] ml-8 md:ml-0 md:w-[40%] cursor-pointer p-8 bg-[#131313]/80 backdrop-blur-md border transition-all duration-700 relative overflow-hidden ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-left'
                } ${
                    isExpanded 
                        ? 'border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)] scale-[1.01]' 
                        : 'border-white/5 hover:border-cyan-400/30'
                }`}
            >
                {/* Decorative Index */}
                <span className="absolute -top-4 -right-4 font-display text-6xl font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-colors">
                    0{total - index}
                </span>

                <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="font-label text-[10px] text-cyan-400 uppercase tracking-[0.2em] font-bold">
                                {exp.startDate} — {exp.endDate}
                            </span>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-cyan-50 transition-all duration-500">
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
                                    <span className="w-1.5 h-[1px] bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.4)] mt-2.5 flex-shrink-0 group-hover/item:w-4 transition-all duration-300"></span>
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
                            className={`font-label text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 cursor-pointer ${
                                isExpanded 
                                    ? 'text-cyan-400' 
                                    : 'text-zinc-600 group-hover:text-cyan-300'
                            }`}
                        >
                            {isExpanded ? 'Fechar' : 'Detalhes'}
                        </span>
                    </div>
                </div>

                {/* Hover Border Accent */}
                <div className="absolute left-0 top-0 w-[2px] h-0 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] group-hover:h-full transition-all duration-700"></div>
            </div>
        </div>
    );
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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
                    <span className="w-12 h-[1px] bg-cyan-400/30"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Histórico</span>
                    <span className="w-12 h-[1px] bg-cyan-400/30"></span>
                </div>
                <h2 className="font-display text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                    <span className="text-outline">Trajetória Profissional</span>
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto" ref={containerRef}>
                <BeamLine containerRef={containerRef} color="bg-cyan-400" glowColor="rgba(34,211,238,0.8)" />

                {/* Timeline content wrapper with balanced gap */}
                <div className="flex flex-col gap-16 relative">
                    {sortedExperiences.map((exp, index) => (
                        <ExperienceItem 
                            key={exp.id}
                            exp={exp}
                            index={index}
                            total={sortedExperiences.length}
                            isExpanded={expandedId === exp.id}
                            onToggle={() => toggleExpand(exp.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
