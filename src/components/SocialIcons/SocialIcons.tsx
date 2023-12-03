import styles from './SocialIcons.module.css';
import { socialIcons } from '@/lib/socialIcons';
import Image from 'next/image';

export const SocialIcons = () => {
    return (
        <div className={styles.iconBlock}>
            {socialIcons.map(({ alt, href, src, title }, index) => (
                <a href={href} key={index} title={title} target="_blank" rel="noreferrer noopener">
                    <Image
                        alt={alt}
                        className={styles.icon}
                        height={24}
                        priority
                        src={src}
                        width={24}
                    />
                </a>
            ))}
        </div>
    );
};
