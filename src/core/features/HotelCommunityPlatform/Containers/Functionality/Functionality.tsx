import { FC } from 'react';
import Title from '../Title/Title';
import { strings } from '../../../../lists/hotelCommunityPlatform';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image from 'next/image';
import styles from './functionality.module.scss';
import Line from '../Line/Line';

const Functionality: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <Title
        title={strings.titleFunctionality}
        classesWrapper="wrapperFunctionality"
      />
      <div className={styles.wrapper}>
        <div className={styles.lineWrapper}>
          <Line classesLine="lineFunctionality" />
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.zoomIn}
          duration={1}
          delay={1}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperText}>
            <p>
              <span className={styles.description}>
                {strings.desFunctionality1}
              </span>
              <span className={styles.boldDescription}>
                {strings.boldFunctionality1}
              </span>
              <span className={styles.description}>
                {strings.desFunctionality2}
              </span>
              <span className={styles.boldDescription}>
                {strings.boldFunctionality2}
              </span>
              <span className={styles.description}>
                {strings.desFunctionality3}
              </span>
            </p>
            <p className={styles.secondParagraph}>
              <span className={styles.description}>
                {strings.desFunctionality4}
              </span>
              <span className={styles.boldDescription}>
                {strings.boldFunctionality3}
              </span>
              <span className={styles.description}>
                {strings.desFunctionality5}
              </span>
              <span className={styles.boldDescription}>
                {strings.boldFunctionality4}
              </span>
              <span className={styles.description}>
                {strings.desFunctionality6}
              </span>
            </p>
          </div>
        </AnimationOnScroll>
        <div className={styles.img}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <Image
              src="/images/projects/Hotel/functionality/hotel_community_functionality.png"
              alt="Hotel community functionality"
              width="1265"
              height="1000"
            />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Functionality;
