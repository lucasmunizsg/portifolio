import React from 'react';
import { ResumeVersion } from '../types';

interface ResumeDownloadsProps {
    versions: ResumeVersion[];
}

const ResumeDownloads: React.FC<ResumeDownloadsProps> = ({ versions }) => {
    return (
        <section id="curriculo" className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-6">Downloads Disponíveis</h2>
                <p className="text-indigo-200 mb-12 max-w-2xl mx-auto">
                    Baixe a versão do meu currículo que melhor se adapta à sua necessidade.
                    Disponível em múltiplos idiomas.
                </p>

                <div className="grid gap-6 md:grid-cols-2 justify-center">
                    {versions.map((version) => (
                        <div
                            key={version.id}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all text-left group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase">
                                    {version.language}
                                </span>
                                <svg className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white">{version.title}</h3>
                            <p className="text-sm text-gray-300 mb-6">
                                {version.description}
                            </p>

                            <a
                                href={version.fileUrl}
                                download
                                className="inline-flex items-center justify-center w-full bg-white text-indigo-900 font-bold py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors"
                            >
                                Baixar PDF
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResumeDownloads;
