import { FC } from 'react';
import styles from './timeItem.module.scss';
import classnames from 'classnames';

interface TimeItemProps {
  classname: string;
  classnameTitle?: string;
  title: string;
}

const TimeItem: FC<TimeItemProps> = ({ title, classname, classnameTitle }) => {
  const containerStyles = classnames(styles.containerTime, [styles[classname]]);
  const titleStyles = classnames(
    styles.title,
    classnameTitle && [styles[classnameTitle]],
  );

  return (
    <div className={containerStyles}>
      <p className={titleStyles}>{title}</p>
    </div>
  );
};

export default TimeItem;
