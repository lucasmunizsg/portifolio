import React, { useMemo } from 'react';
import { Skill } from '../types';

interface SkillsAndInterestsProps {
    skills: Skill[];
}

const SkillsAndInterests: React.FC<SkillsAndInterestsProps> = ({ skills }) => {
    const languages = useMemo(() => skills.filter(s => s.category === 'Linguagem'), [skills]);
    const interests = useMemo(() => skills.filter(s => s.category === 'Interesse'), [skills]);

    return (
        <section id="process" className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#131313]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="w-12 h-[1px] bg-white/20"></span>
                        <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {languages.map((skill) => (
                            <div 
                                key={skill.id}
                                className="group relative px-6 py-4 bg-[#1b1b1b] border border-white/5 hover:border-[#7212ff]/50 transition-all duration-500"
                            >
                                <span className="font-label text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">0{skill.id}</span>
                                <span className="font-display text-lg font-bold text-white uppercase tracking-tight">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="w-12 h-[1px] bg-white/20"></span>
                        <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Focus & Interests</span>
                    </div>
                    <div className="flex flex-col gap-6">
                        {interests.map((skill) => (
                            <div key={skill.id} className="flex justify-between items-end border-b border-white/5 pb-4 group">
                                <span className="font-display text-2xl font-bold text-white uppercase tracking-tighter group-hover:text-[#e9ddff] transition-colors">
                                    {skill.name}
                                </span>
                                <span className="material-symbols-outlined text-zinc-700 group-hover:text-[#7212ff] transition-colors">done_all</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Cinematic Statement adapted from template */}
            <div className="mt-40 text-center">
                <h2 className="font-display text-4xl md:text-7xl font-black text-white tracking-tighter mb-12 max-w-5xl mx-auto leading-[0.95]">
                    ENGINEERING <span className="text-outline">DIGITAL ATMOSPHERES</span> WITH PRECISION.
                </h2>
            </div>
        </section>
    );
};

export default SkillsAndInterests;
