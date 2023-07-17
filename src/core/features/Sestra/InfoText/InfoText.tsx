import React, { FC } from 'react';
import styles from './info-text.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';

type InfoTextProps = {
  text: string;
};

const InfoText: FC<InfoTextProps> = ({ text }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <AnimationOnScroll
      animationName={AnimationNames.fadeIn}
      duration={3}
      as="div"
      disabledAnimation={isTablet || isMobile}
    >
      <p
        className={styles.infoText}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </AnimationOnScroll>
  );
};

export default InfoText;
