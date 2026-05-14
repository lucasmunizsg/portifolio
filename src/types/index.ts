export interface Profile {
    name: string;
    role: string;
    bio: string;
    email: string;
    phone?: string;
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
    endDate: string | 'Atual' | 'Present';
    description: string;
}

export interface Education {
    id: string;
    institution: string;
    course: string;
    status: 'Concluído' | 'Em andamento' | 'Trancado' | 'Prêmio' | 'Completed' | 'In progress' | 'Award';
    year: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Linguagem' | 'Interesse' | 'Language' | 'Interest';
  yearLearned: number; // Propriedade para armazenar o ano de início
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
