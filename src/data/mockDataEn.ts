import { Profile, Project, Experience, Education, Skill, ResumeVersion, SocialLink } from '../types';
import { LINKS } from '../config/links';

export const profileDataEn: Profile = {
    name: "Lucas Muniz",
    role: "Software Developer",
    bio: "Software Developer, Network and Computer Infrastructure analyst. I combine analytical thinking and business vision to create modern solutions using current tools, always seeking the best solution for each business, thus solving complex problems and generating real value.",
    email: LINKS.email,
    phone: LINKS.phone
};

export const projectsDataEn: Project[] = [
    {
        id: "1",
        title: "Lessons Platform",
        description: "Management system for independent teachers integrated with AI. (In production)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude", "Gemini API"],
        repoUrl: LINKS.github,
        liveUrl: "",
        // Default cover (progress.jpg), since this project doesn't have its own image yet
        imageUrl: "/progress.jpg"
    },
    {
        id: "2",
        // Renamed from "Bidding" to "Oportunidade Certa" (kept as-is, it's a brand name)
        title: "Oportunidade Certa",
        description: "System for managing bidding processes between companies and public agencies, centralizing the information bidders need to track their active bids. (In production)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Gemini API"],
        repoUrl: LINKS.github,
        imageUrl: "/Oportunidade Certa.png"
    },
    {
        id: "3",
        // Renamed from "Walle" to "Dimax"
        title: "Dimax",
        description: "Personal financial management with goals, an AI assistant, and workspaces, with general availability planned. (In production)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude", "Gemini API"],
        repoUrl: LINKS.github,
        imageUrl: "/Dimax.png"
    },
    {
        id: "4",
        // Renamed from "Agricultural Assistant" to "Agrogest"
        title: "Agrogest",
        description: "Resource and proposal management for agricultural-sector companies, with an AI assistant and workflows. (In production)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude"],
        repoUrl: LINKS.github,
        imageUrl: "/Agrogest.png"
    },
    {
        id: "5",
        title: "Pixels Art",
        description: "Game to change the colors of a square.",
        summary: "",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "6",
        title: "Unit Test",
        description: "Unit tests written for a pre-existing codebase.",
        summary: "",
        technologies: ["JavaScript"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "7",
        title: "Shopping Cart",
        description: "E-commerce page with options to add and remove products from the cart, consuming the Mercado Livre API.",
        summary: "",
        technologies: ["JavaScript", "Mercado Livre API"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "8",
        title: "PowerBI Analyst",
        description: "Dynamic dashboard for detailed analysis of a spreadsheet.",
        summary: "",
        technologies: ["Power BI"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "9",
        title: "ETL with AI and Python",
        description: "Automation to create personalized investment prompts via OpenAI and Deep IA APIs.",
        summary: "",
        technologies: ["Python", "OpenAI", "Deep IA"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "10",
        title: "Buzzfeed Quiz",
        description: "Buzzfeed clone built with Angular, exploring dynamic components.",
        summary: "",
        technologies: ["Angular"],
        imageUrl: "/progress.jpg",
        repoUrl: LINKS.github
    }
];

export const experiencesDataEn: Experience[] = [
    {
        id: "1",
        company: "ACRESC",
        role: "Network and Computer Infrastructure Analyst",
        startDate: "03/2025",
        endDate: "Present",
        description: "Responsible for network and computer infrastructure (maintenance and upgrades) in Alagoas."
    },
    {
        id: "2",
        company: "Freelancer",
        role: "Software Developer",
        startDate: "05/2024",
        // Updated to "Present": freelance work continues in parallel with the ACRESC role
        endDate: "Present",
        description: "Improvements to internal development systems, working remotely."
    },
    {
        id: "3",
        company: "InforSistemas",
        role: "Systems Support Analyst",
        startDate: "10/2020",
        endDate: "04/2022",
        description: "Remote support for ERP and POS systems, computer maintenance and repair in Alagoas."
    },
    {
        id: "4",
        company: "Conterrânea",
        role: "Commercial and Finance Sector",
        startDate: "04/2019",
        endDate: "08/2020",
        description: "Commercial negotiations, account management, social media and organic sales marketing, finance and payments, customer service in Alagoas."
    },
    {
        id: "5",
        company: "Conterrânea",
        role: "Agricultural Credit Analyst",
        startDate: "09/2018",
        endDate: "04/2019",
        description: "Agricultural credit analysis alongside Banco do Brasil and Banco do Nordeste, in Arapiraca-AL."
    }
];

export const educationDataEn: Education[] = [
    {
        id: "1",
        institution: "Harvard University",
        course: "CS50: Introduction to Computer Science",
        status: "In progress",
        year: "Current"
    },
    {
        id: "2",
        institution: "TBA",
        course: "English Course (Oxford Method)",
        status: "In progress",
        year: "Current"
    },
    {
        id: "3",
        institution: "OneBit Code",
        course: "Front-End Web Development",
        status: "In progress",
        year: "Current"
    },
    {
        id: "4",
        institution: "DIO",
        course: "Front-End Development Bootcamp with Angular",
        status: "Completed",
        year: "2024"
    },
    {
        id: "5",
        institution: "Santander Bootcamp",
        course: "Winner - 4th Data Science with Python Bootcamp (AI Project)",
        status: "Award",
        year: "2023"
    },
    {
        id: "6",
        institution: "DIO",
        course: "Data Science with Python Bootcamp",
        status: "Completed",
        year: "2023"
    },
    {
        id: "7",
        institution: "Trybe",
        course: "Web Development Fundamentals",
        status: "Completed",
        year: "2023"
    },
    {
        id: "8",
        institution: "Microlins",
        course: "Computer Science Course",
        status: "Completed",
        year: "2018"
    }
];

export const skillsDataEn: Skill[] = [
    { id: "1", name: "HTML", category: "Language", yearLearned: 2019, usageTime: "5+ years of use" },
    { id: "2", name: "CSS", category: "Language", yearLearned: 2019, usageTime: "5+ years of use" },
    { id: "3", name: "JavaScript (ES6+)", category: "Language", yearLearned: 2020, usageTime: "2+ years of use" },
    { id: "4", name: "DOM", category: "Language", yearLearned: 2020, usageTime: "2+ years of use" },
    { id: "5", name: "TypeScript", category: "Language", yearLearned: 2023, usageTime: "2+ years of use" },
    { id: "6", name: "MySQL", category: "Language", yearLearned: 2021, usageTime: "2+ years of use" },
    { id: "7", name: "React", category: "Language", yearLearned: 2022, usageTime: "2+ years of use" },
    { id: "8", name: "Angular", category: "Language", yearLearned: 2023, usageTime: "2+ years of use" },
    { id: "9", name: "Redux", category: "Language", yearLearned: 2023, usageTime: "2+ years of use" },
    { id: "10", name: "SQL & NoSQL", category: "Language", yearLearned: 2021, usageTime: "2+ years of use" },
    { id: "11", name: "Git", category: "Language", yearLearned: 2020, usageTime: "2+ years of use" },
    { id: "12", name: "Python", category: "Language", yearLearned: 2022, usageTime: "2+ years of use" },
    // Movido para a categoria "Progress": habilidade ainda em evolução
    { id: "13", name: "OOP", category: "Progress", yearLearned: 2022, usageTime: "2+ years of learning" },
    { id: "14", name: "UnitTest, Cypress", category: "Progress", yearLearned: 2023, usageTime: "2+ years of learning" },
    { id: "15", name: "Intro to Machine Learning", category: "Progress", yearLearned: 2023, usageTime: "2+ years of learning" },
    { id: "16", name: "Computer Science", category: "Progress", yearLearned: 2024, usageTime: "2+ years of learning" },
    { id: "17", name: "Agile Methodologies", category: "Progress", yearLearned: 2018, usageTime: "2+ years of learning" },
    { id: "18", name: "Power BI", category: "Progress", yearLearned: 2023, usageTime: "2+ years of learning" },
    { id: "19", name: "English", category: "Progress", yearLearned: 2025, usageTime: "2+ years of learning" }
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
