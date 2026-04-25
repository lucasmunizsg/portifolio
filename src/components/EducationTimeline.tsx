import React from 'react';
import { Education } from '../types';

interface EducationTimelineProps {
    education: Education[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
    return (
        <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line with Glow */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#7212ff]/20 to-transparent transform md:-translate-x-1/2"></div>
            
            <div className="flex flex-col gap-24 relative">
                {education.map((study, index) => (
                    <div 
                        key={study.id} 
                        className={`group relative flex flex-col w-full ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}
                    >
                        {/* Dot on Timeline */}
                        <div className="absolute left-[-6px] md:left-1/2 top-0 w-3 h-3 bg-zinc-800 rounded-full transform md:-translate-x-1/2 border-4 border-[#0e0e0e] group-hover:bg-[#7212ff] group-hover:scale-150 transition-all duration-500 z-30"></div>

                        <div className={`w-full md:w-[46%] p-10 bg-[#131313] border border-white/5 hover:border-[#7212ff]/20 transition-all duration-700 relative overflow-hidden
                            ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                            
                            {/* Decorative Background Icon */}
                            <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                <span className="material-symbols-outlined text-8xl text-white">school</span>
                            </div>

                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-label text-[10px] text-[#7212ff] uppercase tracking-[0.2em] font-bold">
                                            {study.year}
                                        </span>
                                        <span className={`px-2 py-0.5 text-[8px] uppercase tracking-[0.2em] border ${
                                            study.status === 'Prêmio' ? 'text-[#ffd700] border-[#ffd700]/20 bg-[#ffd700]/5' : 'text-zinc-500 border-white/10 bg-white/5'
                                        }`}>
                                            {study.status}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-outline transition-all duration-500">
                                        {study.course}
                                    </h3>
                                    <h4 className="font-label text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">
                                        {study.institution}
                                    </h4>
                                </div>
                            </div>

                            {/* Hover Border Accent */}
                            <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#7212ff]/50 group-hover:h-full transition-all duration-700"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationTimeline;

