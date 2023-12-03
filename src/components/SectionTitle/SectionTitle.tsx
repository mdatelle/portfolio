import styles from './SectionTitle.module.css';

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
    );
};
