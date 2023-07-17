import { FC } from 'react';
import classnames from 'classnames';
import styles from './item.module.scss';

export interface ItemProps {
  id?: number;
  description?: string;
  description1?: string;
  boldDescription1?: string;
  boldDescription2?: string;
  containerClasses?: string;
}

const Item: FC<ItemProps> = ({
  description,
  description1,
  boldDescription1,
  boldDescription2,
  containerClasses,
}) => {
  const containerStyles = classnames(
    styles.container,
    containerClasses && [styles[containerClasses]],
  );

  return (
    <li className={containerStyles}>
      <div className={styles.dot} />
      <div className={styles.wrapperDescription}>
        <span className={styles.boldDescription}>{boldDescription1}</span>
        <span className={styles.description}>{description}</span>
        <span className={styles.boldDescription}>{boldDescription2}</span>
        <span className={styles.description}>{description1}</span>
      </div>
    </li>
  );
};

export default Item;
