import React from 'react';
import { Project } from '../types';

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <section id="work" className="relative px-6 md:px-12 py-32 max-w-[1920px] mx-auto bg-[#0e0e0e]">
            <div className="grid grid-cols-12 gap-8">
                {/* Large Feature Card - First Project */}
                {projects[0] && (
                    <div className="col-span-12 md:col-span-8 group relative aspect-video bg-[#131313] overflow-hidden border border-white/5">
                        <img 
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" 
                            src="/img1.png" 
                            alt={projects[0].title} 
                        />
                        <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12">
                            <span className="font-label text-[10px] text-[#e9ddff] uppercase tracking-widest mb-4 block">Case Study 01</span>
                            <h3 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">
                                {projects[0].title}
                            </h3>
                        </div>
                        <div className="absolute top-8 md:top-12 right-8 md:right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="material-symbols-outlined text-white text-3xl md:text-4xl">arrow_outward</span>
                        </div>
                    </div>
                )}

                {/* Technical Specs Card */}
                <div className="col-span-12 md:col-span-4 bg-[#1f1f1f] border border-white/5 p-8 md:p-12 flex flex-col justify-between">
                    <div className="flex flex-col gap-6">
                        <span className="material-symbols-outlined text-[#7212ff] text-3xl">terminal</span>
                        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">Stack Architecture</h3>
                        <p className="font-body text-zinc-400 text-sm leading-relaxed">
                            Engineered with high-fidelity performance at the core. Utilizing React, TypeScript, and modern engineering patterns for cinematic rendering.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-12">
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="font-label text-[10px] text-zinc-500 uppercase tracking-widest">Frontend Engineering</span>
                            <span className="font-label text-xs text-white">100%</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="font-label text-[10px] text-zinc-500 uppercase tracking-widest">Performance Optimization</span>
                            <span className="font-label text-xs text-white">96%</span>
                        </div>
                    </div>
                </div>

                {/* Smaller Grid Items - Other Projects */}
                {projects.slice(1).map((project, index) => (
                    <div key={project.id} className="col-span-12 md:col-span-4 group aspect-square bg-[#2a2a2a] relative overflow-hidden border border-white/5">
                        <img 
                            className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0" 
                            src={index % 2 === 0 ? "/img2.png" : "/img3.png"} 
                            alt={project.title} 
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="font-label text-[8px] text-[#e9ddff] uppercase tracking-widest mb-2 block">Project 0{index + 2}</span>
                            <h4 className="font-display text-xl font-bold text-white uppercase tracking-tighter">
                                {project.title}
                            </h4>
                        </div>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white text-2xl">link</span>
                        </a>
                    </div>
                ))}
                
                {/* View Archive Placeholder */}
                <div className="col-span-12 md:col-span-4 flex items-center justify-center border border-dashed border-white/10 group hover:bg-white/5 transition-colors cursor-pointer aspect-square">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#e9ddff] transition-colors">
                            <span className="material-symbols-outlined text-white group-hover:text-[#e9ddff]">add</span>
                        </div>
                        <span className="font-label text-[10px] uppercase tracking-[0.3em] text-zinc-500">View All Archive</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
