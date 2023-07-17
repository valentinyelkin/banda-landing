import React from 'react';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './timeline.module.scss';

const Timeline: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersTimeline}>
      <div className={styles.keepersTimelineWrapper}>
        <div className={styles.keepersTimelineContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2>Project Timeline</h2>
          </AnimationOnScroll>
        </div>
      </div>
      {isMobile ? (
        <div className={styles.keepersTimelineImagesWrapper}>
          <img
            src="/images/projects/caseKeepers/custom-web-service-development-timeline-mobile.svg"
            alt="Custom web service development timeline"
          />
          <img
            src="/images/projects/caseKeepers/custom-web-service-development-timeline-mobile-decor-1.png"
            alt="Custom web service development timeline decor"
            className={styles.keepersTimelineDecorMobile1}
          />
          <img
            src="/images/projects/caseKeepers/custom-web-service-development-timeline-mobile-decor-2.png"
            alt="Custom web service development timeline decor"
            className={styles.keepersTimelineDecorMobile2}
          />
        </div>
      ) : (
        <>
          <img
            src="/images/projects/caseKeepers/custom-web-service-development-timeline.svg"
            alt="Custom web service development timeline"
            className={styles.keepersTimelineImg}
          />
          <img
            src="/images/projects/caseKeepers/custom-web-service-development-timeline-tablet.svg"
            alt="Custom web service development timeline"
            className={styles.keepersTimelineTablet}
          />
          <img
            src="/images/projects/caseKeepers/custom-web-service-development-timeline-decor-1.png"
            alt="Custom web service development timeline decor"
            className={styles.keepersTimelineDecor1}
          />
          <img
            src="/images/projects/caseKeepers/custom-web-service-development-timeline-decor-2.png"
            alt="Custom web service development timeline decor"
            className={styles.keepersTimelineDecor2}
          />
        </>
      )}
    </section>
  );
};

export default Timeline;
