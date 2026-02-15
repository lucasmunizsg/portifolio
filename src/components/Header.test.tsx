import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { Profile } from '../types';

describe('Header', () => {
    const mockProfile: Profile = {
        name: "Test User",
        role: "Tester",
        bio: "Bio",
        email: "test@test.com"
    };

    it('renders name correctly', () => {
        render(<Header profile={mockProfile} />);
        expect(screen.getByText('Test User')).toBeInTheDocument();
    });

    it('contains navigation links', () => {
        render(<Header profile={mockProfile} />);
        expect(screen.getByText('Sobre')).toBeInTheDocument();
        expect(screen.getByText('Projetos')).toBeInTheDocument();
        expect(screen.getByText('Currículo')).toBeInTheDocument();
        expect(screen.getByText('Contato')).toBeInTheDocument();
    });
});
