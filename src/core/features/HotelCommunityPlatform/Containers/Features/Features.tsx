import { FC } from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image from 'next/image';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import Title from '../Title/Title';
import {
  featuresFirst,
  featuresSecond,
  strings,
} from '../../../../lists/hotelCommunityPlatform';
import ItemList from '../ItemList/ItemList';
import styles from './features.module.scss';
import Line from '../Line/Line';
import BlueBackground from '../BlueBackground/BlueBackground';

const Features: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <Title title={strings.titleFeatures} classesWrapper="wrapperFeatures" />
      <BlueBackground classesBlueBg="bgFeatures" />
      <div className={styles.wrapper}>
        <div className={styles.lineWrapper}>
          <Line classesLine="lineFeatures" />
        </div>
        <div className={styles.wrapperFeaturesList}>
          <AnimationOnScroll
            animationName={AnimationNames.zoomIn}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <ItemList list={featuresFirst} />
          </AnimationOnScroll>
          {(isTablet || !isMobile) && (
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={1}
              delay={1.5}
              as="span"
              disabledAnimation={isTablet || isMobile}
            >
              <ItemList list={featuresSecond} />
            </AnimationOnScroll>
          )}
        </div>
        <div className={styles.img}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={2}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <Image
              src="/images/projects/Hotel/features/platform_features.png"
              alt="Platform features"
              width="1097"
              height="979"
            />
          </AnimationOnScroll>
        </div>
        <div className={styles.mobileImg}>
          <Image
            src="/images/projects/Hotel/features/hotel_community_functionality_t.png"
            alt="Hotel community functionality"
            width="728"
            height="1270"
          />
        </div>
        {!isTablet && isMobile && (
          <ItemList
            list={featuresSecond}
            listClasses="containerMobileSecondList"
          />
        )}
      </div>
    </section>
  );
};

export default Features;
