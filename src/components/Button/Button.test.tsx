import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    it('renders the Button component', () => {
        render(<Button>I&apos;m a button</Button>);

        expect(screen.getByRole('button')).toHaveTextContent("I'm a button");
    });
});
