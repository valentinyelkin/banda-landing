import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './userFlow.module.scss';

const UserFlow: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.dcrUserFlow}>
      <img src="/images/projects/dcr/corner-top.png" alt="corner" />
      <div className={styles.dcrUserFlowBack}>
        <div className={styles.dcrUserFlowWrapper}>
          <img
            src="/images/projects/dcr/itinerary.png"
            alt="itinerary"
            className={styles.dcrUserFlowItinerary}
          />
          <div className={styles.dcrUserFlowText}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
            >
              <h2>User flow</h2>
            </AnimationOnScroll>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
                delay={0.5}
              >
                The relationship between pages and their main elements was
                complicated. For clarity and ease of perception a convenient
                User Flow was created.
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
                delay={0.7}
              >
                The connections shown in this diagram has improved the
                perception and navigation process in the application.
              </AnimationOnScroll>
            </p>
          </div>
          <div className={styles.dcrUserFlowImage}>
            <img
              src={
                isMobile
                  ? '/images/projects/dcr/user-friendly-workflow-automatization-mobile.png'
                  : '/images/projects/dcr/user-friendly-workflow-automatization.png'
              }
              alt="User-friendly workflow automatization"
            />
          </div>
        </div>
        <img
          src="/images/projects/dcr/user-friendly-workflow-automatization-map.png"
          alt="User-friendly workflow automatization map"
          className={styles.dcrUserFlowMap}
        />
      </div>
    </section>
  );
};

export default UserFlow;
