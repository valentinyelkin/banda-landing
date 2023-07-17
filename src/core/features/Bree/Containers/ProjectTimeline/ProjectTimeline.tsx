import React from 'react';
import Image from 'next/image';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import TimelineList from './TimelineList/TimelineList';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './projectTimeline.module.scss';

const ProjectTimeline: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.containerTimeline}>
      <div className={styles.wrapperTimeline}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          delay={0.5}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <h2 className={styles.timelineTitle}>Project timeline</h2>
        </AnimationOnScroll>
        <div className={styles.containerRings}>
          <div className={styles.lineWrapper}>
            <Image
              src={`/images/projects/Bree/line${
                isTablet || isMobile ? '-horizontal' : ''
              }.svg`}
              alt="Project timeline"
              width={isTablet || isMobile ? 4 : 1700}
              height={isTablet || isMobile ? 780 : 4}
            />
          </div>
          <TimelineList />
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
