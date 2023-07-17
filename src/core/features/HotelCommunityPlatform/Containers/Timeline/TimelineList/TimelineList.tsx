import { FC } from 'react';
import { timelineList } from '../../../../../lists/hotelCommunityPlatform';
import TimelineItem from './TimelineItem/TimelineItem';
import styles from './timelineList.module.scss';

const TimelineList: FC = () => {
  return (
    <div className={styles.list}>
      {timelineList.map(
        ({ direction, months, delay, id, containerClasses }) => (
          <TimelineItem
            key={id}
            direction={direction}
            months={months}
            delay={delay}
            containerClasses={containerClasses}
          />
        ),
      )}
    </div>
  );
};

export default TimelineList;
