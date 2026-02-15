import React from 'react';
import { Education } from '../types';

interface EducationSectionProps {
    studies: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ studies }) => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Educação</h2>

                <ul className="space-y-6">
                    {studies.map((study) => (
                        <li key={study.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-start group">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {study.institution}
                                </h3>
                                <p className="text-gray-600">{study.course}</p>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2
                  ${study.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                                        study.status === 'Em andamento' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'}`}>
                                    {study.status}
                                </span>
                            </div>
                            <time className="text-sm text-gray-500 mt-2 sm:mt-0 font-medium">
                                {study.year}
                            </time>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default EducationSection;
