import { profileData, projectsData, experiencesData, educationData, skillsData, resumeData, socialData } from './data/mockData';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import SkillsAndInterests from './components/SkillsAndInterests';
import ResumeDownloads from './components/ResumeDownloads';
import ContactSection from './components/ContactSection';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header profile={profileData} />

            <main className="space-y-4">
                <Hero profile={profileData} />

                <SkillsAndInterests skills={skillsData} />

                <ProjectsSection projects={projectsData} />

                <div className="md:grid md:grid-cols-2 container mx-auto gap-8">
                    <ExperienceTimeline experiences={experiencesData} />
                    <EducationSection studies={educationData} />
                </div>

                <ResumeDownloads versions={resumeData} />
            </main>

            <ContactSection profile={profileData} socials={socialData} />
        </div>
    );
}

export default App;
