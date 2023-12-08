import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import '@testing-library/jest-dom';
import stashitImage from '../../../public/project-stashboard.png';
import verticalLinkImage from '../../../public/project-vertical-link.png';
import chromeExtensionImage from '../../../public/project-chrome-extension.png';

describe('ProjectCard', () => {
    const projects = [
        {
            image: stashitImage,
            title: 'Title 1',
            description: 'Description 1',
            link: 'https://www.link1.com'
        },
        {
            image: verticalLinkImage,
            title: 'Title 2',
            description: 'description 2',
            link: 'https://www.link2.com'
        },
        {
            image: chromeExtensionImage,
            title: 'Title 3',
            description: 'Description 3',
            link: 'https://www.link3.com'
        }
    ];

    it('renders the ProjectCard component', () => {
        render(<ProjectCard projects={projects} />);

        const headings = screen.getAllByRole('heading');
        const icons = screen.getAllByAltText('Arrow icon');
        const images = screen.getAllByAltText('Project Image');
        const links = screen.getAllByRole('link');

        expect(headings).toHaveLength(3);
        expect(icons).toHaveLength(3);
        expect(images).toHaveLength(3);
        expect(links).toHaveLength(3);

        expect(links[0]).toHaveAttribute('href', 'https://www.link1.com');
        expect(links[1]).toHaveAttribute('href', 'https://www.link2.com');
        expect(links[2]).toHaveAttribute('href', 'https://www.link3.com');

        expect(headings[0]).toHaveTextContent('Title 1');
        expect(headings[1]).toHaveTextContent('Title 2');
        expect(headings[2]).toHaveTextContent('Title 3');

        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('description 2')).toBeInTheDocument();
        expect(screen.getByText('Description 3')).toBeInTheDocument();
    });
});
