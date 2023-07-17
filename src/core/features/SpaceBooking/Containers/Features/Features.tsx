import { FC } from 'react';
import Title from '../Title/Title';
import {
  featuresLeft,
  featuresRight,
  strings,
} from '../../../../lists/spaceBooking';
import ItemList from '../ItemList/ItemList';
import Image from 'next/image';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './features.module.scss';

const Features: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={1}
        as="div"
        disabledAnimation={isTablet || isMobile}
      >
        <Title title={strings.titleFeatures} classNames="titleFeatures" />
      </AnimationOnScroll>
      <div className={styles.wrapper}>
        <div className={styles.wrapperLeftList}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <ItemList list={featuresLeft} classesStr="strFeatures" />
          </AnimationOnScroll>
        </div>
        <div className={styles.img}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={2}
            delay={1.5}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <Image
              src="/images/projects/SpaceBooking/features/booking_app_features.png"
              alt="Booking app features"
              width="890"
              height="1000"
            />
          </AnimationOnScroll>
        </div>
        <div className={styles.imgMobile}>
          <Image
            src="/images/projects/SpaceBooking/features/booking_app_features_m.png"
            alt="Booking app features"
            width="375"
            height="504"
          />
        </div>
        <div className={styles.wrapperRightList}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <ItemList list={featuresRight} classesStr="strFeatures" />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Features;
