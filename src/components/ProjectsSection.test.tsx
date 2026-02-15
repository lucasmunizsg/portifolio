import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from './ProjectsSection';
import { Project } from '../types';

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

    it('renders project descriptions', () => {
        render(<ProjectsSection projects={mockProjects} />);
        expect(screen.getByText('Description Alpha')).toBeInTheDocument();
    });
});
