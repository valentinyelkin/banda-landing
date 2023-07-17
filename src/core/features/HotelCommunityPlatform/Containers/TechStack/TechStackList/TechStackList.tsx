import { FC } from 'react';
import TechStackItem from './TechStackItem/TechStackItem';
import styles from './techStackList.module.scss';

interface TeachList {
  card: string;
  delay: number;
  alt: string;
}

interface TechStackListProps {
  listTechStack: TeachList[];
}

const TechStackList: FC<TechStackListProps> = ({ listTechStack }) => {
  return (
    <ul className={styles.container}>
      {listTechStack.map(({ card, alt, delay }) => (
        <TechStackItem key={alt} card={card} alt={alt} delay={delay} />
      ))}
    </ul>
  );
};

export default TechStackList;
