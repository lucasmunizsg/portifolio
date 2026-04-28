import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Profile } from '../types';
import SplitFlap from './SplitFlap';

interface HeroProps {
    profile: Profile;
}

const titles = [
    ["MELHORADOR DE", "IDEIAS"],
    ["DESENVOLVEDOR DE", "IDEIAS"],
    ["DESENVOLVEDOR DE", "SOFTWARE"]
];

const Hero: React.FC<HeroProps> = ({ profile }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 8000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="work" className="relative min-h-screen overflow-hidden pt-32 md:pt-60 pb-32 px-6 md:px-12 max-w-[1920px] mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-30"></div>
                <div className="prism-leak absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-40"></div>
                <div className="prism-leak absolute bottom-[10%] left-[-10%] w-[800px] h-[800px] opacity-20" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }}></div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                    <motion.span 
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-[1px] bg-white/20"
                    ></motion.span>
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500"
                    >
                        Disponível para Projetos 2024
                    </motion.span>
                </div>
                
                <div className="mt-8">
                    <SplitFlap lines={titles[index]} />
                </div>
            </div>

            {/* Technical Metadata Strip */}
            <div className="relative z-10 mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
                <div className="flex flex-col gap-4">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Sobre</h4>
                    <p className="font-body text-sm font-light text-[#e2e2e2] leading-relaxed max-w-xs">
                        {profile.bio}
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Localização</h4>
                    <p className="font-body text-sm font-light text-[#e2e2e2]">Sediado no Brasil / Global</p>
                </div>
                <div className="flex flex-col gap-4 md:col-span-2">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Tecnologias</h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {['React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-[#1b1b1b] text-[10px] uppercase tracking-widest text-zinc-400 border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
