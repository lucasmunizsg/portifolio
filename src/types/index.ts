export interface Profile {
    name: string;
    role: string;
    bio: string;
    email: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    repoUrl: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string | 'Atual';
    description: string;
}

export interface Education {
    id: string;
    institution: string;
    course: string;
    status: 'Concluído' | 'Em andamento' | 'Trancado';
    year: string;
}

export interface Skill {
    id: string;
    name: string;
    category: 'Linguagem' | 'Interesse';
}

export interface ResumeVersion {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    language: 'PT-BR' | 'EN' | 'ES';
}

export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    iconName: string;
}
