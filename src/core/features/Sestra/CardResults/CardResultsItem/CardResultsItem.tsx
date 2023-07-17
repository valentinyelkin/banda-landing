import Image from 'next/image';
import React, { FC } from 'react';
import styles from './card-results-item.module.scss';

export type CardResultsItemProps = {
  icon: string;
  text: string;
};

const CardResultsItem: FC<CardResultsItemProps> = ({ icon, text }) => {
  return (
    <li className={styles.cardResultsItem}>
      <Image src={icon} alt="" width={40} height={40} layout="fixed" />
      {text}
    </li>
  );
};

export default CardResultsItem;
