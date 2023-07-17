import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './designPage.module.scss';

const DesignPage: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpFooter}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={1}
        as="span"
      >
        <h2>Design pages</h2>
      </AnimationOnScroll>
      {isMobile ? (
        <>
          <img
            src="/images/projects/SunUp/mobile/solution-for-solar-panel-installation-management-1.png"
            alt="Solution for solar panel installation management first"
          />
          <img
            src="/images/projects/SunUp/mobile/solution-for-solar-panel-installation-management-2.png"
            alt="Solution for solar panel installation management second"
          />
          <img
            src="/images/projects/SunUp/mobile/solution-for-solar-panel-installation-management-3.png"
            alt="Solution for solar panel installation management third"
          />
          <img
            src="/images/projects/SunUp/mobile/solution-for-solar-panel-installation-management-4.png"
            alt="Solution for solar panel installation management fourth"
          />
          <img
            src="/images/projects/SunUp/mobile/solution-for-solar-panel-installation-management-5.png"
            alt="Solution for solar panel installation management fifth"
          />
        </>
      ) : (
        <Image
          src="/images/projects/SunUp/solution-for-solar-panel-installation-management.webp"
          alt="Solution for solar panel installation management"
          width={1920}
          height={1042}
        />
      )}
    </section>
  );
};

export default DesignPage;
