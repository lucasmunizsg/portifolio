import React from 'react';
import { Profile } from '../types';

interface HeroProps {
    profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
    return (
        <section id="sobre" className="pt-32 pb-16 md:pt-48 md:pb-32 max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                Olá, eu sou {profile.name}. <br />
                <span className="text-indigo-600">{profile.role}</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                {profile.bio}
            </p>
            <div className="mt-10 flex justify-center gap-4">
                <a
                    href="#projetos"
                    className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                >
                    Ver Projetos
                </a>
                <a
                    href="#contato"
                    className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                >
                    Fale Comigo
                </a>
            </div>
        </section>
    );
};

export default Hero;
