# Meu Portfólio Pessoal 🚀

Um portfólio moderno, rápido e responsivo construído no formato Single Page Application (SPA). Desenvolvido para apresentar minha trajetória profissional, minhas habilidades e os projetos em que venho trabalhando — como minha aplicação de gestão e resolução de atividades para alunos.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído focando em performance, tipagem estática e arquitetura limpa:

* **[React](https://react.dev/)**: Biblioteca para construção da interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo um código mais seguro e escalável.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para o ecossistema moderno de desenvolvimento web.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização ágil e design 100% responsivo.

## ✨ Funcionalidades

* **Apresentação & Sobre**: Resumo dinâmico do meu perfil e objetivos.
* **Vitrine de Projetos**: Galeria detalhada das minhas aplicações, com links para código-fonte e demonstrações ao vivo.
* **Trilha Profissional**: Linha do tempo estruturada de experiências de trabalho e formação acadêmica.
* **Habilidades**: Seção separando linguagens de programação dominadas e interesses técnicos.
* **Multi-Currículo**: Sistema prático para download do meu currículo em diferentes versões (ex: PT-BR, Inglês, Foco em Backend).
* **Contato**: Links rápidos para minhas redes profissionais e e-mail.

## 📂 Estrutura do Projeto

A arquitetura do código foi pensada para separar visualização (UI) de dados, facilitando a manutenção:

```text
src/
├── assets/       # Imagens estáticas e documentos (PDFs dos currículos)
├── components/   # Componentes React modulares e isolados
├── data/         # Mocks e dados estáticos que alimentam a aplicação
├── types/        # Interfaces e tipagens globais do TypeScript
├── App.tsx       # Componente raiz que orquestra as seções
└── main.tsx      # Ponto de entrada da aplicação