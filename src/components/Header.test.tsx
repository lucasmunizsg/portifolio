import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
    it('renders name correctly', () => {
        const { container } = render(<Header />);
        const logoLink = container.querySelector('a[href="#hero"]');
        expect(logoLink).toBeInTheDocument();
    });

    it('contains navigation links', () => {
        render(<Header />);
        expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
        expect(screen.getByText(/XP/i)).toBeInTheDocument();
        expect(screen.getByText(/Stacks/i)).toBeInTheDocument();
        expect(screen.getByText(/Contato/i)).toBeInTheDocument();
    });
});
