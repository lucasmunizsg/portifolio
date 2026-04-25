import React, { useMemo } from 'react';
import { Skill } from '../types';

interface SkillsAndInterestsProps {
    skills: Skill[];
}

const SkillsAndInterests: React.FC<SkillsAndInterestsProps> = ({ skills }) => {
    const currentYear = new Date().getFullYear();

    const sortedSkills = useMemo(() => 
        [...skills].sort((a, b) => b.yearLearned - a.yearLearned),
        [skills]
    );

    const calculateExp = (year: number) => {
        const diff = currentYear - year;
        if (diff === 0) return 'Recentemente';
        return `${diff} ${diff === 1 ? 'ano' : 'anos'} de exp`;
    };

    return (
        <section id="process" className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#131313]">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-[#7212ff]/50"></span>
                            <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Expertise & Focus</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                            Stacks <span className="text-outline">& interests</span>
                        </h2>
                    </div>
                    <p className="font-sans text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
                        Uma visão dinâmica das tecnologias que domino e dos meus focos atuais de pesquisa e desenvolvimento.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {sortedSkills.map((skill) => (
                        <div 
                            key={skill.id}
                            className={`group relative p-8 transition-all duration-500 border border-white/5 overflow-hidden
                                ${skill.category === 'Linguagem' 
                                    ? 'bg-[#1b1b1b] hover:border-[#7212ff]/30' 
                                    : 'bg-[#161616] hover:border-zinc-700'}`}
                        >
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                                <span className="material-symbols-outlined text-4xl text-white">
                                    {skill.category === 'Linguagem' ? 'code' : 'bolt'}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`w-1.5 h-1.5 rounded-full ${skill.category === 'Linguagem' ? 'bg-[#7212ff]' : 'bg-zinc-500'}`}></span>
                                    <span className="font-label text-[10px] text-zinc-500 uppercase tracking-widest">
                                        {calculateExp(skill.yearLearned)}
                                    </span>
                                </div>
                                
                                <h3 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#e9ddff] transition-colors">
                                    {skill.name}
                                </h3>
                                
                                <span className="font-label text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
                                    {skill.category}
                                </span>
                            </div>

                            {/* Hover Reveal Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7212ff] group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-40 text-center">
                <h2 className="font-display text-4xl md:text-7xl font-black text-white tracking-tighter mb-12 max-w-5xl mx-auto leading-[0.95]">
                    ENGINEERING <span className="text-outline">DIGITAL ATMOSPHERES</span> WITH PRECISION.
                </h2>
            </div>
        </section>
    );
};

export default SkillsAndInterests;

