'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/Button/Button';
import emailjs from '@emailjs/browser';
import { mailConfig } from '@/lib/mail';
import styles from './ContactForm.module.css';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const form = useRef<HTMLFormElement>(null);
    const currentForm = form.current;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty }
    } = useForm({ defaultValues: { name: '', email: '', message: '' } });

    const sendEmail = () => {
        const { publicId, serviceId, templateId } = mailConfig;

        if (currentForm === null) return;

        emailjs.sendForm(serviceId, templateId, currentForm, publicId).then(
            (result) => {
                if (result.status === 200) {
                    setIsSuccess(true);
                }
                reset();
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    useEffect(() => {
        if (isDirty) {
            setIsSuccess(false);
        }
    }, [isDirty]);

    return (
        <div className={styles.container}>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <p>
                    Feel free to reach out if you have any questions or if you’re interested in
                    working with me on your next project.
                </p>
                {isSuccess && <p className={styles.message}>Message successfully sent!</p>}
                <div className={styles.group}>
                    <label htmlFor="name">
                        Name <span>*</span>
                    </label>
                    <input
                        id="name"
                        placeholder="Your name"
                        type="text"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className={styles.error}>Name is required</span>}
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">
                        Email <span>*</span>
                    </label>
                    <input
                        id="email"
                        placeholder="Your email"
                        type="email"
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span className={styles.error}>Email is required</span>}
                </div>
                <div className={styles.group}>
                    <label htmlFor="message">
                        Message <span>*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Enter a message"
                        {...register('message', { required: true })}
                    />
                    {errors.message && <span className={styles.error}>Message is required</span>}
                </div>
                <div className={styles.sendButton}>
                    <Button type="submit" value="Send">
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
};
