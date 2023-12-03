import styles from './Hero.module.css';
import { Button } from '@/components/Button/Button';

export const Hero = () => {
    return (
        <section className={styles.section}>
            <h1>
                Full Stack Engineer <span className={styles.titleHighlight}>{'//'}</span> UI
                Designer
            </h1>
            <h2>
                I design and build <span className={styles.highlight}>experiences</span> users love
            </h2>
            <div className={styles.image} />
            <Button>Recent Projects</Button>
        </section>
    );
};
