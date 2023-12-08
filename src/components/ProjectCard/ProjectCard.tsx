import arrowIcon from '../../../public/arrow-right.svg';
import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';

type Project = {
    description: string;
    image: StaticImageData;
    link: string;
    title: string;
};

interface IProjectCardProps {
    projects: Project[];
}

export const ProjectCard = ({ projects }: IProjectCardProps) => {
    return projects.map(({ description, image, title, link }, index) => (
        <div key={index} className={styles.project}>
            <a className={styles.link} href={link} target="_blank" rel="noreferrer noopener">
                <Image
                    alt="Project Image"
                    className={styles.projectImage}
                    height={226}
                    placeholder="blur"
                    quality={100}
                    src={image}
                    width={360}
                />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.viewBlock}>
                    <span className={styles.linkText}>Visit site</span>
                    <Image
                        alt="Arrow icon"
                        className={styles.linkIcon}
                        src={arrowIcon}
                        width={16}
                    />
                </div>
            </a>
        </div>
    ));
};
