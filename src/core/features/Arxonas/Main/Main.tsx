import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './main.module.scss';

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.arxonasMain}>
      <img
        src="/images/projects/arxonas/bg-main.png"
        alt="Arxonas main background"
        className={styles.mainBg}
      />
      <img
        src="/images/projects/arxonas/bg-main-mobile.png"
        alt="Arxonas main background"
        className={styles.mainMobileBg}
      />
      <div className={styles.arxonasMainWrapper}>
        <div className={styles.arxonasMainInfo}>
          <img src="/images/projects/arxonas/logo.png" alt="Arxonas logo" />
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={0.7}
            as="span"
          >
            <h1>Arxonas</h1>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={0.7}
            delay={0.3}
            as="span"
          >
            <p>
              Arxonas was born out of the desire to finally create a holistic
              management solution, specially tailored to the needs of tax firms.
              Now it is possible to permanently get a grip on all the challenges
              in tax firms and navigate firms safely and confidently through all
              the ups and downs.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.arxonasMainImages}>
          <div className={styles.arxonasDevices}>
            <Image
              src="/images/projects/arxonas/tax-management-software-for-all-devices.webp"
              alt="Tax management software for all devices"
              width={3289}
              height={2087}
            />
          </div>
          <img
            src="/images/projects/arxonas/main-arxonas-mobile.png"
            alt="Arxonas name"
            className={styles.arxonasNameMobile}
          />
          <img
            src="/images/projects/arxonas/main-arxonas.png"
            alt="Arxonas name"
            className={styles.arxonasName}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
