import { FC } from 'react';
import Title from '../Title/Title';
import { strings } from '../../../../lists/hotelCommunityPlatform';
import TimelineList from './TimelineList/TimelineList';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import TimelineItem from './TimelineList/TimelineItem/TimelineItem';
import BlueBackground from '../BlueBackground/BlueBackground';
import styles from './timeline.module.scss';
import Line from '../Line/Line';

const Timeline: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <Title title={strings.titleTimeline} classesWrapper="wrapperTimeline" />
      <BlueBackground classesBlueBg="timelineBg" />
      <div className={styles.wrapper}>
        <div className={styles.timelineLineWrapper}>
          <Line classesLine="lineTimeline" />
        </div>

        <div className={styles.wrapperList}>
          <TimelineList />
          <div className={styles.wrapperLastItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeIn}
              duration={1}
              delay={1.8}
              as="span"
              disabledAnimation={isTablet || isMobile}
            >
              <TimelineItem
                months={strings.half}
                direction={strings.directionTesting}
                containerClasses="containerTesting"
              />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeIn}
              duration={1}
              delay={2.2}
              as="span"
              disabledAnimation={isTablet || isMobile}
            >
              <span className={styles.release}>{strings.release}</span>
            </AnimationOnScroll>
          </div>
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={2.4}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.eightMonths}>
            <span className={styles.eight}>{strings.eight}</span>
            <span className={styles.months}>{strings.months}</span>
            <div className={styles.lineLeft} />
            <div className={styles.lineRight} />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Timeline;
