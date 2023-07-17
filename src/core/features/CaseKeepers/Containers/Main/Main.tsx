import Image from 'next/image';
import React from 'react';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './main.module.scss';

const Main: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersMain}>
      {!isMobile && (
        <Image
          src="/images/projects/caseKeepers/web-solution-for-therapists.webp"
          alt="Web solution for therapists"
          width={3846}
          height={2452}
        />
      )}
      <div className={styles.keepersMainContent}>
        <p className={styles.keepersMainText}>Web • Mobile</p>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h1>
            CaseKeepers - <span>Service for professionals & their clients</span>
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
          as="span"
        >
          <p>
            Convenient and innovative collaboration suite for lawyers,
            therapists and their clients. It is smart. Convenient and new
            Collaboration Suite
          </p>
        </AnimationOnScroll>
      </div>
      {isMobile ? (
        <div className={styles.keepersMainDecors}>
          <img
            src="/images/projects/caseKeepers/web-solution-for-therapists-mobile.png"
            alt="Web solution for therapists"
          />
          <img
            src="/images/projects/caseKeepers/web-solution-for-therapists-decor.png"
            alt="Web solution for therapists decor"
            className={styles.keepersMainDecor}
          />
        </div>
      ) : null}
    </section>
  );
};

export default Main;
