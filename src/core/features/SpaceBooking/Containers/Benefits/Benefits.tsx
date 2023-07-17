import { FC } from 'react';
import Title from '../Title/Title';
import { strings } from '../../../../lists/spaceBooking';
import Image from 'next/image';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './benefits.module.scss';

const Benefits: FC = () => {
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
        >
          <Image
            src="/images/projects/SpaceBooking/benefits/project_benefits.png"
            alt="Project benefits"
            width="1811"
            height="680"
            objectFit="contain"
          />
        </AnimationOnScroll>
      </div>
      <div className={styles.imgTablet}>
        <Image
          src="/images/projects/SpaceBooking/benefits/project_benefits_t.png"
          alt="Project benefits"
          width="708"
          height="714"
        />
      </div>
      <div className={styles.imgMobile}>
        <Image
          src="/images/projects/SpaceBooking/benefits/project_benefits_m.png"
          alt="Project benefits"
          width="375"
          height="440"
        />
      </div>
      <div className={styles.wrapperText}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <Title title={strings.titleBenefits} classNames="titleBenefits" />
          <div className={styles.wrapperDescription}>
            <span className={styles.description}>
              {strings.descriptionBenefits1}
            </span>
            <span className={styles.descriptionBold}>
              {strings.descriptionBenefitsBold}
            </span>
            <span className={styles.description}>
              {strings.descriptionBenefits2}
            </span>
          </div>
          <p className={styles.bookingsRealized}>{strings.bookingsRealized}</p>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Benefits;
