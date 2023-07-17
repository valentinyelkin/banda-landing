import { FC } from 'react';
import styles from './detailItem.module.scss';

interface DetailItemProps {
  title: string;
  subTitle: string;
}

const DetailItem: FC<DetailItemProps> = ({ title, subTitle }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <span className={styles.subTitle}>{subTitle}</span>
    </div>
  );
};

export default DetailItem;
