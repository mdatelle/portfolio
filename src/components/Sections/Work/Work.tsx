import { Resume } from '@/components/Resume/Resume';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import styles from './Work.module.css';

export const Work = () => {
    return (
        <section className={styles.section}>
            <SectionTitle title="Work" subtitle="My professional work experience" />
            <Resume />
        </section>
    );
};
