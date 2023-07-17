import React, { FC } from 'react';
import styles from './Results.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image from 'next/image';

const Results: FC = (): JSX.Element => {
  return (
    <section className={globalStyles.section}>
      <div className={globalStyles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_text}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInDownBig}
              duration={1}
            >
              <h2 className={globalStyles.title}> Results</h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUpBig}
              duration={1}
            >
              <div className={globalStyles.text}>
                <p>
                  We have created a
                  <span>
                    mobile-friendly staff collaboration and task management
                    progressive web application{' '}
                  </span>
                  with an intuitive user interface and powerful functionality.
                  The system helps hotel teams collaborate in real time and
                  enables quality performance, supervision and comprehensive
                  insights into hotel operations 24/7.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <div className={styles.card}>
                <div>
                  <div className={styles.user}>
                    <div className={styles.avatar}>
                      <Image
                        src="/images/projects/Insidely/photo.png"
                        alt=""
                        width="120px"
                        height="120px"
                      />
                    </div>
                    <div>
                      <div className={styles.name}>Thomas T.</div>
                      <div className={styles.job}>CEO</div>
                    </div>
                    <div className={styles.figures}>
                      <div className={styles.figure} />
                      <div className={styles.figure} />
                    </div>
                  </div>
                </div>
                <div className={styles.card_text}>
                  BandaPixels has demonstrated professionalism in every aspect
                  of our cooperation. The development team was able to come up
                  with the ideal solutions for all our requirements. In the end,
                  we have a smoothly-functioning application that meets our
                  management priorities. We will definitely recommend
                  BandaPixels as a trusted IT company.
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
