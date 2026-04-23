import React from 'react';

const WelcomeGate: React.FC = () => {
    const startJounery = () => {
        const heroSection = document.getElementById('work');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            className="relative h-screen w-full flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-[#0e0e0e]"
            onClick={startJounery}
        >
            {/* Background Effects matching the cinematic theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="grid-perspective absolute inset-0 h-full w-full opacity-20"></div>
                <div className="prism-leak absolute top-[20%] left-[30%] w-[500px] h-[500px] opacity-30"></div>
            </div>

            <div className="relative z-10 text-center flex flex-col gap-8 px-6">
                <h1 className="font-display font-black text-[10vw] leading-none tracking-tighter text-white hero-glow uppercase">
                    VAMOS INICIAR <br />
                    <span className="text-outline">A JORNADA</span>
                </h1>
                
                <div className="flex flex-col items-center gap-4 animate-pulse">
                    <span className="font-label uppercase tracking-[0.4em] text-[10px] text-zinc-500">
                        Aperte em qualquer lugar para iniciar
                    </span>
                    <span className="material-symbols-outlined text-white text-2xl">
                        expand_more
                    </span>
                </div>
            </div>

            {/* Scroll Indicator at bottom */}
            <div className="absolute bottom-12 left-12 flex items-center gap-4 opacity-30">
                <span className="w-12 h-[1px] bg-white"></span>
                <span className="font-label uppercase tracking-[0.2em] text-[8px] text-white">Scroll to explore</span>
            </div>
        </section>
    );
};

export default WelcomeGate;
