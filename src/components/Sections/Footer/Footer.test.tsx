import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
    it('renders the Footer component', () => {
        render(<Footer />);

        expect(screen.getByText(/Michael Datelle/i)).toBeInTheDocument();
        expect(screen.getByAltText('MD Logo')).toBeInTheDocument();
    });
});
