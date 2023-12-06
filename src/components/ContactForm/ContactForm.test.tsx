import { ContactForm } from './ContactForm';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ContactForm', () => {
    it('renders the ContactForm component', () => {
        render(<ContactForm />);

        expect(
            screen.getByText(
                'Feel free to reach out if you have any questions or if you’re interested in working with me on your next project.'
            )
        ).toBeInTheDocument();

        expect(screen.getByLabelText('Name *')).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();

        expect(screen.getByLabelText('Email *')).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();

        expect(screen.getByLabelText('Message *')).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument();

        expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
    });

    it('should display errors when values are invalid', async () => {
        render(<ContactForm />);

        fireEvent.submit(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.queryByText('Name is required')).toBeInTheDocument();
            expect(screen.queryByText('Email is required')).toBeInTheDocument();
            expect(screen.queryByText('Message is required')).toBeInTheDocument();
            expect(screen.queryByText('Message successfully sent!')).not.toBeInTheDocument();
        });
    });

    it('should not display errors when values are valid', async () => {
        render(<ContactForm />);

        fireEvent.submit(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.queryByText('Name is required')).toBeInTheDocument();
            expect(screen.queryByText('Email is required')).toBeInTheDocument();
            expect(screen.queryByText('Message is required')).toBeInTheDocument();
        });

        fireEvent.input(screen.getByRole('textbox', { name: /name/i }), {
            target: {
                value: 'Mario'
            }
        });

        fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
            target: {
                value: 'mario@nintendo.com'
            }
        });

        fireEvent.input(screen.getByRole('textbox', { name: /message/i }), {
            target: {
                value: 'Mario is testing the ContactForm component!'
            }
        });

        await waitFor(() => {
            expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
            expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
            expect(screen.queryByText('Message is required')).not.toBeInTheDocument();
        });
    });
});
