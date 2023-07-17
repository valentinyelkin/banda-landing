import { FC } from 'react';
import Title from '../Title/Title';
import { strings } from '../../../../lists/spaceBooking';
import TimelineItem from './TimelineItem/TimelineItem';
import Image from 'next/image';
import TimeItem from './TimeItem/TimeItem';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './timeline.module.scss';

const Timeline: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={0.5}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <Title title={strings.titleTimeline} classNames="titleTimeline" />
      </AnimationOnScroll>
      <div className={styles.wrapperItems}>
        <div className={styles.firstItem}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <TimelineItem
              title={strings.webApp}
              phase={strings.phase1}
              months={strings.months6}
              one={strings.one}
              five={strings.five}
              months1={strings.months1}
              months5={strings.months5}
              inProgressMob={strings.inProgressMob}
            />
          </AnimationOnScroll>
          <TimeItem classname="containerDesign" title={strings.design} />
          <TimeItem
            classname="containerDevelopment"
            title={strings.development}
          />
          <div className={styles.lines}>
            <Image
              src="/images/projects/SpaceBooking/timeline/lines.svg"
              alt="lines"
              width="689"
              height="1278"
            />
          </div>
        </div>
        <div className={styles.secondItem}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={1.5}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <TimelineItem
              title={strings.mobileApp}
              phase={strings.phase2}
              wrapperClassName="wrapperInProgress"
            />
          </AnimationOnScroll>
          <TimeItem
            classname="containerInProgress"
            classnameTitle="titleInProgress"
            title={strings.inProgress}
          />
          <TimeItem
            classname="containerProduction"
            title={strings.production}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
