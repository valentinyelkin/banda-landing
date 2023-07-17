import React from 'react';
import Image from 'next/image';
import styles from './cardFeedback.module.scss';

interface CardFeedbackProps {
  feedback: string;
  img: string;
  name: string;
  career: string;
}

const CardFeedback: React.FC<CardFeedbackProps> = ({
  feedback,
  career,
  img,
  name,
}) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.wrapperText}>
        <div className={styles.wrapperTestimonials}>
          <span className={styles.title}>Testimonials</span>
        </div>
        <span className={styles.feedback}>{feedback}</span>
      </div>
      <div className={styles.person}>
        <div className={styles.photo}>
          <Image src={img} alt="photo" layout="fill" />
        </div>
        <div className={styles.personName}>
          <span className={styles.name}>{name}</span>
          <span className={styles.career}>{career}</span>
        </div>
        <div className={styles.quotes}>
          <Image
            src="/images/projects/Bree/cardsResults/quotes.png"
            alt="quotes"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default CardFeedback;
