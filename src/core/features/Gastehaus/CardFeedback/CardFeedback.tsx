import { FC } from 'react';
import Image from 'next/image';
import styles from './cardFeedback.module.scss';

interface CardFeedbackProps {
  name: string;
  img: string;
  social: string;
  feedback: string;
}

const CardFeedback: FC<CardFeedbackProps> = ({
  name,
  img,
  social,
  feedback,
}) => {
  return (
    <div className={styles.containerCardFeedback}>
      <div className={styles.quotes}>
        <Image
          src="/images/projects/Gastehaus/quotes.png"
          alt="quotes"
          layout="fill"
        />
      </div>
      <div className={styles.wrapperCard}>
        <div className={styles.wrapperImg}>
          <Image
            src={img}
            alt="photo"
            objectFit="cover"
            width="69"
            height="69"
          />
        </div>
        <div className={styles.wrapperFeedback}>
          <p className={styles.name}>{name}</p>
          <span className={styles.social}>{social}</span>
        </div>
      </div>
      <div className={styles.containerFeedback}>
        <span className={styles.feedback}>{feedback}</span>
      </div>
    </div>
  );
};

export default CardFeedback;
