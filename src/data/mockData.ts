import { Profile, Project, Experience, Education, Skill, ResumeVersion, SocialLink } from '../types';

export const profileData: Profile = {
    name: "Lucas Developer",
    role: "Senior Frontend Engineer",
    bio: "Specialist in building scalable, performant, and accessible web applications using modern technologies like React, TypeScript, and Tailwind CSS. Passionate about clean code and user experience.",
    email: "lucas@example.com"
};

export const projectsData: Project[] = [
    {
        id: "1",
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with cart, checkout, and user authentication.",
        technologies: ["React", "Redux", "Node.js", "MongoDB"],
        repoUrl: "https://github.com/lucas/ecommerce",
        liveUrl: "https://shop.lucas.dev",
        imageUrl: "https://via.placeholder.com/600x400"
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Real-time task management application with drag-and-drop interface.",
        technologies: ["TypeScript", "Firebase", "React DnD"],
        repoUrl: "https://github.com/lucas/tasks",
        imageUrl: "https://via.placeholder.com/600x400"
    },
    {
        id: "3",
        title: "Portfolio V1",
        description: "My first portfolio website built with vanilla HTML/CSS/JS.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/lucas/portfolio-v1"
    }
];

export const experiencesData: Experience[] = [
    {
        id: "1",
        company: "Tech Solutions Inc.",
        role: "Senior Frontend Developer",
        startDate: "2023",
        endDate: "Atual",
        description: "Leading the frontend team in migrating legacy applications to React. Improved performance by 40%."
    },
    {
        id: "2",
        company: "Creative Agency",
        role: "Frontend Developer",
        startDate: "2021",
        endDate: "2023",
        description: "Developed interactive landing pages and web applications for various clients."
    },
    {
        id: "3",
        company: "StartUp X",
        role: "Junior Developer",
        startDate: "2019",
        endDate: "2021",
        description: "Assisted in the development of the MVP using Vue.js."
    }
];

export const educationData: Education[] = [
    {
        id: "1",
        institution: "University of Technology",
        course: "B.Sc. in Computer Science",
        status: "Concluído",
        year: "2019"
    },
    {
        id: "2",
        institution: "Online Platform",
        course: "Full Stack Bootcamp",
        status: "Concluído",
        year: "2020"
    }
];

export const skillsData: Skill[] = [
    { id: "1", name: "JavaScript (ES6+)", category: "Linguagem" },
    { id: "2", name: "TypeScript", category: "Linguagem" },
    { id: "3", name: "React", category: "Linguagem" },
    { id: "4", name: "Tailwind CSS", category: "Linguagem" },
    { id: "5", name: "Node.js", category: "Linguagem" },
    { id: "6", name: "Git", category: "Linguagem" },
    { id: "7", name: "UI/UX Design", category: "Interesse" },
    { id: "8", name: "Accessibility", category: "Interesse" },
    { id: "9", name: "Performance Optimization", category: "Interesse" },
    { id: "10", name: "Open Source", category: "Interesse" }
];

export const resumeData: ResumeVersion[] = [
    {
        id: "1",
        title: "Currículo Completo (PT-BR)",
        description: "Versão detalhada com todas as experiências e projetos.",
        fileUrl: "/assets/docs/resume-pt.pdf",
        language: "PT-BR"
    },
    {
        id: "2",
        title: "Resume (English)",
        description: "Concise version focused on international opportunities.",
        fileUrl: "/assets/docs/resume-en.pdf",
        language: "EN"
    }
];

export const socialData: SocialLink[] = [
    { id: "1", platform: "GitHub", url: "https://github.com/lucas", iconName: "github" },
    { id: "2", platform: "LinkedIn", url: "https://linkedin.com/in/lucas", iconName: "linkedin" },
    { id: "3", platform: "Twitter", url: "https://twitter.com/lucas", iconName: "twitter" }
];
