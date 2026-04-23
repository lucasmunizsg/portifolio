import React from 'react';
import { Education } from '../types';

interface EducationSectionProps {
    studies: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ studies }) => {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#0e0e0e]">
            <div className="flex items-center gap-4 mb-12">
                <span className="w-12 h-[1px] bg-white/20"></span>
                <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Education</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                {studies.map((study) => (
                    <div key={study.id} className="group flex flex-col gap-4 border-l border-white/10 pl-8">
                        <span className="font-label text-[10px] text-zinc-500 uppercase tracking-widest">{study.year}</span>
                        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#e9ddff] transition-colors">
                            {study.institution}
                        </h3>
                        <p className="font-body text-zinc-400 text-sm md:text-lg font-light leading-relaxed">
                            {study.course}
                        </p>
                        <div className="mt-2">
                             <span className="px-3 py-1 bg-[#1b1b1b] text-[8px] uppercase tracking-[0.2em] text-[#e9ddff] border border-white/5">
                                {study.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
