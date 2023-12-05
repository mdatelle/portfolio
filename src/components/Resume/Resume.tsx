'use client';

import { useCallback, useState } from 'react';
import { Button } from '@/components/Button/Button';
import { experience } from '@/lib/experience';
import Image from 'next/image';
import { Select } from '@/components/Select/Select';
import styles from '@/components/Resume/Resume.module.css';
import tabDot from '../../../public/tab-dot.svg';
import tabDotActive from '../../../public/tab-dot-active.svg';
import tabLineActive from '../../../public/tab-line-active.svg';
import tabLine from '../../../public/tab-line.svg';

export const Resume = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const getActiveTabImage = (index: number) => {
        const length: number = experience.length - 1;

        if (activeTab === index && index < length) {
            return tabLineActive;
        } else if (activeTab === index && length === index) {
            return tabDotActive;
        } else if (activeTab !== index && length === index) {
            return tabDot;
        } else {
            return tabLine;
        }
    };
    const handleOnClick = (index: number) => {
        setActiveTab(index);
    };
    const handleOnSelect = useCallback((selectedOption: number) => {
        setActiveTab(selectedOption);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.companyList}>
                <div className={styles.tabs}>
                    {experience.map(({ company }, index) => (
                        <div
                            key={index}
                            className={styles.tab}
                            role="tab"
                            aria-selected={activeTab === index}>
                            <a
                                className={`${styles.tabButton} ${
                                    activeTab === index ? styles.active : ''
                                }`}
                                onClick={() => handleOnClick(index)}>
                                {company}
                            </a>
                            <Image alt="Tab line image" src={getActiveTabImage(index)} />
                        </div>
                    ))}
                    <a href={'/michael-datelle.pdf'} download="michael-datelle.pdf" target="_blank">
                        <Button>Download Full Resume</Button>
                    </a>
                </div>
            </div>
            <div className={styles.select}></div>
            <Select options={experience} onSelect={handleOnSelect}>
                {experience[activeTab].company}
                <Image alt="Select Icon" height={24} priority src="/chevron-down.svg" width={24} />
            </Select>
            {experience.map(({ company, period, position, Mdx }, index) => (
                <>
                    <div
                        key={index}
                        className={`${styles.resumeItem} ${
                            activeTab === index ? styles.active : ''
                        }`}
                        role="tabcontent"
                        aria-selected={activeTab === index}>
                        <h3>
                            {company} - {position}
                        </h3>
                        <span>{period}</span>
                        <Mdx />
                    </div>
                </>
            ))}
        </div>
    );
};
