import React from 'react';
import styles from './timelineItem.module.scss';

interface TimelineItemProps {
  num: number;
  classes: string;
  classesName: string;
  name: string;
  month: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  name,
  num,
  month,
  classes,
  classesName,
}) => {
  return (
    <div className={styles.wrapperRing}>
      <p className={styles[classes]}>{name}</p>
      <div className={styles[classesName]}>
        <p className={styles.number}>{num}</p>
        <span className={styles.monthWrapper}>{month}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
