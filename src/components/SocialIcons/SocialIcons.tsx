import styles from './SocialIcons.module.css';
import Image from 'next/image';

type Icon = {
    alt: string;
    href: string;
    src: string;
    title: string;
};

interface ISocialIconProps {
    icons: Icon[];
}

export const SocialIcons = ({ icons }: ISocialIconProps) => {
    return (
        <div className={styles.iconBlock}>
            {icons.map(({ alt, href, src, title }, index) => (
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
