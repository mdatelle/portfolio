import Image from 'next/image';
import { navItems } from '@/lib/navItems';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftContent}>
                <Image
                    alt="MD Logo"
                    className={styles.image}
                    height={52}
                    priority
                    src="/logo.svg"
                    width={52}
                />
                <span className={styles.name}>Michael Datelle</span>
            </div>
            <div className={styles.rightContent}>
                <ul className={styles.list}>
                    {navItems.map(({ name, path }, index) => (
                        <li key={index} className={styles.listItem}>
                            <a href={path} className={styles.listItemLink}>
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
