import React from 'react';
import DescriptionsList from '../../DescriptionsList/DescriptionsList';
import { booking, finances, tenants } from '../../../../lists/listBree';
import Image from 'next/image';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './features.module.scss';

const Features: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.containerFeatures}>
      <div className={styles.textDescription}>
        <div className={styles.ringYellowTop}>
          <Image
            src="/images/projects/Bree/circle_features_top.svg"
            alt="circle features"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className={styles.title}>Features</h2>
        <AnimationOnScroll
          animationName={AnimationNames.zoomIn}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <DescriptionsList
            title="Tenants and Landlords:"
            titleClasses="titleDescriptionFeatures"
            lists={tenants}
            classname="containerItemFeatures"
          />
          <div className={styles.wrapperBooking}>
            <DescriptionsList
              title="Booking:"
              titleClasses="titleDescriptionFeatures"
              lists={booking}
              classname="containerItemFeatures"
            />
          </div>
          <DescriptionsList
            title="Finances:"
            titleClasses="titleDescriptionFeatures"
            lists={finances}
            classname="containerItemFeatures"
          />
        </AnimationOnScroll>
      </div>
      <div className={styles.circle}>
        <Image
          src="/images/projects/Bree/background_features.svg"
          alt="circle"
          layout="fill"
        />
      </div>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInRight}
        duration={1}
        as="div"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.mainImg}>
          <Image
            src="/images/projects/Bree/financial_analytics.png"
            alt="Financial analytics"
            layout="fill"
            objectFit="contain"
          />
          <div className={styles.ringYellowBottom}>
            <Image
              src="/images/projects/Bree/circle_features_lower.svg"
              alt="circle features"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Features;
