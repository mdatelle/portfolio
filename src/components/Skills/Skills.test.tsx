import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';
import '@testing-library/jest-dom';

describe('Skills', () => {
    const skills = [
        {
            description: 'The description 1',
            title: 'The title 1'
        },
        {
            description: 'The description 2',
            title: 'The title 2'
        },
        {
            description: 'The description 3',
            title: 'The title 3'
        }
    ];

    it('renders the Skills component', () => {
        render(<Skills skills={skills} />);

        expect(screen.getByText('The description 1')).toBeInTheDocument();
        expect(screen.getByText('The title 1')).toBeInTheDocument();
        expect(screen.getByText('The description 2')).toBeInTheDocument();
        expect(screen.getByText('The title 2')).toBeInTheDocument();
        expect(screen.getByText('The description 3')).toBeInTheDocument();
        expect(screen.getByText('The title 3')).toBeInTheDocument();
    });
});
