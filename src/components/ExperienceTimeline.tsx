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
                    <span className="w-12 h-[1px] bg-[#7212ff]/50"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">History</span>
                    <span className="w-12 h-[1px] bg-[#7212ff]/50"></span>
                </div>
                <h2 className="font-display text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                    Professional <br />
                    <span className="text-outline">Legacy</span>
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Timeline Line with Glow */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#7212ff]/30 to-transparent transform md:-translate-x-1/2"></div>

                <div className="flex flex-col gap-24 relative">
                    {sortedExperiences.map((exp, index) => (
                        <div 
                            key={exp.id} 
                            className={`group relative flex flex-col w-full ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute left-[-6px] md:left-1/2 top-0 w-3 h-3 bg-[#7212ff] rounded-full transform md:-translate-x-1/2 border-4 border-[#0e0e0e] group-hover:scale-150 transition-transform duration-500 z-30 shadow-[0_0_15px_rgba(114,18,255,0.5)]"></div>

                            <div 
                                onClick={() => toggleExpand(exp.id)}
                                className={`w-full md:w-[46%] cursor-pointer p-10 bg-[#131313] border border-white/5 hover:border-[#7212ff]/30 transition-all duration-700 relative overflow-hidden
                                    ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}
                            >
                                {/* Decorative Index */}
                                <span className="absolute -top-4 -right-4 font-display text-6xl font-black text-white/[0.02] pointer-events-none group-hover:text-[#7212ff]/[0.05] transition-colors">
                                    0{sortedExperiences.length - index}
                                </span>

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-label text-[10px] text-[#7212ff] uppercase tracking-[0.2em] font-bold">
                                                {exp.startDate} — {exp.endDate}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-outline transition-all duration-500">
                                            {exp.role}
                                        </h3>
                                        <h4 className="font-label text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">
                                            {exp.company}
                                        </h4>
                                    </div>

                                    {/* Task List - Always visible or toggle? Task says "Role as highlight, Tasks as list, company secondary" */}
                                    <div className={`transition-all duration-700 ease-in-out ${expandedId === exp.id ? 'opacity-100 mt-4' : 'opacity-60 mt-4'}`}>
                                        <ul className="flex flex-col gap-4">
                                            {exp.description.split('. ').filter(t => t.trim()).map((task, i) => (
                                                <li key={i} className="flex items-start gap-4 group/item">
                                                    <span className="w-1.5 h-[1px] bg-[#7212ff] mt-2.5 flex-shrink-0 group-hover/item:w-4 transition-all duration-300"></span>
                                                    <p className="font-sans text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                                                        {task.endsWith('.') ? task : `${task}.`}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8 flex items-center gap-4 border-t border-white/5 mt-4">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-[#7212ff]/20 border border-[#7212ff]/30 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[10px] text-[#7212ff]">verified</span>
                                            </div>
                                        </div>
                                        <span className="font-label text-[9px] text-zinc-600 uppercase tracking-widest">
                                            {expandedId === exp.id ? 'Click to collapse' : 'Click to expand details'}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Border Accent */}
                                <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#7212ff] group-hover:h-full transition-all duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;

