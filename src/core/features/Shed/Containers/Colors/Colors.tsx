import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './colors.module.scss';

const Colors: React.FunctionComponent = () => {
  return (
    <section className={styles.shedColors}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={1}
        as="span"
      >
        <h2>Font and colors</h2>
      </AnimationOnScroll>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={1}
        delay={0.5}
        as="span"
      >
        <p>Font family - Roboto</p>
      </AnimationOnScroll>
      <div className={styles.shedColorsList}>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInLeft}
            duration={1}
          >
            <div className={styles.shedColorWrapper1}>
              <img src="/images/projects/Shed/color-1.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>#01454F</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInLeft}
            duration={1}
            delay={0.5}
          >
            <div className={styles.shedColorWrapper2}>
              <img src="/images/projects/Shed/color-2-b.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.75}
          >
            <p>#8cd50b</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInRight}
            duration={1}
            delay={0.5}
          >
            <div className={styles.shedColorWrapper3}>
              <img src="/images/projects/Shed/color-3.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.75}
          >
            <p>#000000</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInRight}
            duration={1}
          >
            <div className={styles.shedColorWrapper4}>
              <img src="/images/projects/Shed/color-4.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>#8A8A8A</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInLeft}
            duration={1}
          >
            <div className={styles.shedColorWrapper5}>
              <img src="/images/projects/Shed/color-5.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>#F3F5F6</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInLeft}
            duration={1}
            delay={0.5}
          >
            <div className={styles.shedColorWrapper6}>
              <img src="/images/projects/Shed/color-6.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.75}
          >
            <p>#2F80ED</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInRight}
            duration={1}
            delay={0.5}
          >
            <div className={styles.shedColorWrapper7}>
              <img src="/images/projects/Shed/color-7.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.75}
          >
            <p>#EB5757</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedColorsItem}>
          <AnimationOnScroll
            animationName={AnimationNames.rollInRight}
            duration={1}
          >
            <div className={styles.shedColorWrapper8}>
              <img src="/images/projects/Shed/color-8.png" alt="Shed Color" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>#EB5757</p>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Colors;
