import { FC } from 'react';
import Image from 'next/image';
import { strings } from '../../../../lists/spaceBooking';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './main.module.scss';

const Main: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={1}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.wrapperTitle}>
          <h1 className={styles.title}>{strings.title}</h1>
          <span className={styles.subtitle}>{strings.subtitle}</span>
        </div>
      </AnimationOnScroll>
      <div className={styles.img}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={2}
          delay={1.5}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <Image
            src="/images/projects/SpaceBooking/main/booking_app_screens.png"
            alt="Booking app screens"
            width="1920"
            height="1080"
          />
        </AnimationOnScroll>
      </div>
      <div className={styles.imgTablet}>
        <Image
          src="/images/projects/SpaceBooking/main/booking_app_screens_t.png"
          alt="Booking app screens"
          width="768"
          height="1024"
        />
      </div>
      <div className={styles.imgMobile}>
        <Image
          src="/images/projects/SpaceBooking/main/booking_app_screens_m.png"
          alt="Booking app screens"
          width="425"
          height="900"
        />
      </div>
    </section>
  );
};

export default Main;
