import React from 'react';
import DescriptionItem from './DescriptionItem/DescriptionItem';
import classNames from 'classnames';
import styles from './descriptionsList.module.scss';

export interface List {
  id?: number;
  text: string;
  boldText?: string;
}

interface DescriptionsListProps {
  lists: List[];
  title?: string;
  classname?: string;
  titleClasses?: string;
}

const DescriptionsList: React.FC<DescriptionsListProps> = ({
  lists,
  title,
  classname,
  titleClasses,
}) => {
  const titleStyles = classNames(
    styles.titleDescription,
    titleClasses && [styles[titleClasses]],
  );
  return (
    <div className={styles.containerList}>
      <p className={titleStyles}>{title}</p>
      {lists.map(({ id, boldText, text }) => (
        <DescriptionItem
          text={text}
          boldText={boldText}
          key={id}
          classname={classname}
        />
      ))}
    </div>
  );
};

export default DescriptionsList;
