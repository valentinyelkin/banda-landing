import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './timeline.module.scss';

const Timeline: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.shedTimeline}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={1}
        as="span"
      >
        <h2>Project timeline</h2>
      </AnimationOnScroll>
      <div className={styles.shedTimelineWrapper}>
        <div className={styles.shedTimelineTime}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="span"
          >
            <img
              src={
                isMobile
                  ? '/images/projects/Shed/time-mobile.png'
                  : '/images/projects/Shed/time.png'
              }
              alt="Shed Time"
            />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          as="span"
        >
          <p>
            At all stages of the Sarai project, certain time intervals were
            determined, which amount to a total of - Total timeline.
          </p>
        </AnimationOnScroll>
      </div>
      <img src="/images/projects/Shed/time-graphic.png" alt="Time-graphic" />
    </section>
  );
};

export default Timeline;
