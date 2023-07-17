import { FC } from 'react';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image from 'next/image';
import Title from '../Title/Title';
import {
  optionalFeatures,
  strings,
} from '../../../../lists/hotelCommunityPlatform';
import ItemList from '../ItemList/ItemList';
import Line from '../Line/Line';
import styles from './optionalFeatures.module.scss';
import OrangeBackground from '../OrangeBackground/OrangeBackground';

const OptionalFeatures: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <Title
        title={strings.titleOptionalFeatures}
        classesWrapper="wrapperOptionalFeatures"
      />
      <OrangeBackground classesOrangeBg="bgOptionalFeatures" />
      <div className={styles.wrapper}>
        <div className={styles.lineWrapper}>
          <Line classesLine="lineOptionalFeatures" />
        </div>
        <div className={styles.wrapperLeftBlock}>
          <AnimationOnScroll
            animationName={AnimationNames.zoomIn}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.subTitle}>{strings.subTitleOptional}</p>
            <ItemList list={optionalFeatures} />
          </AnimationOnScroll>
        </div>
        <div className={styles.img}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <Image
              src="/images/projects/Hotel/optionalFeatures/optional_features.png"
              alt="Optional features"
              width="792"
              height="780"
            />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default OptionalFeatures;
