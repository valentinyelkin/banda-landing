import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './problems.module.scss';

const Problems: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpProblems}>
      <div className={styles.sunUpProblemsWrapper}>
        <div className={styles.sunUpProblemsInfo}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <h3>Problems</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.8}
          >
            <p>
              Solar Roof is comparable in price to a typical roof with solar
              panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
              any national provider and take control of your monthly electricity
              bill.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.sunUpProblemsBlocks}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={0.7}
            delay={0.5}
          >
            <div className={styles.sunUpProblemsGoogle}>
              <p>Google Maps</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={0.7}
            delay={0.7}
          >
            <div className={styles.sunUpProblemsImport}>
              <p>Import PNG/JPG</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={0.7}
            delay={0.9}
          >
            <div className={styles.sunUpProblemsWhiteboard}>
              <p>Whiteboard</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={0.5}
          >
            <div className={styles.sunUpProblemsSmall} />
            <div className={styles.sunUpProblemsMiddle} />
            <div className={styles.sunUpProblemsBig} />
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.sunUpProblemsInterface}>
        <img
          src="/images/projects/SunUp/problems-interface.png"
          alt="problems interface"
        />
      </div>
    </section>
  );
};

export default Problems;
