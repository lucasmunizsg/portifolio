import { profileData, projectsData, experiencesData, educationData, skillsData, resumeData, socialData } from './data/mockData';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import SkillsAndInterests from './components/SkillsAndInterests';
import ResumeDownloads from './components/ResumeDownloads';
import ContactSection from './components/ContactSection';
import WelcomeGate from './components/WelcomeGate';

function App() {
    return (
        <div className="min-h-screen bg-[#131313]">
            <WelcomeGate />
            
            <Header profile={profileData} />

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
