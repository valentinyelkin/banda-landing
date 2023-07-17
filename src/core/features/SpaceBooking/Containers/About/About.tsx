import { FC } from 'react';
import Title from '../Title/Title';
import { strings } from '../../../../lists/spaceBooking';
import DetailItem from './DetailItem/DetailItem';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './about.module.scss';

const About: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <div className={styles.wrapperText}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={0.5}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <Title title={strings.titleAbout} classNames="titleAbout" />
          <p className={styles.wrapperDescription}>
            <span className={styles.description}>
              {strings.descriptionAbout1}
            </span>
            <span className={styles.descriptionBold}>
              {strings.descriptionAbout1Bold}
            </span>
            <span className={styles.description}>
              {strings.descriptionAbout2}
            </span>
            <span className={styles.descriptionBold}>
              {strings.descriptionAbout2Bold}
            </span>
            <span className={styles.description}>
              {strings.descriptionAbout3}
            </span>
            <span className={styles.descriptionBold}>
              {strings.descriptionAbout3Bold}
            </span>
            <span className={styles.description}>
              {strings.descriptionAbout4}
            </span>
          </p>
          <p className={styles.wrapperSubDescription}>
            <span className={styles.subDescription}>
              {strings.subDescriptionAbout1}
            </span>
            <span className={styles.descriptionBold}>
              {strings.subDescriptionAbout1Bold}
            </span>
            <span className={styles.subDescription}>
              {strings.subDescriptionAbout2}
            </span>
          </p>
        </AnimationOnScroll>
      </div>
      <div className={styles.wrapperDetail}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={0.5}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <DetailItem title={strings.six} subTitle={strings.months} />
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <DetailItem title={strings.seven} subTitle={strings.specialists} />
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={2}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <DetailItem title={strings.uk} subTitle={strings.geography} />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default About;
