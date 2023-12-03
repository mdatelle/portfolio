import { ContactForm } from '@/components/ContactForm/ContactForm';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <SectionTitle title="Contact" subtitle="Get in touch" />
            <ContactForm />
        </section>
    );
};
