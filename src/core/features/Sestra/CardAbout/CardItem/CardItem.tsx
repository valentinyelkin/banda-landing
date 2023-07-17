import Image from 'next/image';
import React, { FC } from 'react';
import { CardAboutProps, CardAboutVariant } from '../CardAbout';
import styles from './card-item.module.scss';
import classNames from 'classnames';

export type CardAboutItem = {
  icon?: string;
  title: string;
};

export type CardItemProps = Pick<CardAboutProps, 'variant'> & CardAboutItem;

const CardItem: FC<CardItemProps> = ({ icon, title, variant }) => {
  const titleClasses = classNames(styles.itemTitle, {
    [styles.bigTitle]: variant !== CardAboutVariant.TECH_STACK,
  });

  return (
    <div className={styles.cardItem}>
      {icon && (
        <span className={styles.itemIcon}>
          <Image src={icon} alt={title} width={100} height={100} />
        </span>
      )}

      <p className={titleClasses}>
        {title}{' '}
        {variant === CardAboutVariant.DURATION && (
          <span className={styles.subTitle}>months</span>
        )}
      </p>
    </div>
  );
};

export default CardItem;
