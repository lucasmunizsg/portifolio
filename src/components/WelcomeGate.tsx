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
            </div>

            {/* Discrete scroll indicator arrow at the bottom border */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
                <span className="material-symbols-outlined text-white text-3xl">
                    expand_more
                </span>
            </div>
        </section>
    );
};

export default WelcomeGate;
