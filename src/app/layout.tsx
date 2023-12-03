import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Asap } from 'next/font/google';
import './globals.css';

const asap = Asap({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Full Stack Engineer | UI Designer | Michael Datelle',
    description:
        'The portfolio web site for Michael Datelle, a professional full stack software engineer and designer.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={asap.className}>{children}</body>
        </html>
    );
}
