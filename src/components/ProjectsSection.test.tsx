import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import ProjectsSection from './ProjectsSection';
import { Project } from '../types';

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
        render(<ProjectsSection projects={mockProjects} />);
        expect(screen.getByText('Project Alpha')).toBeInTheDocument();
        expect(screen.getByText('Project Beta')).toBeInTheDocument();
    });

    it('renders project technologies', () => {
        render(<ProjectsSection projects={mockProjects} />);
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Vue')).toBeInTheDocument();
    });

});
