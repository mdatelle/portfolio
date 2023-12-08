'use client';

import { experience } from '@/lib/experience';
import { Resume } from '@/components/Resume/Resume';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import styles from './Work.module.css';

export const Work = () => {
    return (
        <section id="work" className={styles.section}>
            <SectionTitle title="Work" subtitle="My professional work experience" />
            <Resume experience={experience} />
        </section>
    );
};
