import { ChangeEvent, ReactNode, useState } from 'react';
import styles from '@/components/Select/Select.module.css';

type Option = {
    company: string;
};

interface ISelectProps {
    children?: ReactNode;
    onSelect?: (selectedOption: number) => void;
    options: Option[];
}

export const Select = ({ children, onSelect, options }: ISelectProps) => {
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (onSelect) {
            onSelect(Number(event.target.value));

            setSelectedOption(Number(event.target.value));
        }
    };

    return (
        <div className={styles.container}>
            <select
                className={styles.select}
                id="select"
                value={selectedOption}
                onChange={handleOnChange}>
                {options.map((option, index) => (
                    <option key={index} value={index}>
                        {option.company}
                    </option>
                ))}
            </select>
            <label className={styles.overlay} htmlFor="select">
                {children}
            </label>
        </div>
    );
};
