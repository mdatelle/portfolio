import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                pomegranate: {
                    50: '#fef4f2',
                    100: '#fee7e2',
                    200: '#fed3ca',
                    300: '#fcb3a5',
                    400: '#f78872',
                    500: '#ed5537',
                    600: '#db4527',
                    700: '#b8371d',
                    800: '#98301c',
                    900: '#7f2d1d',
                    950: '#45140a'
                }
            }
        }
    },
    plugins: []
};
export default config;
