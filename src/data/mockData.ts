import { Profile, Project, Experience, Education, Skill, ResumeVersion, SocialLink } from '../types';
import { LINKS } from '../config/links';

export const profileData: Profile = {
    name: "Lucas Muniz",
    role: "Desenvolvedor de Software",

    bio: "Desenvolvedor de Software, analista de Infraestrutura de Rede e Computadores. Combino pensamento analítico e visão de negócio para criar soluções modernas usando ferramentas atuais, buscando sempre a melhor solução para cada negócio, visando assim resolver problemas complexos e gerar valor real.",
    email: LINKS.email,
    phone: LINKS.phone
};

export const projectsData: Project[] = [
    {
        id: "1",
        title: "Plataforma Aulas",
        description: "Sistema de gestão para professores autônomos integrado com IA. (Em produção)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude", "Gemini API"],
        repoUrl: LINKS.github,
        liveUrl: "",
        // Capa padrao (progress.jpg), pois este projeto ainda nao tem uma imagem propria
        imageUrl: "/progress.jpg"
    },
    {
        id: "2",
        // Renomeado de "Bidding" para "Oportunidade Certa"
        title: "Oportunidade Certa",
        description: "Sistema para gerenciamento de licitações entre empresas e órgãos públicos, centralizando as informações para os licitantes acompanharem suas licitações ativas. (Em produção)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Gemini API"],
        repoUrl: LINKS.github,
        imageUrl: "/Oportunidade Certa.png"
    },
    {
        id: "3",
        // Renomeado de "Walle" para "Dimax"
        title: "Dimax",
        description: "Gestão financeira pessoal com metas, assistente de IA e workspaces, com disponibilidade geral futura. (Em produção)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude", "Gemini API"],
        repoUrl: LINKS.github,
        imageUrl: "/Dimax.png"
    },
    {
        id: "4",
        // Renomeado de "Assistente Agropecuário" para "Agrogest"
        title: "Agrogest",
        description: "Gestão de recursos e propostas para empresas do setor agropecuário, com assistente de IA e fluxos de trabalho. (Em produção)",
        summary: "",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Firebase", "Claude"],
        repoUrl: LINKS.github,
        imageUrl: "/Agrogest.png"
    },
    {
        id: "5",
        title: "Pixels Art",
        description: "Jogo para alterar as cores de um quadrado.",
        summary: "",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "6",
        title: "Unit Test",
        description: "Criação de testes unitários para um código já pré-estabelecido.",
        summary: "",
        technologies: ["JavaScript"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "7",
        title: "Shopping Cart",
        description: "Página de e-commerce com opções de adicionar e remover produtos do carrinho, consumindo a API do Mercado Livre.",
        summary: "",
        technologies: ["JavaScript", "API Mercado Livre"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "8",
        title: "PowerBI Analyst",
        description: "Dashboard dinâmico voltado para a análise detalhada de uma planilha.",
        summary: "",
        technologies: ["Power BI"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "9",
        title: "ETL com IA e Python",
        description: "Automação para criar prompts personalizados sobre investimentos via APIs da OpenAI e Deep IA.",
        summary: "",
        technologies: ["Python", "OpenAI", "Deep IA"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    },
    {
        id: "10",
        title: "Buzzfeed Quiz",
        description: "Clone do Buzzfeed com Angular, explorando funcionalidades e componentes dinâmicos.",
        summary: "",
        technologies: ["Angular"],
        repoUrl: LINKS.github,
        imageUrl: "/progress.jpg"
    }
];

export const experiencesData: Experience[] = [
    {
        id: "1",
        company: "ACRESC",
        role: "Analista de Infraestrutura de Rede e Computadores",
        startDate: "03/2025",
        endDate: "Atual",
        description: "Responsável pela infraestrutura de rede e computadores (manutenção e upgrades) em Alagoas."
    },
    {
        id: "2",
        company: "Freelancer",
        role: "Desenvolvedor de Software",
        startDate: "05/2024",
        // Atualizado para "Atual": atuação como freelancer continua em paralelo ao cargo na ACRESC
        endDate: "Atual",
        description: "Melhorias em sistemas internos de desenvolvimento, atuação remota."
    },
    {
        id: "3",
        company: "InforSistemas",
        role: "Analista de Suporte a Sistemas",
        startDate: "10/2020",
        endDate: "04/2022",
        description: "Suporte remoto a sistemas ERP e PDV, manutenção e reparo de computadores em Alagoas."
    },
    {
        id: "4",
        company: "Conterrânea",
        role: "Setor Comercial e Financeiro",
        startDate: "04/2019",
        endDate: "08/2020",
        description: "Negociações comerciais, gestão de contas, marketing para redes sociais e vendas orgânicas, setor financeiro e pagamentos, atendimento ao cliente em Alagoas."
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

// Texto padrão de tempo de uso (excepcionalmente maior para HTML e CSS, ver abaixo)
export const skillsData: Skill[] = [
    { id: "1", name: "HTML", category: "Linguagem", yearLearned: 2019, usageTime: "+ de 5 anos de uso" },
    { id: "2", name: "CSS", category: "Linguagem", yearLearned: 2019, usageTime: "+ de 5 anos de uso" },
    { id: "3", name: "JavaScript (ES6+)", category: "Linguagem", yearLearned: 2020, usageTime: "+ de 2 anos de uso" },
    { id: "4", name: "DOM", category: "Linguagem", yearLearned: 2020, usageTime: "+ de 2 anos de uso" },
    { id: "5", name: "TypeScript", category: "Linguagem", yearLearned: 2023, usageTime: "+ de 2 anos de uso" },
    { id: "6", name: "MySQL", category: "Linguagem", yearLearned: 2021, usageTime: "+ de 2 anos de uso" },
    { id: "7", name: "React", category: "Linguagem", yearLearned: 2022, usageTime: "+ de 2 anos de uso" },
    { id: "8", name: "Angular", category: "Linguagem", yearLearned: 2023, usageTime: "+ de 2 anos de uso" },
    { id: "9", name: "Redux", category: "Linguagem", yearLearned: 2023, usageTime: "+ de 2 anos de uso" },
    { id: "10", name: "SQL & NoSQL", category: "Linguagem", yearLearned: 2021, usageTime: "+ de 2 anos de uso" },
    { id: "11", name: "Git", category: "Linguagem", yearLearned: 2020, usageTime: "+ de 2 anos de uso" },
    { id: "12", name: "Python", category: "Linguagem", yearLearned: 2022, usageTime: "+ de 2 anos de uso" },
    // Movido para a categoria "Progresso": habilidade ainda em evolução
    { id: "13", name: "POO", category: "Progresso", yearLearned: 2022, usageTime: "+ de 2 anos de aprendizado" },
    { id: "14", name: "UnitTest, Cypress", category: "Progresso", yearLearned: 2023, usageTime: "+ de 2 anos de aprendizado" },
    { id: "15", name: "Introdução a Machine Learning", category: "Progresso", yearLearned: 2023, usageTime: "+ de 2 anos de aprendizado" },
    { id: "16", name: "Computer Science", category: "Progresso", yearLearned: 2024, usageTime: "+ de 2 anos de aprendizado" },
    { id: "17", name: "Metodologias Ágeis", category: "Progresso", yearLearned: 2018, usageTime: "+ de 2 anos de aprendizado" },
    { id: "18", name: "Power BI", category: "Progresso", yearLearned: 2023, usageTime: "+ de 2 anos de aprendizado" },
    { id: "19", name: "Inglês", category: "Progresso", yearLearned: 2025, usageTime: "+ de 2 anos de aprendizado" }
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
