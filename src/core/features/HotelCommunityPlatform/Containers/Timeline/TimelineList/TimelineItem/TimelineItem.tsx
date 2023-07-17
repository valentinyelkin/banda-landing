import { FC } from 'react';
import classnames from 'classnames';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../../../utils/useIsTablet';
import useIsMobile from '../../../../../../utils/useIsMobile';
import { strings } from '../../../../../../lists/hotelCommunityPlatform';
import styles from './timelineItem.module.scss';

interface TimelineItemProps {
  direction: string;
  months: string;
  containerClasses?: string;
  delay?: number;
}

const TimelineItem: FC<TimelineItemProps> = ({
  direction,
  months,
  containerClasses,
  delay,
}) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const containerStyles = classnames(
    styles.container,
    containerClasses && [styles[containerClasses]],
  );

  return (
    <>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={delay}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={containerStyles}>
          <span className={styles.direction}>{direction}</span>
          <div className={styles.wrapperMonths}>
            <span className={styles.num}>{months}</span>
            <span className={styles.months}>{strings.months}</span>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default TimelineItem;
