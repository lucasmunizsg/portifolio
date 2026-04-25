import React, { useCallback, useEffect, useState } from 'react';
import { Project } from '../types';
import useEmblaCarousel from 'embla-carousel-react';

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        align: 'start',
        slidesToScroll: 1,
        duration: 40, // Mais lento e fluido
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1280px)': { slidesToScroll: 3 }
        }
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section id="work" className="relative px-6 md:px-12 py-32 max-w-[1920px] mx-auto bg-[#0e0e0e] overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-[#7212ff]/50"></span>
                        <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">Selected Works</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Featured <span className="text-outline">Projects</span>
                    </h2>
                </div>

                <div className="flex gap-4">
                    <button 
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                        className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${prevBtnEnabled ? 'hover:bg-[#7212ff] hover:border-[#7212ff] text-white' : 'opacity-20 text-zinc-500'}`}
                        aria-label="Previous Project"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button 
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                        className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${nextBtnEnabled ? 'hover:bg-[#7212ff] hover:border-[#7212ff] text-white' : 'opacity-20 text-zinc-500'}`}
                        aria-label="Next Project"
                    >
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>

            <div className="embla overflow-visible" ref={emblaRef}>
                <div className="embla__container flex gap-6">
                    {projects.map((project, index) => (
                        <div key={project.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] xl:flex-[0_0_calc(33.333%-16px)] group relative aspect-[4/5] bg-[#131313] overflow-hidden border border-white/5">
                            {/* Image with Discrete Zoom */}
                            <img 
                                className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" 
                                src={project.imageUrl || `/img${(index % 3) + 1}.png`} 
                                alt={project.title} 
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                            
                            {/* Project Info */}
                            <div className="absolute bottom-10 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="font-label text-[10px] text-[#7212ff] uppercase tracking-[0.3em] mb-3 block font-bold">
                                    Archive 0{index + 1}
                                </span>
                                <h3 className="font-display text-3xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
                                    {project.title}
                                </h3>
                                
                                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-zinc-300 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* View Button */}
                            <a 
                                href={project.repoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#7212ff] hover:border-[#7212ff] hover:rotate-45"
                            >
                                <span className="material-symbols-outlined text-white text-xl">arrow_outward</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-4 mt-16">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-1 rounded-full transition-all duration-500 ${index === selectedIndex ? 'w-12 bg-[#7212ff]' : 'w-4 bg-white/10 hover:bg-white/20'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;

