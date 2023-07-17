import React from 'react';
import Image from 'next/image';
import styles from './cardChallenges.module.scss';

interface CardChallengesProps {
  img: string;
  title: string;
  description: string;
}

const CardChallenges: React.FC<CardChallengesProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.image}>
        <Image src={img} alt="card icon" layout="fill" />
      </div>
      <p className={styles.titleCard}>{title}</p>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default CardChallenges;
