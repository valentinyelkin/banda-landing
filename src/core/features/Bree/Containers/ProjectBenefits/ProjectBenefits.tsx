import React from 'react';
import online from '../../../../../../public/images/projects/Bree/benefits/online.svg';
import time from '../../../../../../public/images/projects/Bree/benefits/time.svg';
import utility from '../../../../../../public/images/projects/Bree/benefits/utility.svg';
import CardBenefits from './CardBenefits/CardBenefits';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './projectBenefits.module.scss';

const ProjectBenefits: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Project benefits</h2>
      <div className={styles.wrapperCards}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <CardBenefits
            img={time}
            title="Saves time"
            description="no direct communication with the landlord"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperOnline}>
            <CardBenefits
              img={online}
              title="Online control"
              description="over the rental process"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <CardBenefits
            img={utility}
            title="Utility control"
            description="utility services control system"
          />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default ProjectBenefits;
