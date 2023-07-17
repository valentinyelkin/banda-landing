import { functionalityList } from '../../../../lists/listsSestra';
import React, { FC } from 'react';
import Heading, { TextAlign } from '../../Heading/Heading';
import InfoList from '../../InfoList/InfoList';
import styles from './functionality.module.scss';
import Media, { MediaPosition } from '../../Media/Media';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';

const Functionality: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <div className={styles.functionality}>
      <div className={styles.container}>
        <div className={styles.mediaWrapper}>
          <Media
            src="/images/projects/Sestra/Platform-functionality.jpg"
            alt="Platform functionality"
            position={MediaPosition.LEFT}
            imagePosition={isMobile ? 'right -10px top 0' : 'right -17px top 0'}
          />
        </div>
        <div className={styles.functionalityMain}>
          <Heading
            topText="Platform"
            bottomText="functionality"
            textAlign={
              !isMobile && !isTablet ? TextAlign.RIGHT : TextAlign.LEFT
            }
          />
          <InfoList infoArray={functionalityList} />
        </div>
      </div>
    </div>
  );
};

export default Functionality;
