import Image from 'next/image';
import React, { FC } from 'react';
import styles from './quotes-icon.module.scss';

const QuotesIcon: FC = () => {
  return (
    <div className={styles.testimonialIcon}>
      <Image
        src="/images/projects/Sestra/quote.svg"
        alt=""
        width={65}
        height={65}
        objectFit="cover"
      />
    </div>
  );
};

export default QuotesIcon;
