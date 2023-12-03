import { ReactNode } from 'react';
import styles from './Button.module.css';

interface IButtonProps {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset' | undefined;
    value?: string;
}

export const Button = ({ children, type = 'button', value }: IButtonProps) => {
    return (
        <button type={type} className={styles.button} value={value}>
            {children}
        </button>
    );
};
