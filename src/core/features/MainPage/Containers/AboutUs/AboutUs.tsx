import React, { useRef } from 'react';
import useGrid from '../../../../utils/useGrid';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';

import styles from './AboutUs.module.scss';
import useRedrawGrid from '../../../../utils/useRedrawGrid';

const AboutUs: React.FunctionComponent = () => {
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  useGrid(refGridWrapper, 'rgba(167,167,167,0.1)', 'rgba(23, 23, 24, 0.4)');
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.aboutWrapper}
      ref={refGridWrapper}
      data-header="black"
    >
      <h2 className={styles.aboutUsBig}>
        <span>About</span>
        <span />
      </h2>
      <div className={styles.virtuesWrapper}>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>est. 2014</h4>
          <p className={styles.virtuesDescription}>
            Customers trust us,
            <br />
            you can too ...
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>8 simultaneous projects</h4>
          <p className={styles.virtuesDescription}>
            We do not keep many projects at the same time to make them all of
            the top-quality.
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>Location:</h4>
          <p className={styles.virtuesDescription}>
            <span>Poland</span>
            <span>Ukraine</span>
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>
            We build a team based
            <br />
            on the project requirements
            <br />
            in our office space
          </h4>
          <p className={styles.virtuesDescription}>
            you do not pay for what you do not need
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>
            We are in touch
            <br />
            at your time
          </h4>
          <p className={styles.virtuesDescription}>
            Your time zone matches our work hours / work schedule at all cases.
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>100+ completed projects</h4>
          <p className={styles.virtuesDescription}>
            You can go at check it out. Try us with yours!
          </p>
        </div>
      </div>
      <AnimatedLine backgroundColor="#BDBDBD" filledColor="#333" />
    </section>
  );
};

export default AboutUs;
