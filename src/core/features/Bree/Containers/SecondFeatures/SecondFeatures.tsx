import React from 'react';
import Image from 'next/image';
import DescriptionsList from '../../DescriptionsList/DescriptionsList';
import { management, others } from '../../../../lists/listBree';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './secondFeatures.module.scss';

const SecondFeatures: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.container}>
      <div className={styles.circleBackground}>
        <Image
          src="/images/projects/Bree/background_second_features.svg"
          alt="circle second features"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.mainImg}>
        <Image
          src="/images/projects/Bree/financial_statistics.png"
          alt="Financial analytics"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.ringYellowBottom}>
          <Image
            src="/images/projects/Bree/circle_second_features_bottom.svg"
            alt="circle second features"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.wrapperImgMobile}>
        <Image
          src="/images/projects/Bree/financial_statistics1.png"
          alt="Financial analytics"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.ringYellowBottom}>
          <Image
            src="/images/projects/Bree/circle_second_features_bottom.svg"
            alt="circle second features"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.wrapperText}>
        <div className={styles.ringYellowTop}>
          <Image
            src="/images/projects/Bree/circle_second_features_top.svg"
            alt="circle second features"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          delay={0.5}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperManagement}>
            <DescriptionsList
              title="Management:"
              titleClasses="titleDescriptionFeatures"
              lists={management}
              classname="containerItemFeatures"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          delay={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <DescriptionsList
            title="Others:"
            titleClasses="titleDescriptionFeatures"
            lists={others}
            classname="containerItemFeatures"
          />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default SecondFeatures;
