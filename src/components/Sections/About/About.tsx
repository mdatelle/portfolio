import { Button } from '@/components/Button/Button';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Skills } from '@/components/Skills/Skills';
import { SocialIcons } from '@/components/SocialIcons/SocialIcons';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.section}>
            <SectionTitle title="About" subtitle="What I do for a living" />
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h3>My Story</h3>
                    <p>
                        Hi, I’m Michael Datelle, I’m an experienced Software Engineer and UI
                        Designer. My experience dates back to the early 2000’s where I began my
                        career as a web designer. I eventually moved into the engineering side of
                        things and became a full stack software engineer. This broad professional
                        experience has helped in becoming a trusted liaison between design and
                        engineering teams in the roles I’ve held.
                    </p>
                    <p>
                        I recently launched my own B2C SaaS product called{' '}
                        <a
                            href="https://www.stashit.app"
                            title="Stashit link"
                            target="_blank"
                            rel="noreferrer noopener">
                            Stashit
                        </a>
                        , which provides a centralized system for organizing emails, attachments,
                        files, images, and web content, making cloud storage more efficient and
                        accessible for users that want to stay organized.{' '}
                    </p>
                    <div className={styles.links}>
                        <Button>Get In Touch</Button>
                        <SocialIcons />
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <h3>My Skill Set</h3>
                    <Skills />
                </div>
            </div>
        </section>
    );
};
