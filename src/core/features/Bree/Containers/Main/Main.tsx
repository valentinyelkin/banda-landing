import React from 'react';
import Image from 'next/image';
import MainIconsList from '../../MainIconsList/MainIconsList';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';
import styles from './main.module.scss';

const Main: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.containerMainBree}>
      <div className={styles.wrapperText}>
        <h1 className={styles.mainTitle}>Bree - Book Rent Enjoy Earn</h1>
        <div className={styles.containerTitle}>
          <Image
            src="/images/projects/Bree/bree-title.png"
            alt="bree title"
            width="240"
            height="55"
          />
          <div className={styles.lowerTitle}>
            <Image
              src="/images/projects/Bree/lower-title.png"
              alt="bree lower title"
              width="240"
              height="23"
            />
          </div>
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={1}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <p className={styles.titleBree}>
            Property management <br /> for commercial buildings
          </p>
          <span className={styles.descriptionTitle}>
            Easily manage all your tenants & properties, collect and track rent,
            utility and parking due, and keep everything accessible any time,
            anywhere.
          </span>
        </AnimationOnScroll>
        <MainIconsList />
        <div className={styles.imgTablet}>
          <Image
            src="/images/projects/Bree/property_management_system-tablet.png"
            alt="Property management system"
            width={672}
            height={555}
          />
          <div className={styles.tabletRingImg}>
            <Image
              src="/images/projects/Bree/rings-yellow-main.svg"
              alt="ring yellow"
              width="250"
              height="280"
            />
          </div>
        </div>
      </div>
      <div className={styles.containerMainImg}>
        <Image
          src="/images/projects/Bree/property_management_system.png"
          alt="Property management system"
          width={858}
          height={836}
        />
        <div className={styles.wrapperRingImg}>
          <Image
            src="/images/projects/Bree/rings-yellow-main.svg"
            alt="ring yellow"
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.containerMainMobile}>
        <Image
          src="/images/projects/Bree/property_management_system_375.png"
          alt="Property management system"
          width="450"
          height="435"
          objectFit="cover"
        />
        <div className={styles.wrapperRingImg}>
          <Image
            src="/images/projects/Bree/rings-yellow-main.svg"
            alt="ring yellow"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
