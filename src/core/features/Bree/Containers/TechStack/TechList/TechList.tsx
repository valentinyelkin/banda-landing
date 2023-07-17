import React from 'react';
import TechItem from './TechItem/TechItem';
import styles from './techList.module.scss';

interface TechList {
  img: string;
  alt: string;
  id: number;
  style: string;
  name?: string;
}

interface TechListProps {
  list: TechList[];
}

const TechList: React.FC<TechListProps> = ({ list }) => {
  return (
    <div className={styles.containerList}>
      {list.map(({ id, img, name, alt, style }) => (
        <TechItem key={id} img={img} name={name} alt={alt} style={style} />
      ))}
    </div>
  );
};

export default TechList;
