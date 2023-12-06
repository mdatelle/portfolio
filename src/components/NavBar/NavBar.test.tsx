import { render, screen } from '@testing-library/react';
import { NavBar, NavBarLinks } from './Navbar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
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

    it('renders the NavBar component', () => {
        render(<NavBar />);

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByText('Michael Datelle')).toBeInTheDocument();
        expect(screen.getByAltText('MD Logo')).toBeInTheDocument();
    });

    it('renders the NavBarLinks component', () => {
        render(<NavBarLinks navItems={navItems} />);

        const links = screen.getAllByRole('link');

        expect(links[0]).toHaveTextContent('About Me');
        expect(links[1]).toHaveTextContent('Projects');
        expect(links[2]).toHaveTextContent('Work');
        expect(links[3]).toHaveTextContent('Contact');
    });
});
