import { fireEvent, render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { MDXProps } from 'mdx/types';
import { Select } from './Select';
import '@testing-library/jest-dom';

const mdxFile = jest.fn() as (props: MDXProps) => JSX.Element;

describe('Select', () => {
    const onSelect = jest.fn();
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

    it('renders the Select component', () => {
        render(<Select options={experience} onSelect={onSelect} />);

        const options = screen.getAllByRole('option');
        const select = screen.getByRole('combobox');

        expect(options).toHaveLength(3);
        expect(options[0]).toHaveTextContent('Company 1');
        expect(options[1]).toHaveTextContent('Company 2');
        expect(options[2]).toHaveTextContent('Company 3');

        fireEvent.change(select, { target: { value: 1 } });

        expect(onSelect).toHaveBeenCalledTimes(1);
        expect(onSelect).toHaveBeenCalledWith(1);

        fireEvent.change(select, { target: { value: 2 } });

        expect(onSelect).toHaveBeenCalledTimes(2);
        expect(onSelect).toHaveBeenCalledWith(2);
    });
});
