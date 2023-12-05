import { useState } from 'react';
import Image from 'next/image';
import styles from '@/components/SmallScreenMenu/SmallScreenMenu.module.css';

type MenuItem = {
    name: string;
    path: string;
};

interface ISmallScreenMenuProps {
    items: MenuItem[];
}

export const SmallScreenMenu = ({ items }: ISmallScreenMenuProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const onClose = () => setIsMenuOpen(false);

    return (
        <div className={styles.menu}>
            <Image
                alt="Menu icon"
                className={styles.menuIcon}
                height={34}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                priority
                src="/menu.svg"
                width={34}
            />
            <div className={`${styles.menuContent} ${isMenuOpen ? styles.open : styles.closed}`}>
                <ul className={styles.menuList}>
                    {items.map(({ name, path }, index) => (
                        <li key={index} onClick={onClose}>
                            <a href={path}>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
