import { FC } from 'react';
import {
  strings,
  techStackFirstCards,
  techStackSecondCards,
} from '../../../../lists/hotelCommunityPlatform';
import Title from '../Title/Title';
import TechStackList from './TechStackList/TechStackList';
import styles from './techStack.module.scss';
import OrangeBackground from '../OrangeBackground/OrangeBackground';
import Line from '../Line/Line';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';

const TechStack: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const techStacksCombine = [...techStackFirstCards, ...techStackSecondCards];
  const firstRowTablet = techStacksCombine.slice(0, 4);
  const secondRowTablet = techStacksCombine.slice(4, 8);
  const thirdRowTablet = techStacksCombine.slice(8, 11);
  const firstColumnMob = techStacksCombine.slice(0, 6);
  const secondColumnMob = techStacksCombine.slice(6, 12);

  return (
    <section className={styles.container}>
      <OrangeBackground classesOrangeBg="bgTechStack" />
      <Title title={strings.titleTechStack} classesWrapper="wrapperTechStack" />
      <div className={styles.wrapper}>
        <Line classesLine="lineTechStack" />
        <div className={styles.wrapperList}>
          {!isMobile && !isTablet && (
            <>
              <TechStackList listTechStack={techStackFirstCards} />
              <div>
                <TechStackList listTechStack={techStackSecondCards} />
              </div>
            </>
          )}
          {!isMobile && isTablet && (
            <>
              <TechStackList listTechStack={firstRowTablet} />
              <TechStackList listTechStack={secondRowTablet} />
              <TechStackList listTechStack={thirdRowTablet} />
            </>
          )}
          {isMobile && !isTablet && (
            <div className={styles.wrapperMobile}>
              <TechStackList listTechStack={firstColumnMob} />
              <TechStackList listTechStack={secondColumnMob} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
