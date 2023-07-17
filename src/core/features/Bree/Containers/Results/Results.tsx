import React from 'react';
import Image from 'next/image';
import CardsResultsList from './CardsList/CardsResultsList';
import styles from './results.module.scss';

const Results: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapperText}>
        <div className={styles.circleTop}>
          <Image
            src="/images/projects/Bree/circle_features_lower.svg"
            alt="circle"
            layout="fill"
          />
        </div>
        <h2 className={styles.title}>Results</h2>
        <span className={styles.description}>
          Our team has enjoyed building meaningful services and products that
          bridge the gap between the users’ needs & goals of businesses. This
          project was quite a challenge, but we have successfully completed it
          following the latest development trends.
        </span>
      </div>
      <div className={styles.background}>
        <div className={styles.circleTopBackground}>
          <Image
            src="/images/projects/Bree/circle_features_lower.svg"
            alt="circle"
            layout="fill"
          />
        </div>
        <Image
          src="/images/projects/Bree/background_results.svg"
          alt="background"
          layout="fill"
        />
      </div>
      <div className={styles.containerList}>
        <CardsResultsList />
      </div>
    </section>
  );
};

export default Results;
