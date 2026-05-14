import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ResumeVersion } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

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
    const { t } = useLanguage();
    const [activeModal, setActiveModal] = useState<'TECH' | null>(null);
    const [emails, setEmails] = useState<{ [key: string]: string }>({});

    // Lock body scroll when the TECH modal is open
    useEffect(() => {
        if (activeModal === 'TECH') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    const handleEmailChange = (lang: string, value: string) => {
        setEmails(prev => ({ ...prev, [lang]: value }));
    };

    const handleDownload = (language: 'PT-BR' | 'EN', email?: string) => {
        if (email && email.trim() !== '') {
            console.log(`Lead captured (${language}): ${email}`);
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
        <section className="pt-24 pb-4 md:pt-32 md:pb-6 px-6 md:px-12 max-w-[1920px] mx-auto bg-transparent">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center gap-8 mb-20">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">{t('resumes.subtitle')}</span>
                    <span className="w-12 h-[1px] bg-white/20"></span>
                </div>
                
                <motion.h2 
                    className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter flex flex-wrap justify-center gap-[0.3em]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {(t('resumes.title') as string[]).map((word, i) => (
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
                    const currentEmail = emails[version.language] || '';

                    return (
                        <div
                            key={version.id}
                            className="group relative bg-[#131313] border border-white/5 p-8 md:p-10 hover:bg-[#181818] hover:border-white/20 transition-all duration-500 flex flex-col justify-between min-h-[380px]"
                        >
                            {/* Glowing subtle top border accent on hover */}
                            <div className="absolute left-0 top-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>

                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <span className="font-label text-[9px] text-white/80 uppercase tracking-[0.25em] border border-white/10 px-3 py-1 bg-white/[0.02]">
                                        {t('resumes.resumeLabel')} • {version.language}
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

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleDownload(version.language as 'PT-BR' | 'EN', currentEmail);
                                }}
                                className="flex flex-col gap-4 mt-auto"
                            >
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        placeholder={t('resumes.emailPlaceholder')}
                                        value={currentEmail}
                                        onChange={(e) => handleEmailChange(version.language, e.target.value)}
                                        className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 px-4 py-3 text-white font-body text-xs focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[8px] text-zinc-500 font-label uppercase tracking-widest pointer-events-none">
                                        {t('resumes.optional')}
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-center font-label uppercase tracking-[0.2em] text-[10px] bg-white text-[#131313] py-3.5 hover:bg-zinc-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer font-bold flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">download</span>
                                    {t('resumes.downloadButton')}
                                </button>
                            </form>
                        </div>
                    );
                })}

                {/* Technical Summary (Tech Summary) Card */}
                <div className="group relative bg-[#131313] border border-white/5 p-8 md:p-10 hover:bg-[#181818] hover:border-white/20 transition-all duration-500 flex flex-col justify-between min-h-[380px]">
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
                            {t('resumes.techSummary.title')}
                        </h3>
                        <p className="font-body text-xs text-zinc-400 font-light leading-relaxed mb-8 min-h-[48px]">
                            {t('resumes.techSummary.description')}
                        </p>
                    </div>

                    <button
                        onClick={() => setActiveModal('TECH')}
                        className="w-full text-center font-label uppercase tracking-[0.2em] text-[10px] bg-white text-[#131313] py-4 hover:bg-zinc-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 mt-auto cursor-pointer font-bold flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        {t('resumes.techSummary.viewButton')}
                    </button>
                </div>
            </div>

            {/* Modal Overlay and System */}
            <AnimatePresence>
                {activeModal === 'TECH' && (
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
                                        {t('resumes.techSummary.modalTitle')}
                                    </h4>
                                    <p className="font-body text-xs text-zinc-500 uppercase tracking-widest mt-1">
                                        engineering datasheet // v2026.1
                                    </p>
                                </div>
                            </div>

                            {/* Modal Body Content */}
                            <div className="text-zinc-300 font-body text-sm leading-relaxed max-w-4xl mx-auto">
                                <div className="flex flex-col gap-8 py-4 font-body text-zinc-300">
                                    {/* Skill Bars Proficiencies */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.02] border border-white/5 p-6 md:p-8">
                                        <div>
                                            <h5 className="font-display text-white text-xs uppercase tracking-widest mb-6">{t('resumes.techSummary.stackProficiency')}</h5>
                                            
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
                                            <h5 className="font-display text-white text-xs uppercase tracking-widest mb-6">{t('resumes.techSummary.metricsImpact')}</h5>
                                            
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
                                                <h6 className="font-display text-white text-xs uppercase tracking-widest font-bold">{t('resumes.techSummary.architecture')}</h6>
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
                                                <h6 className="font-display text-white text-xs uppercase tracking-widest font-bold">{t('resumes.techSummary.quality')}</h6>
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
                                                <h6 className="font-display text-white text-xs uppercase tracking-widest font-bold">{t('resumes.techSummary.specialties')}</h6>
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
                                            {t('resumes.techSummary.closeButton')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ResumeDownloads;
