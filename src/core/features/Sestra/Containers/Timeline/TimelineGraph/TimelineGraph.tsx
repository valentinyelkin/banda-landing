import React, { FC } from 'react';
import GraphItem from './GraphItem/GraphItem';
import styles from './timeline-graph.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../../utils/useIsMobile';
import useIsTablet from '../../../../../utils/useIsTablet';

export enum GraphColors {
  GREY = '#D1D1D1',
  GREEN = '#7F9E2F',
  BLUE = '#173864',
}

const TimelineGraph: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <div className={styles.timelineGraph}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        as="div"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.graphLine} />
      </AnimationOnScroll>
      <ul className={styles.graphList}>
        <GraphItem title="Design" order={0} />
        <GraphItem
          color={GraphColors.GREEN}
          title="Front-end"
          time="3 months"
          order={1}
        />
        <GraphItem
          color={GraphColors.BLUE}
          title="Back-end"
          time="5 months"
          order={2}
        />
        <GraphItem title="Production" order={3} />
      </ul>
    </div>
  );
};

export default TimelineGraph;
