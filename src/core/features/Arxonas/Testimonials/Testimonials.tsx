import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './testimonials.module.scss';

const Testimonials: React.FunctionComponent = () => {
  return (
    <section className={styles.testimonialsMain}>
      <img
        src="/images/projects/arxonas/bg-testimonials.png"
        alt="Testimonials background"
        className={styles.testimonialsBg}
      />
      <img
        src="/images/projects/arxonas/bg-testimonials-mobile.png"
        alt="Testimonials background"
        className={styles.testimonialsMobileBg}
      />
      <div className={styles.testimonialsInfo}>
        <AnimationOnScroll animationName={AnimationNames.fadeIn} duration={1}>
          <h2>
            <span>Testimonials</span>
          </h2>
        </AnimationOnScroll>
        <div className={styles.testimonialsWrapper}>
          <div
            className={`${styles.testimonialsList} ${styles.testimonialsListFirst}`}
          >
            <div className={styles.testimonialsItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeIn}
                duration={1}
                as="span"
              >
                <p className={styles.testimonialsItemName}>
                  Prof. Dr. Burkhard Hock, tax advisor
                </p>
                <div className={styles.testimonialsItemBox}>
                  <p>
                    This management system will not only lead to time and cost
                    savings, but will also increase the quality of the
                    consulting services in the long term.
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className={styles.testimonialsItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeIn}
                duration={1}
                delay={0.2}
                as="span"
              >
                <p className={styles.testimonialsItemName}>
                  Brigitte Engl, tax advisor
                </p>
                <div className={styles.testimonialsItemBox}>
                  <p>
                    Although I have many years of experience as a tax
                    consultant, I have gained valuable knowledge and took the
                    provided requirements as a to-do.
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className={styles.testimonialsItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeIn}
                duration={1}
                delay={0.4}
                as="span"
              >
                <p className={styles.testimonialsItemName}>
                  Alexander F. Berndlmaier, tax advisor
                </p>
                <div className={styles.testimonialsItemBox}>
                  <p>
                    Arxonas shows every tax advisor the way through everyday
                    work and practice... Arxonas supports you in achieving
                    professional goals and gaining new freedoms. Thank you!
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.testimonialsCenter}>
            <img
              src="/images/projects/arxonas/logo-white.png"
              alt="Arxonas white logo"
              className={styles.arxonasWhiteLogo}
            />
          </div>
          <div
            className={`${styles.testimonialsList} ${styles.testimonialsListSecond}`}
          >
            <div className={styles.testimonialsItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeIn}
                duration={1}
                as="span"
              >
                <p className={styles.testimonialsItemName}>
                  Ursula Valier, tax advisor
                </p>
                <div className={styles.testimonialsItemBox}>
                  <p>
                    Thank you for the pleasant day! I took a lot with me. I am
                    sure that I will be able to implement a lot of it!
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className={styles.testimonialsItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeIn}
                duration={1}
                delay={0.2}
                as="span"
              >
                <p className={styles.testimonialsItemName}>
                  Monika Ruhl, tax advisor
                </p>
                <div className={styles.testimonialsItemBox}>
                  <p>
                    The Arxonas system clears my mind! With the system I have
                    all my professional and private challenges under control and
                    everything from a single source!
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className={styles.testimonialsItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeIn}
                duration={1}
                delay={0.4}
                as="span"
              >
                <p className={styles.testimonialsItemName}>
                  Nils Klaube, auditor, tax advisor
                </p>
                <div className={styles.testimonialsItemBox}>
                  <p>The concept is really practical and easy to use.</p>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
