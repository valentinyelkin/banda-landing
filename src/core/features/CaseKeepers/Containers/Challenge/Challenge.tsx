import React from 'react';
import styles from './challenge.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.keepersChallenge}>
      <div className={styles.keepersChallengeWrapper}>
        <div className={styles.caseKeepersChallengeSolution}>
          <div
            className={`${styles.caseKeepersItem} ${styles.caseKeepersItemChallenge}`}
          >
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
            >
              <h2>Challenge</h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.3}
              as="span"
            >
              <p className={styles.textWithSpacing}>TWO CRUCIAL POINTS WERE:</p>
              <ul>
                <li>
                  <p>
                    to optimize file saving process, so that hosting costs could
                    be reduced
                  </p>
                </li>
                <li>
                  <p>
                    to secure data storage in compliance with GDPR (General Data
                    Protection Regulation), which can assure evidence
                    admissibility in court and clients’ confidentiality
                  </p>
                </li>
              </ul>
            </AnimationOnScroll>
          </div>
          <div
            className={`${styles.caseKeepersItem} ${styles.caseKeepersItemSolution}`}
          >
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
            >
              <h2>Solution</h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.3}
              as="span"
            >
              <p>
                The challenge of file saving optimization was solved with
                picture compression and audio/video conversion within reasinable
                bounds, so that a user doesn’t notice the compression. <br />
                <br />
                To ensure secure data storage, the back-end architecture was
                designed in such way that undesirable people cannot have access
                to the data. Advanced authorization techniques were used in the
                development process.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <img
        src="/images/projects/caseKeepers/challenge-decor-right.png"
        alt="CaseKeepers decor"
        className={styles.keepersChallengeDecor}
      />
    </section>
  );
};

export default Challenge;
