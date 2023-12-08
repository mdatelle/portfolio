import { render, screen } from '@testing-library/react';
import { SocialIcons } from './SocialIcons';
import '@testing-library/jest-dom';

describe('SocialIcons', () => {
    const socialIcons = [
        {
            alt: 'Icon 1',
            href: 'https://www.icon1.com',
            src: '/icon1',
            title: 'Icon 1 title'
        },
        {
            alt: 'Icon 2',
            href: 'https://www.icon2.com',
            src: '/icon2',
            title: 'Icon 2 title'
        },
        {
            alt: 'Icon 3',
            href: 'https://www.icon3.com',
            src: '/icon3',
            title: 'Icon 3 title'
        }
    ];

    it('renders the SocialIcons component', () => {
        render(<SocialIcons icons={socialIcons} />);

        expect(screen.getByAltText('Icon 1')).toBeInTheDocument();
        expect(screen.getByAltText('Icon 2')).toBeInTheDocument();
        expect(screen.getByAltText('Icon 3')).toBeInTheDocument();
    });
});
