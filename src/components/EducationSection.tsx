import React from 'react';
import { Education } from '../types';
import EducationTimeline from './EducationTimeline';

interface EducationSectionProps {
    studies: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ studies }) => {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1920px] mx-auto bg-[#0e0e0e]">
            <div className="flex flex-col items-center text-center gap-8 mb-32">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Education</span>
                    <span className="w-12 h-[1px] bg-white/20"></span>
                </div>
                <h2 className="font-display text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                    Academic <br />
                    <span className="text-outline">Path</span>
                </h2>
            </div>
            
            <EducationTimeline education={studies} />
        </section>
    );
};

export default EducationSection;
