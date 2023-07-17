import { FC } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';

interface CardProps {
  name: string;
  photo: string;
  feedback: string;
  position: string;
}

const Card: FC<CardProps> = ({ name, position, photo, feedback }) => {
  return (
    <div className={styles.container}>
      <p className={styles.feedback}>{feedback}</p>
      <div className={styles.line} />
      <div className={styles.wrapperBottomBlock}>
        <div className={styles.photo}>
          <Image src={photo} alt={name} width="100" height="100" />
        </div>
        <div className={styles.wrapperName}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
        <div className={styles.brackets}>
          <Image
            src="/images/projects/Hotel/results/brackets.svg"
            alt="brackets"
            width="80"
            height="75"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
