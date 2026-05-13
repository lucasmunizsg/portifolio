import { profileData, projectsData, experiencesData, educationData, skillsData, resumeData, socialData } from './data/mockData';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import EducationSection from './components/sections/EducationSection';
import SkillsAndInterests from './components/sections/SkillsAndInterests';
import ResumeDownloads from './components/sections/ResumeDownloads';
import ContactSection from './components/sections/ContactSection';
import WelcomeGate from './components/WelcomeGate';

import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const isEnglish = navigator.language.startsWith('en');
        document.title = isEnglish ? 'Luke.Journey' : 'Journey';
    }, []);

    return (
        <div className="min-h-screen bg-[#131313]">
            <WelcomeGate />
            
            <Header />


            <main>
                <Hero profile={profileData} />

                <SkillsAndInterests skills={skillsData} />

                <ProjectsSection projects={projectsData} />

                <ExperienceTimeline experiences={experiencesData} />
                
                <EducationSection studies={educationData} />

                {/* Seção Unificada de Contato & Recursos (Downloads) */}
                <div id="contact" className="bg-[#0b0b0b] border-t border-white/5 relative overflow-hidden">
                    <ResumeDownloads versions={resumeData} />
                    <ContactSection profile={profileData} socials={socialData} />

                    {/* Rodapé Absoluto de Direitos Autorais */}
                    <footer className="w-full max-w-[1920px] mx-auto px-6 md:px-12 pb-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
                        <div className="text-sm font-bold text-white font-headline tracking-tighter">
                            {profileData.name.toUpperCase()}
                        </div>
                        <div className="text-[10px] font-body font-light tracking-[0.05em] uppercase text-zinc-600">
                            © {new Date().getFullYear()} {profileData.name.toUpperCase()}. ENGENHARIA NO PROCESSO.
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default App;
