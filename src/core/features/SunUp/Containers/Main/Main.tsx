import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './main.module.scss';

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpMain}>
      <div className={styles.sunUpMainWrapper}>
        <div className={styles.sunUpMainInfo}>
          <AnimationOnScroll
            duration={1}
            animationName={AnimationNames.fadeInLeft}
            as="span"
          >
            <h1 className={styles.title}>SunUp</h1>
            <div className={styles.sunUpMainLogo}>
              <img
                src="/images/projects/SunUp/main-logo.png"
                alt="SunUp Logo"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={1}
            animationName={AnimationNames.fadeInLeft}
            delay={0.5}
            as="span"
          >
            <p>
              SunUp is an interactive web application with 3D animations to
              automatically layout solar panels on rooftops.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.sunUpInterface}>
          <Image
            src="/images/projects/SunUp/solar-panels-on-rooftops.webp"
            alt="Solar panels on rooftops"
            width={1287}
            height={840}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
