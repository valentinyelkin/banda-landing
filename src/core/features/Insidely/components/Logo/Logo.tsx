import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';

const Logo: FC = (): JSX.Element => {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/projects/Insidely/logo.png"
        alt="logo insidely"
        width="180px"
        height="66px"
      />
    </div>
  );
};

export default Logo;
