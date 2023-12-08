import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { MDXProps } from 'mdx/types';
import { Resume } from './Resume';

const mdxFile = jest.fn() as (props: MDXProps) => JSX.Element;

describe('Resume', () => {
    const experience = [
        {
            company: 'Company 1',
            position: 'Sr. Engineer',
            period: 'Sep 2022 - Present',
            Mdx: mdxFile
        },
        {
            company: 'Company 2',
            position: 'Software Engineer',
            period: 'May 2018 - Sep 2022',
            Mdx: mdxFile
        },
        {
            company: 'Company 3',
            position: 'Mobile Developer',
            period: 'May 2016 - Mar 2018',
            Mdx: mdxFile
        }
    ];

    it('renders the Resume component', () => {
        render(<Resume experience={experience} />);

        const tabs = screen.getAllByRole('tab');
        const tabContent = screen.getAllByRole('tabcontent');

        expect(tabs).toHaveLength(3);
        expect(tabs[0]).toHaveTextContent('Company 1');
        expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
        expect(tabs[1]).toHaveTextContent('Company 2');
        expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
        expect(tabs[2]).toHaveTextContent('Company 3');
        expect(tabs[2]).toHaveAttribute('aria-selected', 'false');

        expect(screen.getAllByAltText('Tab line image')).toHaveLength(3);
        expect(screen.getByAltText('Select Icon')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('Download Full Resume');
        expect(tabContent[0]).toHaveTextContent('Company 1 - Sr. EngineerSep 2022 - Present');
        expect(tabContent[1]).toHaveTextContent('Company 2 - Software EngineerMay 2018 - Sep 2022');
        expect(tabContent[2]).toHaveTextContent('Company 3 - Mobile DeveloperMay 2016 - Mar 2018');
        expect(mdxFile).toHaveBeenCalledTimes(3);
    });
});
