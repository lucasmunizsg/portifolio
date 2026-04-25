import React from 'react';
import { Profile } from '../types';

interface HeroProps {
    profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
    // Split the role into parts for the cinematic layout
    const roleParts = profile.role.toUpperCase().split(' ');
    
    return (
        <section id="work" className="relative min-h-screen overflow-hidden pt-32 md:pt-60 pb-32 px-6 md:px-12 max-w-[1920px] mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-30"></div>
                <div className="prism-leak absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-40"></div>
                <div className="prism-leak absolute bottom-[10%] left-[-10%] w-[800px] h-[800px] opacity-20" style={{ background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%)' }}></div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Available for 2024 Projects</span>
                </div>
                
                <h1 className="font-display font-black text-[12vw] leading-[0.85] tracking-tighter flex flex-col items-start">
                    {roleParts.map((part, index) => (
                        <span 
                            key={index} 
                            className={`${index % 2 === 1 ? 'text-outline hover:text-white transition-all duration-1000 cursor-default' : 'text-white hero-glow'}`}
                        >
                            {part}
                        </span>
                    ))}
                </h1>

                <p className="mt-8 font-display text-xl md:text-3xl font-light tracking-tight text-[#e9ddff]/80">
                    Desenvolvedor <span className="text-white">(/melhorador de ideias)</span> de Software <span className="text-white">(/ideias)</span>
                </p>
            </div>

            {/* Technical Metadata Strip */}
            <div className="relative z-10 mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
                <div className="flex flex-col gap-4">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">About</h4>
                    <p className="font-body text-sm font-light text-[#e2e2e2] leading-relaxed max-w-xs">
                        {profile.bio}
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Location</h4>
                    <p className="font-body text-sm font-light text-[#e2e2e2]">Based in Brazil / Global</p>
                </div>
                <div className="flex flex-col gap-4 md:col-span-2">
                    <h4 className="font-label uppercase tracking-[0.2em] text-xs text-zinc-500">Technologies</h4>
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
