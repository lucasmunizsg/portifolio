import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Profile, SocialLink } from '../../types';

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

interface ContactSectionProps {
    profile: Profile;
    socials: SocialLink[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ profile, socials }) => {
    return (
        <footer id="contact" className="w-full py-24 px-6 md:px-12 bg-[#131313] border-t border-white/5 overflow-hidden relative">
            {/* Subtle prism leak for the footer */}
            <div className="prism-leak absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] opacity-10"></div>

            <div className="relative z-10 flex flex-col gap-24 w-full max-w-[1920px] mx-auto">
                <div className="text-left w-full">
                    {/* 
                      Implementação do efeito de acendimento neon único (single blink).
                      Solicitação atendida: apenas o título está centralizado (justify-center),
                      enquanto o container do contato (e-mail) continua à esquerda.
                    */}
                    <motion.h2 
                        className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 flex flex-wrap justify-center gap-[0.3em]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        {['ENTRE', 'NESSA', 'JORNADA'].map((word, i) => (
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
                    {/* 
                      Centralização dos canais de contato com ícones SVGs customizados.
                      O endereço de e-mail textual foi removido e substituído por botões em formato
                      de círculos com efeitos de glassmorphism e brilho neon no hover, dispostos lado a lado.
                    */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        {/* E-mail (com ícone) */}
                        <a
                            href={`mailto:${profile.email}`}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/5 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] text-zinc-400 hover:text-white transition-all duration-300"
                            aria-label="E-mail"
                            title={profile.email}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </a>

                        {/* GitHub */}
                        {socials.find(s => s.platform.toLowerCase() === 'github') && (
                            <a
                                href={socials.find(s => s.platform.toLowerCase() === 'github')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/5 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] text-zinc-400 hover:text-white transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                                </svg>
                            </a>
                        )}

                        {/* LinkedIn */}
                        {socials.find(s => s.platform.toLowerCase() === 'linkedin') && (
                            <a
                                href={socials.find(s => s.platform.toLowerCase() === 'linkedin')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/5 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] text-zinc-400 hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect width="4" height="12" x="2" y="9"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
                    <div className="text-sm font-bold text-white font-headline tracking-tighter">
                        {profile.name.toUpperCase()}
                    </div>

                    {/* 
                      Solicitação atendida: As versões antigas textuais do GitHub e LinkedIn do rodapé inferior foram removidas, 
                      mantendo apenas o nome do perfil e os direitos autorais.
                    */}
                    <div className="text-[10px] font-body font-light tracking-[0.05em] uppercase text-zinc-600">
                        © {new Date().getFullYear()} {profile.name.toUpperCase()}. ENGENHARIA NO PROCESSO.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
