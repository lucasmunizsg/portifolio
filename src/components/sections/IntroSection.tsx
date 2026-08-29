import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Profile, SocialLink, ResumeVersion } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

// Efeito de acendimento (single blink) do título final "Faça Parte Dessa Jornada", em branco
const wordVariantsWhiteSingleBlink: Variants = {
    hidden: {
        opacity: 0,
        textShadow: "0 0 0px rgba(255,255,255,0)"
    },
    visible: (index: number) => ({
        opacity: [0, 0.9, 0.15, 1],
        textShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 15px rgba(255,255,255,0.6)",
            "0 0 2px rgba(255,255,255,0.1)",
            "0 0 12px rgba(255,255,255,0.4)"
        ],
        transition: {
            duration: 0.6,
            delay: index * 0.35,
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut" as const,
        }
    })
};

interface IntroSectionProps {
    profile: Profile;
    socials: SocialLink[];
    versions: ResumeVersion[];
}

/**
 * Seção Inicial unificada: apresentação de perfil (foto + nome/cargo) e os cards
 * de Documentação Técnica lado a lado, seguidos pela chamada final "Faça Parte
 * Dessa Jornada" com os ícones de contato. Fica no topo da página, acima do Hero
 * (título animado grande), e absorve o que antes eram os componentes separados
 * ResumeDownloads e ContactSection.
 */
