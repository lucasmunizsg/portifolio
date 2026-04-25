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
        expect(screen.getByText(/Test User/i)).toBeInTheDocument();
    });

    it('contains navigation links', () => {
        render(<Header profile={mockProfile} />);
        expect(screen.getByText(/1\. Projetos/i)).toBeInTheDocument();
        expect(screen.getByText(/2\. XP/i)).toBeInTheDocument();
        expect(screen.getByText(/3\. Processo/i)).toBeInTheDocument();
        expect(screen.getByText(/4\. Contato/i)).toBeInTheDocument();
    });


});
