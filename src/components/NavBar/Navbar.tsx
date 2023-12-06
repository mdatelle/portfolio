'use client';

import Image from 'next/image';
import { navItems } from '@/lib/navItems';
import { SmallScreenMenu } from '@/components/SmallScreenMenu/SmallScreenMenu';
import styles from './NavBar.module.css';

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftContent}>
                <Image
                    alt="MD Logo"
                    className={styles.logo}
                    height={52}
                    priority
                    src="/logo.svg"
                    width={52}
                />
                <span className={styles.name}>Michael Datelle</span>
            </div>
            <NavBarLinks navItems={navItems} />
        </nav>
    );
};

type MenuItem = {
    name: string;
    path: string;
};

interface INavBarLinksProps {
    navItems: MenuItem[];
}

export const NavBarLinks = ({ navItems }: INavBarLinksProps) => {
    return (
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
            <SmallScreenMenu items={navItems} />
        </div>
    );
};
