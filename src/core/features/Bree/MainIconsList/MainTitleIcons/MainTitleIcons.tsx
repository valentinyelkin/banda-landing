import React from 'react';
import Image from 'next/image';
import styles from './mainTitleIcons.module.scss';
import useIsMobile from '../../../../utils/useIsMobile';

interface MainTitleIconsProps {
  icon: string;
  titleIcon: string;
  alt: string;
}

const MainTitleIcons: React.FC<MainTitleIconsProps> = ({
  icon,
  titleIcon,
  alt,
}) => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.wrapperIcon}>
      <div className={styles.wrapperImg}>
        <Image
          src={icon}
          alt={alt}
          width={isMobile ? 18 : 26}
          height={isMobile ? 18 : 26}
        />
      </div>
      <p className={styles.titleIcon}>{titleIcon}</p>
    </div>
  );
};

export default MainTitleIcons;
