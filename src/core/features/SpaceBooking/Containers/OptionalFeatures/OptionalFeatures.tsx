import { FC } from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import { optionalFeatures, strings } from '../../../../lists/spaceBooking';
import ItemList from '../ItemList/ItemList';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './optionalFeatures.module.scss';

const OptionalFeatures: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={2}
          delay={1.5}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <Image
            src="/images/projects/SpaceBooking/optionalFeatures/optional_features.png"
            alt="Optional features"
            width="1038"
            height="1094"
          />
        </AnimationOnScroll>
      </div>
      <div className={styles.wrapperText}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={1}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <Title
            title={strings.titleOptionalFeatures}
            classNames="titleOptionalFeatures"
          />
          <p className={styles.subTitle}>{strings.subtitleOptionalFeatures}</p>
          <div className={styles.wrapperList}>
            <ItemList list={optionalFeatures} />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default OptionalFeatures;
