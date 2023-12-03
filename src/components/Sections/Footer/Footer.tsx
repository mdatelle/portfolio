import styles from './Footer.module.css';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <Image
                alt="MD Logo"
                className={styles.image}
                height={62}
                priority
                src="/logo.svg"
                width={62}
            />
            <span className={styles.name}>© {new Date().getFullYear()} Michael Datelle</span>
        </footer>
    );
};