const IntroSection: React.FC<IntroSectionProps> = ({ profile, socials, versions }) => {
    const { t } = useLanguage();
    const [activeModal, setActiveModal] = useState<'TECH' | null>(null);
    const [emails, setEmails] = useState<{ [key: string]: string }>({});

    // Trava o scroll do body quando o modal de Ficha Técnica está aberto
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

    // Regex simples para validar o formato do e-mail antes de disparar a notificação
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleDownload = (language: 'PT-BR' | 'EN', email?: string) => {
        const trimmedEmail = email?.trim();
        if (trimmedEmail && EMAIL_REGEX.test(trimmedEmail)) {
            // Envia um aviso por e-mail (via função serverless + Resend) sem bloquear o download
            // em caso de falha na notificação
            fetch('/api/notify-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmedEmail, language })
            }).catch((error) => {
                console.error('Falha ao notificar novo lead:', error);
            });
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
        <section id="contact" className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
            {/* Subtle prism leak, mantido do antigo ContactSection */}
            <div className="prism-leak absolute top-[-10%] right-[-10%] w-[400px] h-[400px] opacity-10"></div>

            {/* Duas colunas lado a lado: apresentação (esquerda) + documentação técnica compacta (direita) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(220px,1fr)_auto_2fr] gap-10 md:gap-12 items-stretch">
                {/*
                  Coluna esquerda: nome/cargo, centralizados (retângulo reservado para a foto de
                  perfil removido a pedido do usuário; texto complementar "outras maneiras..."
                  também removido). Cargo ("Desenvolvedor de Software") agora em vermelho.
                */}
                <div className="flex flex-col items-center text-center gap-4 justify-center">
                    <div>
                        <h1 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
                            {profile.name}
                        </h1>
                        <p className="font-label text-xs md:text-sm text-[#ef4444] uppercase tracking-[0.15em] mt-2">
                            {profile.role}
                        </p>
                    </div>
                </div>

                {/* Divisor vertical leve e sutil entre as duas colunas */}
                <div className="hidden md:block w-px bg-white/20 self-stretch"></div>

                {/* Coluna direita: cards de Documentação Técnica, em escala compacta */}
                <div className="w-full flex flex-col justify-center">
                    {/*
                      Título "Documentação Técnica" com o efeito neon (single blink) igual ao
                      das demais seções, porém em fonte reduzida — começa alinhado ao primeiro
                      card (Currículo) e termina antes do fim do card de Ficha Técnica, já que
                      ocupa a mesma largura da coluna dos cards.
                    */}
                    <motion.h3
                        className="font-display text-lg md:text-2xl font-black uppercase tracking-tight flex flex-wrap gap-[0.15em] mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        {(t('resumes.title') as string[]).map((word, i) => (
                            <div key={i} className="relative inline-block">
                                <span className="text-outline opacity-20">{word}</span>
                                <motion.span
                                    variants={wordVariantsWhiteSingleBlink}
                                    custom={i}
                                    className="absolute inset-0 text-white pointer-events-none"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {versions.map((version) => {
                            const currentEmail = emails[version.language] || '';

                            return (
                                <div
                                    key={version.id}
                                    className="group relative bg-[#131313] border border-white/5 p-4 hover:bg-[#181818] hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="font-label text-[8px] text-white/70 uppercase tracking-[0.2em] border border-white/10 px-2 py-0.5 bg-white/[0.02]">
                                            {t('resumes.resumeLabel')} • {version.language}
                                        </span>
                                        <h3 className="font-display text-xs font-bold text-white uppercase tracking-tight mt-3 mb-1">
                                            {version.title}
                                        </h3>
                                    </div>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleDownload(version.language as 'PT-BR' | 'EN', currentEmail);
                                        }}
                                        className="flex flex-col gap-2 mt-3"
                                    >
                                        <input
                                            type="email"
                                            placeholder={t('resumes.emailPlaceholder')}
                                            value={currentEmail}
                                            onChange={(e) => handleEmailChange(version.language, e.target.value)}
                                            className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 px-2.5 py-2 text-white font-body text-[10px] focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full text-center font-label uppercase tracking-[0.15em] text-[9px] bg-white text-[#131313] py-2 hover:bg-zinc-200 transition-all duration-300 cursor-pointer font-bold flex items-center justify-center gap-1.5"
                                        >
                                            <span className="material-symbols-outlined text-xs">download</span>
                                            {t('resumes.downloadButton')}
                                        </button>
                                    </form>
                                </div>
                            );
                        })}

                        {/* Card compacto de Ficha Técnica (Technical Summary) */}
                        <div className="group relative bg-[#131313] border border-white/5 p-4 hover:bg-[#181818] hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <span className="font-label text-[8px] text-white/70 uppercase tracking-[0.2em] border border-white/10 px-2 py-0.5 bg-white/[0.02]">
                                    Engineering • TECH
                                </span>
                                <h3 className="font-display text-xs font-bold text-white uppercase tracking-tight mt-3 mb-1">
                                    {t('resumes.techSummary.title')}
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveModal('TECH')}
                                className="w-full text-center font-label uppercase tracking-[0.15em] text-[9px] bg-white text-[#131313] py-2 hover:bg-zinc-200 transition-all duration-300 mt-3 cursor-pointer font-bold flex items-center justify-center gap-1.5"
                            >
                                <span className="material-symbols-outlined text-xs">visibility</span>
                                {t('resumes.techSummary.viewButton')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*
              Separador geométrico animado (setas/chevrons), subido para ficar logo abaixo da
              linha divisória entre nome e Documentação Técnica (pouco espaço acima), em vez de
              colado no título "Faça Parte Dessa Jornada". Duas faixas finas empilhadas, cada
              uma deslizando em sentido oposto (superior -> direita, inferior -> esquerda), de
              ponta a ponta da tela.
            */}
            <div className="relative left-1/2 -translate-x-1/2 w-screen mt-6 flex flex-col" aria-hidden="true">
                <div className="chevron-strip chevron-strip-right h-2 w-full"></div>
                <div className="chevron-strip chevron-strip-left h-2 w-full"></div>
            </div>

            {/* Rodapé da seção: chamada final centralizada + ícones de contato */}
            <div className="relative z-10 flex flex-col items-center gap-8 mt-12">
                {/*
                  Título com maior peso e destaque visual (aumentado em relação ao tamanho
                  anterior), já que agora ocupa a linha toda, centralizado, sem dividir
                  espaço com o nome/cargo.
                */}
                <motion.h2
                    className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter flex flex-wrap justify-center gap-[0.25em]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {(t('contact.title') as string[]).map((word, i) => (
                        <div key={i} className="relative inline-block">
                            <span className="text-outline opacity-20">{word}</span>
                            <motion.span
                                variants={wordVariantsWhiteSingleBlink}
                                custom={i}
                                className="absolute inset-0 text-white pointer-events-none"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </motion.h2>

                {/*
                  Ícones de contato de volta à proporção original (56px / ícones 22px / gap-6),
                  desfazendo a redução de tamanho aplicada anteriormente.
                */}
                <div className="flex justify-center items-center gap-6">
                    {/* E-mail */}
                    <a
                        href={`mailto:${profile.email}`}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/10 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] text-zinc-400 hover:text-white transition-all duration-300"
                        aria-label="E-mail"
                        title={profile.email}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    {socials.find(s => s.platform.toLowerCase() === 'github') && (
                        <a
                            href={socials.find(s => s.platform.toLowerCase() === 'github')?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/10 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] text-zinc-400 hover:text-white transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    )}

                    {/* LinkedIn */}
                    {socials.find(s => s.platform.toLowerCase() === 'linkedin') && (
                        <a
                            href={socials.find(s => s.platform.toLowerCase() === 'linkedin')?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/10 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] text-zinc-400 hover:text-white transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    )}

                    {/* WhatsApp / Telefone */}
                    {profile.phone && (
                        <a
                            href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/10 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] text-zinc-400 hover:text-white transition-all duration-300"
                            aria-label="WhatsApp"
                            title={profile.phone}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Modal da Ficha Técnica (mantido igual ao ResumeDownloads original) */}
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

export default IntroSection;
