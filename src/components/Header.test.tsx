import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
    it('renders name correctly', () => {
        render(<Header />);
        expect(screen.getByText(/JOURNEY/i)).toBeInTheDocument();
    });

    it('contains navigation links', () => {
        render(<Header />);
        expect(screen.getByText(/1\. Projetos/i)).toBeInTheDocument();
        expect(screen.getByText(/2\. XP/i)).toBeInTheDocument();
        expect(screen.getByText(/3\. Processo/i)).toBeInTheDocument();
        expect(screen.getByText(/4\. Contato/i)).toBeInTheDocument();
    });
});
