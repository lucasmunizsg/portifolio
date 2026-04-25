import React from 'react';
import { Profile, SocialLink } from '../types';

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
                <div className="text-center">
                    <h2 className="font-display text-4xl md:text-8xl font-black text-white tracking-tighter mb-12 leading-none uppercase">
                        Vamos Desenhar <span className="text-outline">Atmosferas</span>
                    </h2>
                    <a 
                        href={`mailto:${profile.email}`}
                        className="font-label text-xl md:text-3xl font-light text-zinc-500 hover:text-white transition-all duration-700 underline underline-offset-8 decoration-white/10 hover:decoration-white"
                    >
                        {profile.email}
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
                    <div className="text-sm font-bold text-white font-headline tracking-tighter">
                        {profile.name.toUpperCase()}
                    </div>
                    
                    <div className="text-[10px] font-body font-light tracking-[0.05em] uppercase text-zinc-600 order-3 md:order-2">
                        © {new Date().getFullYear()} {profile.name.toUpperCase()}. ENGENHARIA NO VAZIO.
                    </div>
                    
                    <div className="flex gap-8 order-2 md:order-3">
                        {socials.map((social) => (
                            <a 
                                key={social.id}
                                className="text-[10px] font-body font-light tracking-[0.05em] uppercase text-zinc-600 hover:text-white transition-colors duration-300" 
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.platform}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
