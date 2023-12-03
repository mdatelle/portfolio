import styles from './Skills.module.css';
import { skills } from '@/lib/skills';

export const Skills = () => {
    return skills.map(({ description, title }, index) => (
        <div key={index} className={styles.block}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    ));
};
