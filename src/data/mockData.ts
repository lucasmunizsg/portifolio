import { Profile, Project, Experience, Education, Skill, ResumeVersion, SocialLink } from '../types';
import { LINKS } from '../config/links';

export const profileData: Profile = {
    name: "Lucas Muniz",
    role: "Desenvolvedor de Software",

    bio: "Desenvolvedor de Software e analista de tecnologia sediado em Alagoas. Combino pensamento analítico e visão de negócio para criar soluções modernas integradas com Inteligência Artificial, unindo React, Angular e Python para resolver problemas complexos e gerar valor real.",
    email: LINKS.email,
    phone: LINKS.phone
};

export const projectsData: Project[] = [
    {
        id: "1",
        title: "Plataforma Aulas",
        description: "Sistema de gestão para professores autônomos integrado com IA. (Em produção)",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude", "Gemini API"],
        repoUrl: LINKS.github,
        liveUrl: "",
        imageUrl: "/img1.png"
    },
    {
        id: "2",
        title: "Bidding",
        description: "Sistema para gerenciamento de licitações entre empresas e órgãos públicos, centralizando as informações para os licitantes acompanharem suas licitações ativas. (Em produção)",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Gemini API"],
        repoUrl: LINKS.github
    },
    {
        id: "3",
        title: "Walle",
        description: "Gestão financeira pessoal com metas, assistente de IA e workspaces, com disponibilidade geral futura. (Em produção)",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude", "Gemini API"],
        repoUrl: LINKS.github,
        imageUrl: "/img2.png"
    },
    {
        id: "4",
        title: "Assistente Agropecuário",
        description: "Gestão de recursos e propostas para empresas do setor agropecuário, com assistente de IA e fluxos de trabalho. (Em produção)",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude"],
        repoUrl: LINKS.github
    },
    {
        id: "5",
        title: "Pixels Art",
        description: "Jogo para alterar as cores de um quadrado.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: LINKS.github
    },
    {
        id: "6",
        title: "Unit Test",
        description: "Criação de testes unitários para um código já pré-estabelecido.",
        technologies: ["JavaScript"],
        repoUrl: LINKS.github
    },
    {
        id: "7",
        title: "Shopping Cart",
        description: "Página de e-commerce com opções de adicionar e remover produtos do carrinho, consumindo a API do Mercado Livre.",
        technologies: ["JavaScript", "API Mercado Livre"],
        repoUrl: LINKS.github
    },
    {
        id: "8",
        title: "PowerBI Analyst",
        description: "Dashboard dinâmico voltado para a análise detalhada de uma planilha.",
        technologies: ["Power BI"],
        repoUrl: LINKS.github
    },
    {
        id: "9",
        title: "ETL com IA e Python",
        description: "Automação para criar prompts personalizados sobre investimentos via APIs da OpenAI e Deep IA.",
        technologies: ["Python", "OpenAI", "Deep IA"],
        repoUrl: LINKS.github
    },
    {
        id: "10",
        title: "Buzzfeed Quiz",
        description: "Clone do Buzzfeed com Angular, explorando funcionalidades e componentes dinâmicos.",
        technologies: ["Angular"],
        repoUrl: LINKS.github
    }
];

export const experiencesData: Experience[] = [
    {
        id: "1",
        company: "ACRESC",
        role: "Desenvolvedor de Software",
        startDate: "03/2025",
        endDate: "Atual",
        description: "Responsável pela infraestrutura de rede e computadores (manutenção e upgrades) em Penedo-AL."
    },
    {
        id: "2",
        company: "Freelancer",
        role: "Desenvolvedor de Software",
        startDate: "05/2024",
        endDate: "02/2025",
        description: "Melhorias em sistemas internos de desenvolvimento, atuação remota."
    },
    {
        id: "3",
        company: "InforSistemas",
        role: "Analista de Suporte a Sistemas",
        startDate: "10/2020",
        endDate: "04/2022",
        description: "Suporte remoto a sistemas ERP e PDV, manutenção e reparo de computadores em Penedo-AL."
    },
    {
        id: "4",
        company: "Conterrânea",
        role: "Setor Comercial e Financeiro",
        startDate: "04/2019",
        endDate: "08/2020",
        description: "Negociações comerciais, gestão de contas, marketing para redes sociais e vendas orgânicas, setor financeiro e pagamentos, atendimento ao cliente em Penedo-AL."
    },
    {
        id: "5",
        company: "Conterrânea",
        role: "Analista de Crédito Agropecuário",
        startDate: "09/2018",
        endDate: "04/2019",
        description: "Análise de crédito agropecuário junto ao Banco do Brasil e Banco do Nordeste, em Arapiraca-AL."
    }
];

