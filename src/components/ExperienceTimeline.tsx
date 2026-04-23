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

    // Sort by startDate descending (Assuming YYYY format or similar)
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
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">History</span>
                    <span className="w-12 h-[1px] bg-white/20"></span>
                </div>
                <h2 className="font-display text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                    Professional <br />
                    <span className="text-outline">Legacy</span>
                </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 hidden md:block"></div>

                <div className="flex flex-col gap-16 relative">
                    {sortedExperiences.map((exp, index) => (
                        <div 
                            key={exp.id} 
                            className={`group relative flex flex-col items-center md:items-start w-full cursor-pointer transition-all duration-500 ${expandedId === exp.id ? 'z-20' : 'z-10'}`}
                            onClick={() => toggleExpand(exp.id)}
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute left-1/2 top-4 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 hidden md:block border-4 border-[#0e0e0e] group-hover:scale-150 transition-transform duration-500 z-30"></div>

                            <div className={`w-full md:w-[45%] flex flex-col gap-4 p-8 bg-[#131313] border border-white/5 hover:border-white/20 transition-all duration-700 shadow-2xl ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                                <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                    <span className="font-label text-[10px] text-[#e9ddff] uppercase tracking-widest bg-white/5 px-3 py-1">
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                    <h4 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                                        {exp.company}
                                    </h4>
                                </div>
                                
                                <h3 className="font-display text-xl md:text-2xl font-black text-white tracking-tight leading-none uppercase">
                                    <span className={expandedId === exp.id ? 'text-white' : 'text-outline'}>
                                        {exp.role}
                                    </span>
                                </h3>

                                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedId === exp.id ? 'max-h-96 opacity-100 mt-6 pt-6 border-t border-white/5' : 'max-h-0 opacity-0'}`}>
                                    <p className="font-body text-zinc-400 text-sm font-light leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>

                                <div className={`mt-4 flex items-center gap-2 text-[8px] font-label uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <span>{expandedId === exp.id ? 'Close Details' : 'View Details'}</span>
                                    <span className={`material-symbols-outlined text-[12px] transform transition-transform duration-500 ${expandedId === exp.id ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
