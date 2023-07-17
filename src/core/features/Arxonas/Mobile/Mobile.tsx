import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../utils/useIsMobile';
import styles from './mobile.module.scss';

const Mobile: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.arxonasMobile}>
      <img
        src="/images/projects/arxonas/bg-tax-management-mobile-application-mobile.png"
        alt="Tax management mobile application background"
        className={styles.mobileBgMobile}
      />
      <img
        src="/images/projects/arxonas/bg-tax-management-mobile-application.png"
        alt="Tax management mobile application background"
        className={styles.mobileBg}
      />
      <div className={styles.arxonasMobileWrapper}>
        <div className={styles.arxonasMobileInfo}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2>
              <span>Mobile interface</span>
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.3}
            as="span"
          >
            <p>
              Usability Means flexibility in usage, that’s why arxonas users can
              enjoy seminars, set goals or chat in forum right on their phone.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.mobileInterface}>
          <img
            src="/images/projects/arxonas/tax-management-mobile-application.png"
            alt="Tax management mobile application"
            className={styles.mobiles}
          />
          {isMobile && (
            <div className={styles.mobilesMobile}>
              <Image
                src="/images/projects/arxonas/tax-management-mobile-application-mobile.webp"
                alt="Tax management mobile application"
                width={1280}
                height={2428}
              />
            </div>
          )}
          <img
            src="/images/projects/arxonas/tax-management-mobile-application-tablet.png"
            alt="Tax management mobile application"
            className={styles.mobilesTablet}
          />
        </div>
      </div>
    </section>
  );
};

export default Mobile;
