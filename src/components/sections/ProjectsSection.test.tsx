import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import ProjectsSection from './ProjectsSection';
import { Project } from '../../types';
// ProjectsSection usa useLanguage() internamente, por isso precisa estar dentro do Provider nos testes
import { LanguageProvider } from '../../context/LanguageContext';

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });
});

describe('ProjectsSection', () => {


    const mockProjects: Project[] = [
        {
            id: "1",
            title: "Project Alpha",
            description: "Description Alpha",
            technologies: ["React"],
            repoUrl: "http://github.com/test",
        },
        {
            id: "2",
            title: "Project Beta",
            description: "Description Beta",
            technologies: ["Vue"],
            repoUrl: "http://github.com/test2",
        }
    ];

    it('renders all projects', () => {
        render(
            <LanguageProvider>
                <ProjectsSection projects={mockProjects} />
            </LanguageProvider>
        );
        expect(screen.getAllByText('Project Alpha')[0]).toBeInTheDocument();
        expect(screen.getAllByText('Project Beta')[0]).toBeInTheDocument();
    });

    it('renders project technologies', () => {
        render(
            <LanguageProvider>
                <ProjectsSection projects={mockProjects} />
            </LanguageProvider>
        );
        expect(screen.getAllByText('React')[0]).toBeInTheDocument();
        expect(screen.getAllByText('Vue')[0]).toBeInTheDocument();
    });

});
