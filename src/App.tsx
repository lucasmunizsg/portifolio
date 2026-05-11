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

                <ResumeDownloads versions={resumeData} />
            </main>

            <ContactSection profile={profileData} socials={socialData} />
        </div>
    );
}

export default App;
