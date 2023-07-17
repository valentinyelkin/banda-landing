import React from 'react';
import DescriptionsList from '../../DescriptionsList/DescriptionsList';
import { optionalFeatures } from '../../../../lists/listBree';
import Image from 'next/image';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './optionalFeatures.module.scss';

const OptionalFeatures: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.container}>
      <div className={styles.containerImg}>
        <div className={styles.circleTop}>
          <Image
            src="/images/projects/Bree/circle_features_lower.svg"
            alt="circle"
            layout="fill"
          />
        </div>
        <div className={styles.background}>
          <Image
            src="/images/projects/Bree/background_features.svg"
            alt="circle"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.statistics}>
            <Image
              src="/images/projects/Bree/rent_payment_statistics.png"
              alt="Rent payment statistics"
              layout="fill"
            />
            <div className={styles.circleBottom}>
              <Image
                src="/images/projects/Bree/circle_features_lower.svg"
                alt="circle"
                layout="fill"
              />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className={styles.wrapperText}>
        <h2 className={styles.title}>Optional features</h2>
        <AnimationOnScroll
          animationName={AnimationNames.zoomIn}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <DescriptionsList
            classname="containerItemFunctionality"
            title="That can be added to such type of projects:"
            lists={optionalFeatures}
          />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default OptionalFeatures;
