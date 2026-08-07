export const translations = {
  pt: {
    welcome: {
      line1: ["VAMOS", "INICIAR"],
      line2: ["A", "JORNADA"],
      cta: "EXPLORAR",
      switchLanguage: "Switch to English"
    },
    nav: {
      home: "Início",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
      contact: "Contato"
    },
    sections: {
      skills: "HABILIDADES & INTERESSES",
      projects: "PROJETOS EM DESTAQUE",
      experience: "EXPERIÊNCIA PROFISSIONAL",
      education: "FORMAÇÃO ACADÊMICA",
      contact: "CONTATO & RECURSOS"
    },
    hero: {
      available: "Disponível para Projetos como:",
      word1Options: ["DESENVOLVEDOR", "MELHORADOR"],
      word2Options: ["DE SOFTWARE", "DE IDEIAS"],
      labels: {
        about: "Sobre",
        location: "Localização",
        locationValue: "Sediado no Brasil / Global"
      }
    },
    projects: {
      subtitle: "Trabalhos Selecionados",
      title: ["PROJETOS", "EM", "DESTAQUE"],
      fileLabel: "Arquivo"
    },
    experience: {
      subtitle: "Histórico",
      title: ["JORNADA", "PROFISSIONAL"],
      details: "Detalhes",
      close: "Fechar"
    },
    education: {
      subtitle: "Formação",
      title: ["JORNADA", "ACADÊMICA"],
      award: "Prêmio"
    },
    contact: {
      title: ["FAÇA", "PARTE", "DESSA", "JORNADA"]
    },
    resumes: {
      subtitle: "Recursos",
      title: ["DOCUMENTAÇÃO", "TÉCNICA"],
      resumeLabel: "Currículo",
      emailPlaceholder: "Seu e-mail (opcional)",
      optional: "Opcional",
      downloadButton: "Baixar PDF",
      techSummary: {
        title: "Ficha Técnica",
        description: "Painel interativo contendo padrões de arquitetura, metodologias ágeis, proficiências e métricas obtidas.",
        viewButton: "Ver Ficha Técnica",
        modalTitle: "Ficha Técnica do Engenheiro",
        closeButton: "Fechar Ficha Técnica",
        stackProficiency: "Proficiência de Stack Principal",
        metricsImpact: "Métricas & Impacto em Projetos",
        architecture: "Arquitetura de Software",
        quality: "Práticas & Qualidade",
        specialties: "Especialidades de IA & Dados"
      }
    },
    skills: {
      subtitle: "Aprendizado & Evolução",
      title: ["HABILIDADES", "E", "PROGRESSO"],
      habilidades: "Habilidades",
      progresso: "Progresso",
      footerTitle: ['RESOLVENDO', 'PROBLEMAS', 'COM', 'SOFTWARES', 'QUE', 'CAUSAM', 'IMPACTO', 'NA', 'JORNADA', 'DOS', 'USUÁRIOS']
    },
    // Nova seção: tecnologias utilizadas para construir este próprio portfólio
    techStack: {
      subtitle: "Como Foi Construído",
      title: ["TECNOLOGIAS", "DO", "PORTFÓLIO"]
    },
    // Novo destaque de disponibilidade para contratação (CLT/PJ) e projetos freelance
    hiring: {
      badge: "Disponível para Contratação",
      title: "Aberto a Novas Oportunidades",
      description: "Disponível tanto para contratação empresarial (CLT/PJ) quanto para projetos pessoais e freelance.",
      corporate: "CLT / PJ",
      freelance: "Freelance / Projetos Pessoais"
    },
    common: {
      present: "Atual",
      downloadResume: "Baixar Currículo",
      copyright: "ENGENHARIA NO PROCESSO"
    }
  },
  en: {
    welcome: {
      line1: ["LET'S", "START"],
      line2: ["THE", "JOURNEY"],
      cta: "EXPLORE",
      switchLanguage: "Mudar para Português"
    },
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    sections: {
      skills: "SKILLS & INTERESTS",
      projects: "FEATURED PROJECTS",
      experience: "PROFESSIONAL EXPERIENCE",
      education: "ACADEMIC BACKGROUND",
      contact: "CONTACT & RESOURCES"
    },
    hero: {
      available: "Available for Projects as:",
      word1Options: ["DEVELOPER", "ENHANCER"],
      word2Options: ["OF SOFTWARE", "OF IDEAS"],
      labels: {
        about: "About",
        location: "Location",
        locationValue: "Based in Brazil / Global"
      }
    },
    projects: {
      subtitle: "Selected Works",
      title: ["FEATURED", "PROJECTS"],
      fileLabel: "File"
    },
    experience: {
      subtitle: "History",
      title: ["PROFESSIONAL", "JOURNEY"],
      details: "Details",
      close: "Close"
    },
    education: {
      subtitle: "Education",
      title: ["ACADEMIC", "JOURNEY"],
      award: "Award"
    },
    contact: {
      title: ["BE", "PART", "OF", "THE", "JOURNEY"]
    },
    resumes: {
      subtitle: "Resources",
      title: ["TECHNICAL", "DOCUMENTATION"],
      resumeLabel: "Resume",
      emailPlaceholder: "Your email (optional)",
      optional: "Optional",
      downloadButton: "Download PDF",
      techSummary: {
        title: "Technical Summary",
        description: "Interactive panel containing architecture patterns, agile methodologies, proficiencies, and metrics obtained.",
        viewButton: "View Tech Summary",
        modalTitle: "Engineer's Technical Summary",
        closeButton: "Close Technical Summary",
        stackProficiency: "Core Stack Proficiency",
        metricsImpact: "Metrics & Project Impact",
        architecture: "Software Architecture",
        quality: "Practices & Quality",
        specialties: "AI & Data Specialties"
      }
    },
    skills: {
      subtitle: "Learning & Growth",
      title: ["SKILLS", "AND", "PROGRESS"],
      habilidades: "Skills",
      progresso: "Progress",
      footerTitle: ['SOLVING', 'PROBLEMS', 'WITH', 'SOFTWARE', 'THAT', 'IMPACTS', 'THE', 'USER', 'JOURNEY']
    },
    // Nova seção: tecnologias usadas para construir este próprio portfólio
    techStack: {
      subtitle: "How It Was Built",
      title: ["PORTFOLIO", "TECH", "STACK"]
    },
    // Novo destaque de disponibilidade para contratação (CLT/PJ) e projetos freelance
    hiring: {
      badge: "Available for Hire",
      title: "Open to New Opportunities",
      description: "Available for both corporate hiring (full-time/contract) and personal or freelance projects.",
      corporate: "Full-time / Contract",
      freelance: "Freelance / Personal Projects"
    },
    common: {
      present: "Present",
      downloadResume: "Download Resume",
      copyright: "ENGINEERING IN THE PROCESS"
    }
  }
};

export type TranslationKeys = typeof translations.pt;
