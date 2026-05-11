import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ResumeVersion } from '../../types';

const wordVariantsSingleBlink: Variants = {
    hidden: { 
        opacity: 0,
        textShadow: "0 0 0px rgba(255,255,255,0)"
    },
    visible: (index: number) => ({
        opacity: [
            0,     // Começa apagado
            0.9,   // Pisca 1 (Acende)
            0.15,  // Pisca 1 (Apaga)
            1,     // Estabiliza totalmente aceso
        ],
        textShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 15px rgba(255,255,255,0.6)",
            "0 0 2px rgba(255,255,255,0.1)",
            "0 0 12px rgba(255,255,255,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35, // Sequência de acendimento
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut" as const,
        }
    })
};

interface ResumeDownloadsProps {
    versions: ResumeVersion[];
}

const ResumeDownloads: React.FC<ResumeDownloadsProps> = ({ versions }) => {
    const [activeModal, setActiveModal] = useState<'PT' | 'EN' | 'TECH' | null>(null);
    const [capturedEmails, setCapturedEmails] = useState<{ [key: string]: string }>({});

    const activeVersion = versions.find(v => v.language === (activeModal === 'PT' ? 'PT-BR' : 'EN'));

    // Lock body scroll when any modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    const handleDownload = (language: 'PT-BR' | 'EN', email?: string) => {
        if (email) {
            console.log(`Lead captured (${language}): ${email}`);
            setCapturedEmails(prev => ({ ...prev, [language]: email }));
        }

        const version = versions.find(v => v.language === language);
        if (version) {
            const link = document.createElement('a');
            link.href = version.fileUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <section id="curriculo" className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#0e0e0e]">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center gap-8 mb-20">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Recursos</span>
                    <span className="w-12 h-[1px] bg-white/20"></span>
                </div>
                
                <motion.h2 
                    className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap justify-center gap-[0.3em]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {['DOCUMENTAÇÃO', 'TÉCNICA'].map((word, i) => (
                        <div key={i} className="relative inline-block">
                            <span className="text-outline opacity-20">{word}</span>
                            <motion.span
                                variants={wordVariantsSingleBlink}
                                custom={i}
                                className="absolute inset-0 text-white pointer-events-none"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </motion.h2>
            </div>

            {/* Premium 3-Column Grid */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {/* Resume Cards from mockData */}
                {versions.map((version) => {
                    const isPt = version.language === 'PT-BR';
                    return (
                        <div
                            key={version.id}
                            className="group relative bg-[#131313] border border-white/5 p-8 md:p-10 hover:bg-[#181818] hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
                        >
                            {/* Glowing subtle top border accent on hover */}
                            <div className="absolute left-0 top-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>

                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <span className="font-label text-[9px] text-white/80 uppercase tracking-[0.25em] border border-white/10 px-3 py-1 bg-white/[0.02]">
                                        {isPt ? 'Currículo' : 'Resume'} • {version.language}
                                    </span>
                                    <span className="material-symbols-outlined text-white/20 text-2xl group-hover:text-white transition-colors">
                                        description
                                    </span>
                                </div>

                                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-4">
                                    {version.title}
                                </h3>
                                <p className="font-body text-xs text-zinc-400 font-light leading-relaxed mb-8 min-h-[48px]">
                                    {version.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 mt-auto">
                                <button
                                    onClick={() => setActiveModal(isPt ? 'PT' : 'EN')}
                                    className="w-full text-center font-label uppercase tracking-[0.2em] text-[10px] border border-white/10 hover:border-white text-white py-3 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                >
                                    {isPt ? 'Visualizar Online' : 'View Online'}
                                </button>
                                <button
                                    onClick={() => handleDownload(version.language as 'PT-BR' | 'EN')}
                                    className="w-full text-center font-label uppercase tracking-[0.2em] text-[10px] bg-white text-[#131313] py-3 hover:bg-zinc-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer font-bold"
                                >
                                    {isPt ? 'Baixar PDF' : 'Download PDF'}
                                </button>
                            </div>
                        </div>
                    );
                })}

                {/* Technical Summary (Tech Summary) Card */}
                <div className="group relative bg-[#131313] border border-white/5 p-8 md:p-10 hover:bg-[#181818] hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
                    {/* Glowing subtle top border accent on hover */}
                    <div className="absolute left-0 top-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>

                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <span className="font-label text-[9px] text-white/80 uppercase tracking-[0.25em] border border-white/10 px-3 py-1 bg-white/[0.02]">
                                Engineering • TECH
                            </span>
                            <span className="material-symbols-outlined text-white/20 text-2xl group-hover:text-white transition-colors">
                                terminal
                            </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-4">
                            Ficha Técnica
                        </h3>
                        <p className="font-body text-xs text-zinc-400 font-light leading-relaxed mb-8 min-h-[48px]">
                            Painel interativo contendo padrões de arquitetura, metodologias ágeis, proficiências e métricas obtidas.
                        </p>
                    </div>

                    <button
                        onClick={() => setActiveModal('TECH')}
                        className="w-full text-center font-label uppercase tracking-[0.2em] text-[10px] bg-white text-[#131313] py-4 hover:bg-zinc-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 mt-auto cursor-pointer font-bold"
                    >
                        Ver Ficha Técnica
                    </button>
                </div>
            </div>

            {/* Modal Overlay and System */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div 
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="bg-[#111111] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative p-6 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button Top Right */}
                            <button 
                                onClick={() => setActiveModal(null)}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer w-10 h-10 flex items-center justify-center border border-white/5 hover:border-white/20"
                                aria-label="Fechar modal"
                            >
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>

                            {/* Modal Header Actions */}
                            <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8 pr-12">
                                <div>
                                    <h4 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                                        {activeModal === 'PT' && 'Visualizador de Currículo (PT-BR)'}
                                        {activeModal === 'EN' && 'Resume Online Viewer (EN-US)'}
                                        {activeModal === 'TECH' && 'Ficha Técnica do Engenheiro'}
                                    </h4>
                                    <p className="font-body text-xs text-zinc-500 uppercase tracking-widest mt-1">
                                        {activeModal === 'TECH' ? 'engineering datasheet // v2026.1' : 'interactive pdf-preview alternative'}
                                    </p>
                                </div>

                                {/* Download option in Resume modals */}
                                {activeModal !== 'TECH' && (
                                    <form 
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const formData = new FormData(e.currentTarget);
                                            const email = formData.get('email') as string;
                                            handleDownload(activeModal === 'PT' ? 'PT-BR' : 'EN', email);
                                        }}
                                        className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto"
                                    >
                                        <input 
                                            type="email" 
                                            name="email"
                                            defaultValue={capturedEmails[activeModal === 'PT' ? 'PT-BR' : 'EN'] || ''}
                                            placeholder={activeModal === 'PT' ? "Seu e-mail (opcional)" : "Your email (optional)"}
                                            className="bg-white/5 border border-white/10 px-4 py-2.5 text-white font-body text-[11px] focus:outline-none focus:border-white transition-all w-full sm:w-56"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-white text-black font-label text-[10px] uppercase tracking-wider font-bold px-6 py-2.5 hover:bg-zinc-200 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-sm">download</span>
                                            {activeModal === 'PT' ? 'Baixar PDF' : 'Download PDF'}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Modal Body Content */}
                            <div className="text-zinc-300 font-body text-sm leading-relaxed max-w-4xl mx-auto">
                                               {/* RESUME PDF INLINE EMBED (PT & EN) */}
                                {(activeModal === 'PT' || activeModal === 'EN') && activeVersion && (
                                    <div className="w-full h-[65vh] bg-[#141414] border border-white/5 relative flex flex-col items-center justify-center overflow-hidden">
                                        <iframe
                                            src={`${activeVersion.fileUrl}#toolbar=0&navpanes=0`}
                                            className="w-full h-full bg-[#141414]"
                                            title={activeVersion.title}
                                        />
                                        {/* Fallback Banner inside the visualizer */}
                                        <div className="absolute bottom-4 inset-x-4 bg-[#1e1e1e]/95 backdrop-blur-md border border-white/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
                                            <div className="text-left">
                                                <h6 className="text-white text-xs font-bold uppercase tracking-wider">
                                                    {activeModal === 'PT' ? 'Visualizador Incorporado' : 'Embedded PDF Viewer'}
                                                </h6>
                                                <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed">
                                                    {activeModal === 'PT' 
                                                        ? 'Exibindo estrutura em PDF. Certifique-se de realizar o upload do arquivo para a pasta correspondente no projeto.' 
                                                        : 'Displaying PDF structure. Make sure to upload the PDF file to the corresponding folder in your project.'}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleDownload(activeModal === 'PT' ? 'PT-BR' : 'EN')}
                                                className="bg-white text-black font-label text-[9px] uppercase tracking-wider font-bold px-4 py-2 hover:bg-zinc-200 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
                                            >
                                                <span className="material-symbols-outlined text-xs">download</span>
                                                {activeModal === 'PT' ? 'Baixar PDF' : 'Download PDF'}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* 3. TECHNICAL SUMMARY (FICHA TÉCNICA) */}
                                {activeModal === 'TECH' && (
                                    <div className="flex flex-col gap-8 py-4 font-body text-zinc-300">
                                        {/* Skill Bars Proficiencies */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.02] border border-white/5 p-6 md:p-8">
                                            <div>
                                                <h5 className="font-display text-white text-xs uppercase tracking-widest mb-6">Proficiência de Stack Principal</h5>
                                                
                                                <div className="flex flex-col gap-4">
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1 font-label">
                                                            <span className="text-white font-bold">TypeScript / React / Next.js</span>
                                                            <span className="text-zinc-400">95%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-white/5 w-full">
                                                            <div className="h-full bg-white" style={{ width: '95%' }}></div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1 font-label">
                                                            <span className="text-white font-bold">Angular (RxJS / Signals)</span>
                                                            <span className="text-zinc-400">85%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-white/5 w-full">
                                                            <div className="h-full bg-white/80" style={{ width: '85%' }}></div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1 font-label">
                                                            <span className="text-white font-bold">Python (FastAPI / Pandas / AI Integrations)</span>
                                                            <span className="text-zinc-400">80%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-white/5 w-full">
                                                            <div className="h-full bg-white/60" style={{ width: '80%' }}></div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1 font-label">
                                                            <span className="text-white font-bold">Databases (SQL & NoSQL) / API Design</span>
                                                            <span className="text-zinc-400">75%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-white/5 w-full">
                                                            <div className="h-full bg-white/40" style={{ width: '75%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="font-display text-white text-xs uppercase tracking-widest mb-6">Métricas & Impacto em Projetos</h5>
                                                
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="border border-white/5 bg-white/[0.01] p-4 flex flex-col justify-between h-24">
                                                        <span className="font-display text-white text-2xl font-black tracking-tight leading-none">98+</span>
                                                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-label leading-tight">Lighthouse score (Perf/Aces)</span>
                                                    </div>
                                                    <div className="border border-white/5 bg-white/[0.01] p-4 flex flex-col justify-between h-24">
                                                        <span className="font-display text-white text-2xl font-black tracking-tight leading-none">-45%</span>
                                                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-label leading-tight">Tempo de Build Otimizado</span>
                                                    </div>
                                                    <div className="border border-white/5 bg-white/[0.01] p-4 flex flex-col justify-between h-24">
                                                        <span className="font-display text-white text-2xl font-black tracking-tight leading-none">80%</span>
                                                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-label leading-tight">Redução em Rotinas manuais via ETL</span>
                                                    </div>
                                                    <div className="border border-white/5 bg-white/[0.01] p-4 flex flex-col justify-between h-24">
                                                        <span className="font-display text-white text-2xl font-black tracking-tight leading-none">&gt;85%</span>
                                                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-label leading-tight">Cobertura de Testes Unitários</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Comprehensive Software Engineering Architecture Blocks */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
                                            {/* Block 1: Architecture */}
                                            <div className="border border-white/5 p-6 bg-white/[0.01] flex flex-col gap-3">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-white text-xl">grid_view</span>
                                                    <h6 className="font-display text-white text-xs uppercase tracking-widest font-bold">Arquitetura de Software</h6>
                                                </div>
                                                <ul className="text-xs text-zinc-400 flex flex-col gap-2 list-disc pl-4 font-light leading-relaxed">
                                                    <li><strong>Clean Architecture / DDD:</strong> Rigorosa separação de responsabilidades. Domínio isolado sem dependências de frameworks.</li>
                                                    <li><strong>SOLID Principles:</strong> Design resiliente e desacoplado facilitando extensão sem quebra de código.</li>
                                                    <li><strong>Unidirectional Data Flow:</strong> Gerenciamento previsível de estados locais e globais (Zustand, RxJS, Context API).</li>
                                                </ul>
                                            </div>

                                            {/* Block 2: Quality & Practices */}
                                            <div className="border border-white/5 p-6 bg-white/[0.01] flex flex-col gap-3">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-white text-xl">verified</span>
                                                    <h6 className="font-display text-white text-xs uppercase tracking-widest font-bold">Práticas & Qualidade</h6>
                                                </div>
                                                <ul className="text-xs text-zinc-400 flex flex-col gap-2 list-disc pl-4 font-light leading-relaxed">
                                                    <li><strong>TDD (Test-Driven Development):</strong> Red-Green-Refactor como pilar central de integridade lógica (Jest, RTL, Vitest).</li>
                                                    <li><strong>CI/CD Integrado:</strong> Automatizações de linting, testes de regressão e deploy contínuo em ambientes (GitHub Actions).</li>
                                                    <li><strong>Semantic Release / GitFlow:</strong> Rastreabilidade de commits com mensagens convencionais e controle rígido de versões.</li>
                                                </ul>
                                            </div>

                                            {/* Block 3: Engineering Mindset */}
                                            <div className="border border-white/5 p-6 bg-white/[0.01] flex flex-col gap-3">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-white text-xl">psychology</span>
                                                    <h6 className="font-display text-white text-xs uppercase tracking-widest font-bold">Especialidades de IA & Dados</h6>
                                                </div>
                                                <ul className="text-xs text-zinc-400 flex flex-col gap-2 list-disc pl-4 font-light leading-relaxed">
                                                    <li><strong>Agentes de IA e Pipelines:</strong> Integração fluida de APIs generativas (OpenAI, Gemini) com controle refinado de prompts contextuais.</li>
                                                    <li><strong>Automação & Processamento (ETL):</strong> Pipelines robustos em Python (Pandas/Requests) para ingestão e estruturação analítica de dados.</li>
                                                    <li><strong>SEO & Performance Web:</strong> Otimização extrema de bundling, lazying e acessibilidade estrutural (W3C/WCAG).</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex justify-center mt-4">
                                            <button
                                                onClick={() => setActiveModal(null)}
                                                className="font-label uppercase tracking-widest text-[10px] text-black bg-white px-8 py-3.5 hover:bg-zinc-200 transition-all cursor-pointer font-bold"
                                            >
                                                Fechar Ficha Técnica
                                            </button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ResumeDownloads;
