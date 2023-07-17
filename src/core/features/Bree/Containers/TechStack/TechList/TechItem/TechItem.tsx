import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './techItem.module.scss';

interface TechItemProps {
  img: string;
  name?: string;
  alt: string;
  style?: string;
}

const TechItem: React.FC<TechItemProps> = ({ img, name, alt, style }) => {
  const containerItemStyles = classnames(styles.containerItem, {
    [styles.containerItemBottom]: style,
  });

  const nameStyles = classnames(styles.name, {
    [styles.nameTop]: style,
  });
  return (
    <div className={containerItemStyles}>
      <div className={styles.wrapper}>
        <Image src={img} alt={alt} width={120} height={137} />
        <span className={nameStyles}>{name}</span>
      </div>
    </div>
  );
};

export default TechItem;
