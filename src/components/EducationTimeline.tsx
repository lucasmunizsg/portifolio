import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Education } from '../types';
import BeamLine from './BeamLine';

interface EducationTimelineProps {
    education: Education[];
}

const EducationItem: React.FC<{
    study: Education;
    index: number;
    isActive: boolean;
    onClick: () => void;
}> = ({ study, index, isActive, onClick }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, { margin: "-50% 0px", once: false });

    return (
        <div 
            ref={itemRef}
            className={`group relative flex flex-col w-full ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}
        >
            {/* Dot on Timeline */}
            <div className={`absolute left-4 md:left-1/2 top-0 w-3 h-3 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-2 transition-all duration-500 z-30 ${
                isInView ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-125' : 'bg-[#0e0e0e] border-zinc-600'
            } ${isActive ? 'scale-150' : 'group-hover:scale-150'}`}></div>

            {/* Connection Line from Timeline to Card (Desktop) */}
            <motion.div 
                className={`hidden md:block absolute top-[5px] h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-20 ${index % 2 === 0 ? 'origin-right' : 'origin-left'}`}
                style={{ 
                    left: index % 2 === 0 ? '46%' : '50%', 
                    width: '4%' 
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Connection Line from Timeline to Card (Mobile) */}
            <motion.div 
                className={`block md:hidden absolute top-[5px] left-4 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-20 origin-left`}
                style={{ width: 'calc(2rem - 6px)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />

            <div onClick={onClick} className={`w-[calc(100%-2rem)] ml-8 md:ml-0 md:w-[46%] p-10 bg-[#131313]/80 backdrop-blur-md border cursor-pointer transition-all duration-700 relative overflow-hidden ${
                isActive ? 'border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)] scale-[1.01]' : 'border-white/5 hover:border-cyan-400/30'
            } ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                
                {/* Decorative Background Icon */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                    <span className="material-symbols-outlined text-8xl text-white">school</span>
                </div>

                <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="font-label text-[10px] text-cyan-400 uppercase tracking-[0.2em] font-bold">
                                {study.year}
                            </span>
                            <span className={`px-2 py-0.5 text-[8px] uppercase tracking-[0.2em] border ${
                                study.status === 'Prêmio' ? 'text-[#ffd700] border-[#ffd700]/20 bg-[#ffd700]/5' : 'text-zinc-500 border-white/10 bg-white/5'
                            }`}>
                                {study.status}
                            </span>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-cyan-50 transition-all duration-500">
                            {study.course}
                        </h3>
                        <h4 className="font-label text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">
                            {study.institution}
                        </h4>
                    </div>
                </div>

                {/* Hover Border Accent */}
                <div className="absolute left-0 top-0 w-[2px] h-0 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] group-hover:h-full transition-all duration-700"></div>
            </div>
        </div>
    );
};

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
            <BeamLine containerRef={containerRef} color="bg-cyan-400" glowColor="rgba(34,211,238,0.8)" />
            
            <div className="flex flex-col gap-24 relative">
                {education.map((study, index) => (
                    <EducationItem
                        key={study.id}
                        study={study}
                        index={index}
                        isActive={activeId === study.id}
                        onClick={() => setActiveId(activeId === study.id ? null : study.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationTimeline;

