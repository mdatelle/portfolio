import styles from './Skills.module.css';

type Skill = {
    description: string;
    title: string;
};

interface ISkillsProps {
    skills: Skill[];
}

export const Skills = ({ skills }: ISkillsProps) => {
    return skills.map(({ description, title }, index) => (
        <div key={index} className={styles.block}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    ));
};
