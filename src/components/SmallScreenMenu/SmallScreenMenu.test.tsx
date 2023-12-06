import { render, screen } from '@testing-library/react';
import { SmallScreenMenu } from '@/components/SmallScreenMenu/SmallScreenMenu';
import '@testing-library/jest-dom';

describe('SmallScreenMenu', () => {
    const navItems = [
        {
            name: 'About Me',
            path: '#about'
        },
        {
            name: 'Projects',
            path: '#projects'
        },
        {
            name: 'Work',
            path: '#work'
        },
        {
            name: 'Contact',
            path: '#contact'
        }
    ];

    it('renders the SmallScreenMenu component', () => {
        render(<SmallScreenMenu items={navItems} />);

        const menuLinks = screen.getAllByRole('link');

        expect(menuLinks).toHaveLength(4);
        expect(menuLinks[0]).toHaveTextContent('About Me');
        expect(menuLinks[1]).toHaveTextContent('Projects');
        expect(menuLinks[2]).toHaveTextContent('Work');
        expect(menuLinks[3]).toHaveTextContent('Contact');
    });
});
