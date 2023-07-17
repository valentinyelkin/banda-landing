import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './mainBlock.module.scss';

const MainBlock: React.FunctionComponent = () => {
  return (
    <section className={styles.appNaviMain}>
      <img
        src="/images/projects/AppNavi/trap.svg"
        alt="figure"
        className={styles.mainFigure}
      />
      <img
        src="/images/projects/AppNavi/transparent-logo.svg"
        alt="AppNavi Transparent Logo"
        className={styles.mainTransparentLogo}
      />
      <div className={styles.mainContent}>
        <div className={styles.appNaviMainLeft}>
          <h1 className={styles.title}>AppNavi </h1>
          <div className={styles.naviLogoWrapper}>
            <img src="/images/projects/AppNavi/logo.svg" alt="AppNavi Logo" />
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <p>
              Software easily
              <br /> explained!
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.appNaviMainRight}>
          <Image
            src="/images/projects/AppNavi/online-classes-on-tablet.webp"
            alt="Online classes on tablet"
            width={1225}
            height={1038}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
