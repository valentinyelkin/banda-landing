import React, { FC } from 'react';
import styles from './info-list.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';

type InfoListProps = {
  infoArray: string[];
};

const InfoList: FC<InfoListProps> = ({ infoArray }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <AnimationOnScroll
      animationName={AnimationNames.fadeIn}
      duration={3}
      as="div"
      disabledAnimation={isTablet || isMobile}
    >
      <ul className={styles.infoList}>
        {infoArray.map((item) => {
          return (
            <li
              key={item}
              className={styles.infoListItem}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          );
        })}
      </ul>
    </AnimationOnScroll>
  );
};

export default InfoList;
