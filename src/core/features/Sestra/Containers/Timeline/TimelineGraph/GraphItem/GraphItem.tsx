import React, { FC } from 'react';
import { GraphColors } from '../TimelineGraph';
import styles from './graph-item.module.scss';
import Point from './Point';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../../../utils/useIsMobile';
import useIsTablet from '../../../../../../utils/useIsTablet';
import classNames from 'classnames';

type GraphItemProps = {
  color?: GraphColors;
  title: string;
  time?: string;
  order: number;
};

const GraphItem: FC<GraphItemProps> = ({
  color = GraphColors.GREY,
  title,
  time,
  order,
}) => {
  const duration = 1;
  const delay = duration * order;
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const pointWrapperClass = classNames({
    [styles.withShadow]: color !== GraphColors.GREY,
  });

  return (
    <li className={styles.graphItem} style={{ color }}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={duration}
        as="div"
        delay={delay}
        disabledAnimation={isTablet || isMobile}
      >
        <span className={pointWrapperClass}>
          <Point color={color} />
        </span>
      </AnimationOnScroll>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={duration}
        as="div"
        delay={delay}
        disabledAnimation={isTablet || isMobile}
      >
        <h3 className={styles.graphItemTitle}>{title}</h3>
        {time && <p className={styles.graphItemText}>{time}</p>}
      </AnimationOnScroll>
    </li>
  );
};

export default GraphItem;
