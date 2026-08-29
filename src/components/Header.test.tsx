import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';
// Header usa useLanguage() internamente, por isso precisa estar dentro do Provider nos testes
import { LanguageProvider } from '../context/LanguageContext';

describe('Header', () => {
    it('renders name correctly', () => {
        // O logo aponta para a seção de boas-vindas (#welcome), não mais para #hero
        const { container } = render(
            <LanguageProvider>
                <Header />
            </LanguageProvider>
        );
        const logoLink = container.querySelector('a[href="#welcome"]');
        expect(logoLink).toBeInTheDocument();
    });

    it('contains navigation links', () => {
        // Rótulos atuais do menu (em português, conforme translations.ts)
        render(
            <LanguageProvider>
                <Header />
            </LanguageProvider>
        );
        expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
        expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
        expect(screen.getByText(/Experiência/i)).toBeInTheDocument();
        expect(screen.getByText(/Contato/i)).toBeInTheDocument();
    });
});
