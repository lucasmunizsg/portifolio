import React from 'react';
import { ResumeVersion } from '../types';

interface ResumeDownloadsProps {
    versions: ResumeVersion[];
}

const ResumeDownloads: React.FC<ResumeDownloadsProps> = ({ versions }) => {
    return (
        <section id="curriculo" className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#0e0e0e]">
            <div className="flex flex-col items-center text-center gap-8 mb-20">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Recursos</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                    Documentação <span className="text-outline">Técnica</span>
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {versions.map((version) => (
                    <div
                        key={version.id}
                        className="group relative bg-[#131313] border border-white/5 p-8 md:p-12 hover:bg-[#1b1b1b] transition-all duration-700"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className="font-label text-[10px] text-[#e9ddff] uppercase tracking-[0.2em] border border-[#e9ddff]/20 px-3 py-1">
                                {version.language}
                            </span>
                            <span className="material-symbols-outlined text-white text-3xl opacity-20 group-hover:opacity-100 transition-opacity">
                                download
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
                            {version.title}
                        </h3>
                        <p className="font-body text-sm text-zinc-400 font-light leading-relaxed mb-12">
                            {version.description}
                        </p>

                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const email = formData.get('email');
                                if (email) {
                                    console.log(`Lead captured: ${email}`);
                                    // Aqui você poderia enviar para um webhook/API futuramente
                                }
                                
                                // Trigger download
                                const link = document.createElement('a');
                                link.href = version.fileUrl;
                                link.download = '';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="flex flex-col gap-4"
                        >
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Seu e-mail (opcional para download)"
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-xs focus:outline-none focus:border-[#7212ff] transition-colors"
                            />
                            <button
                                type="submit"
                                className="inline-block w-full text-center font-label uppercase tracking-[0.2em] text-[10px] bg-white text-[#1a1c1c] py-4 hover:bg-[#7212ff] hover:text-white transition-all duration-700"
                            >
                                Baixar Currículo
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResumeDownloads;
