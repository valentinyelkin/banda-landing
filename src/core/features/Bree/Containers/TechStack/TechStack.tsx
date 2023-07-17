import React from 'react';
import TechList from './TechList/TechList';
import {
  firstTechStack,
  firstTechStackMobile,
  firstTechStackTablet,
  secondTechStack,
  secondTechStackMobile,
  secondTechStackTablet,
  thirdTechStackMobile,
  thirdTechStackTablet,
} from '../../../../lists/listBree';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './techStack.module.scss';

const TechStack: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Tech stack</h2>
      {!isTablet && !isMobile && (
        <>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <TechList list={firstTechStack} />
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.secondTechList}>
              <TechList list={secondTechStack} />
            </div>
          </AnimationOnScroll>
        </>
      )}
      {isTablet && !isMobile && (
        <>
          <TechList list={firstTechStackTablet} />
          <div className={styles.secondTechList}>
            <TechList list={secondTechStackTablet} />
          </div>
          <TechList list={thirdTechStackTablet} />
        </>
      )}
      {isMobile && (
        <>
          <TechList list={firstTechStackMobile} />
          <div className={styles.secondTechList}>
            <TechList list={secondTechStackMobile} />
          </div>
          <TechList list={thirdTechStackMobile} />
        </>
      )}
    </section>
  );
};

export default TechStack;
