import React, { FC } from 'react';
import Heading, { TextAlign } from '../../Heading/Heading';
import TimelineGraph from './TimelineGraph/TimelineGraph';
import styles from './timeline.module.scss';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';

const Timeline: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <Heading
            topText="Project"
            bottomText="timeline"
            textAlign={
              !isMobile && !isTablet ? TextAlign.CENTER : TextAlign.LEFT
            }
          />
        </div>
        <TimelineGraph />
      </div>
    </div>
  );
};

export default Timeline;