export const educationData: Education[] = [
    {
        id: "1",
        institution: "Harvard University",
        course: "CS50: Introdução à Ciência da Computação",
        status: "Em andamento",
        year: "Atual"
    },
    {
        id: "2",
        institution: "TBA",
        course: "Curso de Inglês (Oxford Method)",
        status: "Em andamento",
        year: "Atual"
    },
    {
        id: "3",
        institution: "OneBit Code",
        course: "Desenvolvimento Web Front-End",
        status: "Em andamento",
        year: "Atual"
    },
    {
        id: "4",
        institution: "DIO",
        course: "Bootcamp Desenvolvimento Front-End com Angular",
        status: "Concluído",
        year: "2024"
    },
    {
        id: "5",
        institution: "Santander Bootcamp",
        course: "Vencedor - 4º Bootcamp Ciência de Dados com Python (Projeto de IA)",
        status: "Prêmio",
        year: "2023"
    },
    {
        id: "6",
        institution: "DIO",
        course: "Bootcamp Ciência de Dados com Python",
        status: "Concluído",
        year: "2023"
    },
    {
        id: "7",
        institution: "Trybe",
        course: "Fundamentos do Desenvolvimento Web",
        status: "Concluído",
        year: "2023"
    },
    {
        id: "8",
        institution: "Microlins",
        course: "Curso de Informática",
        status: "Concluído",
        year: "2018"
    }
];

export const skillsData: Skill[] = [
    { id: "1", name: "HTML", category: "Linguagem", yearLearned: 2019 },
    { id: "2", name: "CSS", category: "Linguagem", yearLearned: 2019 },
    { id: "3", name: "JavaScript (ES6+)", category: "Linguagem", yearLearned: 2020 },
    { id: "4", name: "DOM", category: "Linguagem", yearLearned: 2020 },
    { id: "5", name: "TypeScript", category: "Linguagem", yearLearned: 2023 },
    { id: "6", name: "MySQL", category: "Linguagem", yearLearned: 2021 },
    { id: "7", name: "React", category: "Linguagem", yearLearned: 2022 },
    { id: "8", name: "Angular", category: "Linguagem", yearLearned: 2023 },
    { id: "9", name: "Redux", category: "Linguagem", yearLearned: 2023 },
    { id: "10", name: "SQL & NoSQL", category: "Linguagem", yearLearned: 2021 },
    { id: "11", name: "Git", category: "Linguagem", yearLearned: 2020 },
    { id: "12", name: "Python", category: "Linguagem", yearLearned: 2022 },
    { id: "13", name: "POO (Inicial)", category: "Linguagem", yearLearned: 2022 },
    { id: "14", name: "Testes (UnitTest, Cypress)", category: "Interesse", yearLearned: 2023 },
    { id: "15", name: "Introdução a Machine Learning", category: "Interesse", yearLearned: 2023 },
    { id: "16", name: "Computer Science", category: "Interesse", yearLearned: 2024 },
    { id: "17", name: "Metodologias Ágeis", category: "Interesse", yearLearned: 2018 },
    { id: "18", name: "Power BI", category: "Interesse", yearLearned: 2023 },
    { id: "19", name: "Inglês (Em andamento)", category: "Interesse", yearLearned: 2025 }
];


export const resumeData: ResumeVersion[] = [
    {
        id: "1",
        title: "Currículo Completo (PT-BR)",
        description: "Versão detalhada contendo todas as experiências, tecnologias e histórico acadêmico.",
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

export const socialData: SocialLink[] = [
    { id: "1", platform: "GitHub", url: LINKS.github, iconName: "github" },
    { id: "2", platform: "LinkedIn", url: LINKS.linkedin, iconName: "linkedin" }
];
