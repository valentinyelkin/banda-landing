import { FC } from 'react';
import useIsTablet from '../../../../../utils/useIsTablet';
import useIsMobile from '../../../../../utils/useIsMobile';
import classnames from 'classnames';
import styles from './timelineItem.module.scss';

interface TimelineItemProps {
  title: string;
  phase: string;
  months?: string;
  months1?: string;
  months5?: string;
  five?: string;
  one?: string;
  inProgressMob?: string;
  wrapperClassName?: string;
}

const TimelineItem: FC<TimelineItemProps> = ({
  title,
  months,
  phase,
  months1,
  months5,
  one,
  five,
  inProgressMob,
  wrapperClassName,
}) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const wrapperStyles = classnames(
    styles.wrapper,
    wrapperClassName && [styles[wrapperClassName]],
  );

  return (
    <div className={wrapperStyles}>
      {(isTablet || isMobile) && (
        <>
          <div className={styles.wrapperMonths1}>
            <p className={styles.num}>{one}</p>
            <span className={styles.months1}>{months1}</span>
          </div>
          <div className={styles.wrapperMonths5}>
            <p className={styles.num}>{five}</p>
            <span className={styles.months5}>{months5}</span>
          </div>
          <span className={styles.inProgressMob}>{inProgressMob}</span>
        </>
      )}
      <span className={styles.phase}>{phase}</span>
      <div className={styles.wrapperTitle}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.months}>{months}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
