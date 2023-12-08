import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle', () => {
    it('renders the SectionTitle component', () => {
        render(<SectionTitle title="The Section Title" subtitle="The Section SubTitle" />);

        expect(screen.getByText('The Section Title')).toBeInTheDocument();
        expect(screen.getByText('The Section SubTitle')).toBeInTheDocument();
    });
});
