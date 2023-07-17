import { featuresList } from '../../../../lists/listsSestra';
import React, { FC } from 'react';
import styles from './features.module.scss';
import useIsMobile from '../../../../utils/useIsMobile';
import Screen, { ScreenVariant } from './Screen/Screen';

const Features: FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <Screen
          variant={ScreenVariant.TOP}
          infoArray={featuresList.top}
          heading={{
            topText: 'Platform',
            bottomText: 'features',
          }}
          image={{
            src: '/images/projects/Sestra/Platform-features.jpg',
            alt: 'Platform features',
            imagePosition: isMobile ? 'left -10px top 3px' : 'left -20px top 0',
          }}
        />
        <Screen
          variant={ScreenVariant.BOTTOM}
          infoArray={featuresList.bottom}
          image={{
            src: '/images/projects/Sestra/Remote-locking-feature.jpg',
            alt: 'Platform features',
            imagePosition: isMobile
              ? 'left -10px top 5px'
              : 'left -18px top 10px',
          }}
        />
      </div>
    </div>
  );
};

export default Features;
