import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import '@testing-library/jest-dom';

describe('Hero', () => {
    it('renders the Hero component', () => {
        render(<Hero />);

        const heading = screen.getByRole('heading', {
            name: /Full Stack Engineer \/\/ UI Designer/i
        });
        const subheading = screen.getByRole('heading', {
            name: /I design and build experiences users love/i
        });
        const buttonLink = screen.getByRole('link', {
            name: /Recent Projects/i
        });

        expect(heading).toBeInTheDocument();
        expect(buttonLink).toBeInTheDocument();
        expect(subheading).toBeInTheDocument();
    });
});
