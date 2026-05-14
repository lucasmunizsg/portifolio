import { Profile, Project, Experience, Education, Skill, ResumeVersion, SocialLink } from '../types';
import { LINKS } from '../config/links';

export const profileDataEn: Profile = {
    name: "Lucas Muniz",
    role: "Software Developer",
    bio: "Front-End Developer and technology analyst based in Alagoas. I combine analytical thinking and business vision to create modern solutions integrated with Artificial Intelligence, bringing together React, Angular, and Python to solve complex problems and generate real value.",
    email: LINKS.email,
    phone: LINKS.phone
};

export const projectsDataEn: Project[] = [
    {
        id: "1",
        title: "Lessons Platform",
        description: "Management system for independent teachers integrated with AI.",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Gemini API"],
        repoUrl: LINKS.github,
        liveUrl: "",
        imageUrl: "/img1.png"
    },
    {
        id: "2",
        title: "Walle",
        description: "Personal financial management with goals and integrated AI assistant.",
        technologies: ["React", "TypeScript", "AI"],
        repoUrl: LINKS.github,
        imageUrl: "/img2.png"
    },
    {
        id: "3",
        title: "Agricultural Assistant",
        description: "Resource management and proposals for the agricultural sector with workflows and AI.",
        technologies: ["React", "Workflows", "AI"],
        repoUrl: LINKS.github
    },
    {
        id: "4",
        title: "ETL with AI and Python",
        description: "Automation to create personalized investment prompts via OpenAI and Deep IA APIs.",
        technologies: ["Python", "OpenAI", "Deep IA"],
        repoUrl: LINKS.github
    }
];

export const experiencesDataEn: Experience[] = [
    {
        id: "1",
        company: "ACRESC",
        role: "Front-End Developer",
        startDate: "03/2025",
        endDate: "Present",
        description: "Focus on network infrastructure, maintenance, and hardware upgrades in the city of Penedo-AL."
    },
    {
        id: "2",
        company: "Freelancer",
        role: "Front-End Developer",
        startDate: "05/2024",
        endDate: "02/2025",
        description: "Development and improvements in internal development systems, working remotely."
    },
    {
        id: "3",
        company: "InforSistemas",
        role: "Systems Support Analyst",
        startDate: "10/2020",
        endDate: "04/2022",
        description: "Remote support for ERP/POS systems, hardware maintenance, and training for new employees and clients."
    },
    {
        id: "4",
        company: "Conterrânea Soluções/Projetos",
        role: "Commercial and Agricultural Sector",
        startDate: "2018",
        endDate: "2020",
        description: "Acting with commercial negotiations, account management, digital marketing, agricultural credit analysis, and team leadership."
    }
];

export const educationDataEn: Education[] = [
    {
        id: "1",
        institution: "Harvard University",
        course: "CS50: Computer Science",
        status: "In progress",
        year: "Current"
    },
    {
        id: "2",
        institution: "OneBitCode & Trybe",
        course: "Web Development (Front-End & Computer Science)",
        status: "Completed",
        year: "2023"
    },
    {
        id: "3",
        institution: "DIO",
        course: "Specializations: Angular and Data Science with Python",
        status: "Completed",
        year: "2023"
    },
    {
        id: "4",
        institution: "Santander Bootcamp",
        course: "Winner - Data Science with Python (AI Project)",
        status: "Award",
        year: "2024"
    }
];

export const skillsDataEn: Skill[] = [
    { id: "1", name: "JavaScript (ES6+)", category: "Language", yearLearned: 2020 },
    { id: "2", name: "TypeScript", category: "Language", yearLearned: 2023 },
    { id: "3", name: "Python", category: "Language", yearLearned: 2022 },
    { id: "4", name: "React", category: "Language", yearLearned: 2022 },
    { id: "5", name: "Angular", category: "Language", yearLearned: 2023 },
    { id: "6", name: "SQL & NoSQL", category: "Language", yearLearned: 2021 },
    { id: "7", name: "AI Integration (OpenAI, Gemini)", category: "Interest", yearLearned: 2023 },
    { id: "8", name: "Testing (Jest, Cypress)", category: "Interest", yearLearned: 2023 },
    { id: "9", name: "Agile Management & Methodologies", category: "Interest", yearLearned: 2018 },
    { id: "10", name: "Communication & Training", category: "Interest", yearLearned: 2020 }
];

export const resumeDataEn: ResumeVersion[] = [
    {
        id: "1",
        title: "Full Resume (PT-BR)",
        description: "Detailed version containing all experiences, technologies, and academic background.",
        fileUrl: LINKS.resumes.pt,
        language: "PT-BR"
    },
    {
        id: "2",
        title: "Full Resume (EN-US)",
        description: "Detailed version covering all professional experiences, technologies, and academic background.",
        fileUrl: LINKS.resumes.en,
        language: "EN"
    }
];

export const socialDataEn: SocialLink[] = [
    { id: "1", platform: "GitHub", url: LINKS.github, iconName: "github" },
    { id: "2", platform: "LinkedIn", url: LINKS.linkedin, iconName: "linkedin" }
];
