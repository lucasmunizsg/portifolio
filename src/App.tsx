import { profileData, projectsData, experiencesData, educationData, skillsData, resumeData, socialData } from './data/mockData';
import { profileDataEn, projectsDataEn, experiencesDataEn, educationDataEn, skillsDataEn, resumeDataEn, socialDataEn } from './data/mockDataEn';
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
import { useLanguage } from './context/LanguageContext';

function App() {
    const { language } = useLanguage();

    useEffect(() => {
        document.title = language === 'en' ? 'Luke.Journey | Portfolio' : 'Lucas Muniz | Portfólio';
    }, [language]);

    // Seleção de dados com base no idioma
    const profile = language === 'en' ? profileDataEn : profileData;
    const projects = language === 'en' ? projectsDataEn : projectsData;
    const experiences = language === 'en' ? experiencesDataEn : experiencesData;
    const education = language === 'en' ? educationDataEn : educationData;
    const skills = language === 'en' ? skillsDataEn : skillsData;
    const resume = language === 'en' ? resumeDataEn : resumeData;
    const socials = language === 'en' ? socialDataEn : socialData;

    return (
        <div className="min-h-screen bg-[#131313]">
            <WelcomeGate />
            
            <Header />

            <main>
                <Hero profile={profile} />

                <SkillsAndInterests skills={skills} />

                <ProjectsSection projects={projects} />

                <ExperienceTimeline experiences={experiences} />
                
                <EducationSection studies={education} />

                {/* Seção Unificada de Contato & Recursos (Downloads) */}
                <div id="contact" className="bg-[#0b0b0b] border-t border-white/5 relative overflow-hidden">
                    <ResumeDownloads versions={resume} />
                    <ContactSection profile={profile} socials={socials} />

                    {/* Rodapé Absoluto de Direitos Autorais */}
                    <footer className="w-full max-w-[1920px] mx-auto px-6 md:px-12 pb-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
                        <div className="text-sm font-bold text-white font-headline tracking-tighter">
                            {profile.name.toUpperCase()}
                        </div>
                        <div className="text-[10px] font-body font-light tracking-[0.05em] uppercase text-zinc-600">
                            © {new Date().getFullYear()} {profile.name.toUpperCase()}. {t('common.copyright')}.
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default App;
