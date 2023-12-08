import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import styles from './Projects.module.css';
import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';

export const Projects = () => {
    return (
        <section id="projects" className={styles.section}>
            <SectionTitle title="Projects" subtitle="Recent projects I’ve worked on" />
            <div className={styles.container}>
                <div className={styles.projects}>
                    <ProjectCard projects={projects} />
                </div>
            </div>
        </section>
    );
};
