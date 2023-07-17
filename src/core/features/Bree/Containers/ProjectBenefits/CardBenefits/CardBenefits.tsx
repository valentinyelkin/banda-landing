import React from 'react';
import { Lists } from '../../../CardsList/CardsList';
import Image from 'next/image';
import styles from './cardBenefits.module.scss';

const CardBenefits: React.FC<Lists> = ({ img, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src={img}
          alt="icon benefits"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className={styles.title}>{title}</p>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default CardBenefits;
