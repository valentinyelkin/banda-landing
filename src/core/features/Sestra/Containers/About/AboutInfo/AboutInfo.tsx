import React, { FC } from 'react';
import { aboutProjectList } from '../../../../../lists/listsSestra';
import Heading, { TextAlign } from '../../../Heading/Heading';
import InfoList from '../../../InfoList/InfoList';
import InfoText from '../../../InfoText/InfoText';
import styles from './about-info.module.scss';
import useIsMobile from '../../../../../utils/useIsMobile';
import useIsTablet from '../../../../../utils/useIsTablet';

const AboutInfo: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <div className={styles.aboutInfoWrapper}>
      <Heading
        topText="About"
        bottomText="the&nbsp;project"
        textAlign={isMobile || isTablet ? TextAlign.LEFT : TextAlign.RIGHT}
      />
      <div className={styles.aboutInfo}>
        <InfoText text="We have developed an <span>innovative cloud-based beverage dispensing platform</span> suitable for different kinds of venues." />
        <InfoList infoArray={aboutProjectList} />
        <InfoText text="The value of the project starts with function but eventually translates into the ease, peace of mind, and possibilities." />
      </div>
    </div>
  );
};

export default AboutInfo;
