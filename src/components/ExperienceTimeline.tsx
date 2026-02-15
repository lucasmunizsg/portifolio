import React from 'react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Experiência Profissional</h2>

                <ol className="relative border-l border-gray-200 ml-3 md:ml-0">
                    {experiences.map((exp) => (
                        <li key={exp.id} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                                <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                            </span>

                            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                                    <time className="text-sm font-normal text-gray-500 mb-1 sm:mb-0">
                                        {exp.startDate} - {exp.endDate}
                                    </time>
                                </div>

                                <p className="text-base font-medium text-indigo-600 mb-3 block">
                                    {exp.company}
                                </p>

                                <p className="text-base font-normal text-gray-600 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
