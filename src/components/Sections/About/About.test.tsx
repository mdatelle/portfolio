import { render, screen } from '@testing-library/react';
import { About } from './About';
import '@testing-library/jest-dom';

describe('About', () => {
    it('renders the About component', () => {
        render(<About />);

        expect(screen.getByText('My Story')).toBeInTheDocument();
        expect(screen.getByText('My Skill Set')).toBeInTheDocument();

        expect(
            screen.getByText(
                /Hi, I’m Michael Datelle, I’m an experienced Software Engineer and UI Designer./i
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(/I recently launched my own B2C SaaS product./i)
        ).toBeInTheDocument();

        expect(screen.getByTitle('Stashit link')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('Get In Touch');
    });
});
