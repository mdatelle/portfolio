import arrowIcon from '../../../../public/arrow-right.svg';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import styles from './Projects.module.css';
import { projects } from '@/lib/projects';

export const Projects = () => {
    return (
        <section className={styles.section}>
            <SectionTitle title="Projects" subtitle="Recent projects I’ve worked on" />
            <div className={styles.container}>
                <div className={styles.projects}>
                    {projects.map(({ description, image, title, link }, index) => (
                        <div key={index} className={styles.project}>
                            <a
                                className={styles.link}
                                href={link}
                                target="_blank"
                                rel="noreferrer noopener">
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
                    ))}
                </div>
            </div>
        </section>
    );
};
