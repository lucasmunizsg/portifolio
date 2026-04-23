import React from 'react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#131313]">
            <div className="flex items-center gap-4 mb-12">
                <span className="w-12 h-[1px] bg-white/20"></span>
                <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Professional Journey</span>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:gap-24">
                {experiences.map((exp) => (
                    <div key={exp.id} className="group border-t border-white/5 pt-12 flex flex-col md:grid md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="font-label text-[10px] text-zinc-500 uppercase tracking-widest">{exp.startDate} — {exp.endDate}</span>
                            <h4 className="font-display text-xl font-bold text-white uppercase tracking-tight">{exp.company}</h4>
                        </div>
                        
                        <div className="md:col-span-3 flex flex-col gap-6">
                            <h3 className="font-display text-2xl md:text-4xl font-black text-white tracking-tighter leading-none flex items-center gap-4">
                                <span className="text-outline group-hover:text-white transition-all duration-700">{exp.role.toUpperCase()}</span>
                            </h3>
                            <p className="font-body text-zinc-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
