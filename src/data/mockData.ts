import { Profile, Project, Experience, Education, Skill, ResumeVersion, SocialLink } from '../types';

export const profileData: Profile = {
    name: "Lucas Muniz",
    role: "Desenvolvedor Front-End",
    bio: "Desenvolvedor Front-End e analista de tecnologia sediado em Alagoas. Combino pensamento analítico e visão de negócio para criar soluções modernas integradas com Inteligência Artificial, unindo React, Angular e Python para resolver problemas complexos e gerar valor real.",
    email: "lucas@example.com"
};

export const projectsData: Project[] = [
    {
        id: "1",
        title: "Plataforma Aulas",
        description: "Sistema de gestão para professores autônomos integrado com IA.",
        technologies: ["TypeScript", "Tailwind", "PostgreSQL", "Gemini API"],
        repoUrl: "https://github.com/lucas",
        liveUrl: "",
        imageUrl: "/img1.png"
    },
    {
        id: "2",
        title: "Walle",
        description: "Gestão financeira pessoal com metas e assistente de IA integrado.",
        technologies: ["React", "TypeScript", "IA"],
        repoUrl: "https://github.com/lucas",
        imageUrl: "/img2.png"
    },
    {
        id: "3",
        title: "Assistente Agropecuário",
        description: "Gestão de recursos e propostas para o setor agrícola com fluxos de trabalho e IA.",
        technologies: ["React", "Workflows", "IA"],
        repoUrl: "https://github.com/lucas"
    },
    {
        id: "4",
        title: "ETL com IA e Python",
        description: "Automação para criar prompts personalizados sobre investimentos via APIs da OpenAI e Deep IA.",
        technologies: ["Python", "OpenAI", "Deep IA"],
        repoUrl: "https://github.com/lucas"
    }
];

export const experiencesData: Experience[] = [
    {
        id: "1",
        company: "ACRESC",
        role: "Desenvolvedor Front-End",
        startDate: "03/2025",
        endDate: "Atual",
        description: "Foco em infraestrutura de rede, manutenção e upgrade de hardware na cidade de Penedo-AL."
    },
    {
        id: "2",
        company: "Freelancer",
        role: "Desenvolvedor Front-End",
        startDate: "05/2024",
        endDate: "02/2025",
        description: "Desenvolvimento e melhorias em sistemas internos de desenvolvimento, trabalhando de forma remota."
    },
    {
        id: "3",
        company: "InforSistemas",
        role: "Analista de Suporte a Sistemas",
        startDate: "10/2020",
        endDate: "04/2022",
        description: "Suporte remoto a sistemas ERP/PDV, manutenção de hardware e treinamento de novos colaboradores e clientes."
    },
    {
        id: "4",
        company: "Conterrânea Soluções/Projetos",
        role: "Setor Comercial e Agrícola",
        startDate: "2018",
        endDate: "2020",
        description: "Atuação com negociações comerciais, gestão de contas, marketing digital, análise de crédito agropecuário e liderança de equipe."
    }
];

export const educationData: Education[] = [
    {
        id: "1",
        institution: "Harvard University",
        course: "CS50: Ciência da Computação",
        status: "Em andamento",
        year: "Atual"
    },
    {
        id: "2",
        institution: "OneBitCode & Trybe",
        course: "Desenvolvimento Web (Front-End & Computer Science)",
        status: "Concluído",
        year: "2023"
    },
    {
        id: "3",
        institution: "DIO",
        course: "Especializações: Angular e Ciência de Dados com Python",
        status: "Concluído",
        year: "2023"
    },
    {
        id: "4",
        institution: "Santander Bootcamp",
        course: "Vencedor - Ciência de Dados com Python (Projeto de IA)",
        status: "Prêmio",
        year: "2024"
    }
];

export const skillsData: Skill[] = [
    { id: "1", name: "JavaScript (ES6+)", category: "Linguagem" },
    { id: "2", name: "TypeScript", category: "Linguagem" },
    { id: "3", name: "Python", category: "Linguagem" },
    { id: "4", name: "React", category: "Linguagem" },
    { id: "5", name: "Angular", category: "Linguagem" },
    { id: "6", name: "SQL & NoSQL", category: "Linguagem" },
    { id: "7", name: "Integração de IA (OpenAI, Gemini)", category: "Interesse" },
    { id: "8", name: "Testes (Jest, Cypress)", category: "Interesse" },
    { id: "9", name: "Gestão e Metodologias Ágeis", category: "Interesse" },
    { id: "10", name: "Comunicação e Treinamento", category: "Interesse" }
];

export const resumeData: ResumeVersion[] = [
    {
        id: "1",
        title: "Currículo Completo (PT-BR)",
        description: "Versão detalhada com todas as experiências e projetos.",
        fileUrl: "/assets/docs/resume-pt.pdf",
        language: "PT-BR"
    }
];

export const socialData: SocialLink[] = [
    { id: "1", platform: "GitHub", url: "https://github.com/lucas", iconName: "github" },
    { id: "2", platform: "LinkedIn", url: "https://linkedin.com/in/lucas", iconName: "linkedin" }
];
