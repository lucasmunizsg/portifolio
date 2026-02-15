import React, { useMemo } from 'react';
import { Skill } from '../types';

interface SkillsAndInterestsProps {
    skills: Skill[];
}

const SkillsAndInterests: React.FC<SkillsAndInterestsProps> = ({ skills }) => {
    const languages = useMemo(() => skills.filter(s => s.category === 'Linguagem'), [skills]);
    const interests = useMemo(() => skills.filter(s => s.category === 'Interesse'), [skills]);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Interesses</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            Stack Tecnológica
                            <span className="ml-2 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {languages.map((skill) => (
                                <span
                                    key={skill.id}
                                    className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            Interesses Pessoais
                            <span className="ml-2 w-2 h-2 bg-pink-500 rounded-full"></span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {interests.map((skill) => (
                                <span
                                    key={skill.id}
                                    className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-default"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsAndInterests;
