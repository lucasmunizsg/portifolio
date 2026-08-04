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
    // Resumo breve exibido no hover central do card (preenchido posteriormente pelo usuário)
    summary?: string;
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
  // Categoria "Progresso"/"Progress" agrupa habilidades ainda em evolução (ex: POO Inicial)
  category: 'Linguagem' | 'Interesse' | 'Progresso' | 'Language' | 'Interest' | 'Progress';
  yearLearned: number; // Propriedade para armazenar o ano de início
  // Texto de tempo de uso exibido no mini card (substitui o antigo cálculo de "X anos de exp")
  usageTime: string;
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
