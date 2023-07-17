import { FC } from 'react';
import Title from '../Title/Title';
import {
  functionalityFirst,
  functionalitySecond,
  strings,
} from '../../../../lists/spaceBooking';
import Image from 'next/image';
import ItemList from '../ItemList/ItemList';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './functionality.module.scss';

const Functionality: FC = () => {
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
        <Title
          title={strings.titleFunctionality}
          classNames="titleFunctionality"
        />
      </AnimationOnScroll>
      <div className={styles.wrapperFirst}>
        <div className={styles.img}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={2}
            delay={1.5}
            as="span"
          >
            <Image
              src="/images/projects/SpaceBooking/functionality/app_functionality.png"
              alt="App functionality"
              width="1040"
              height="900"
            />
          </AnimationOnScroll>
        </div>
        <div className={styles.imgTablet}>
          <Image
            src="/images/projects/SpaceBooking/functionality/app_functionality_t.png"
            alt="App functionality"
            width="768"
            height="659"
          />
        </div>
        <div className={styles.imgMobile}>
          <Image
            src="/images/projects/SpaceBooking/functionality/app_functionality_m.png"
            alt="App functionality"
            width="375"
            height="400"
          />
        </div>
        <div className={styles.list}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <ItemList list={functionalityFirst} />
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.wrapperSecond}>
        <div className={styles.secondList}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={1.5}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <ItemList
              list={functionalitySecond}
              classesContainer="containerFunctionalitySecond"
            />
          </AnimationOnScroll>
        </div>
        <div className={styles.imgSecond}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={2}
            delay={1.5}
            as="span"
          >
            <Image
              src="/images/projects/SpaceBooking/functionality/add_parking_booking.png"
              alt="Add parking booking"
              width="1070"
              height="900"
            />
          </AnimationOnScroll>
        </div>
        <div className={styles.imgSecondTablet}>
          <Image
            src="/images/projects/SpaceBooking/functionality/add_parking_booking_t.png"
            alt="Add parking booking"
            width="768"
            height="652"
          />
        </div>
        <div className={styles.imgSecondMobile}>
          <Image
            src="/images/projects/SpaceBooking/functionality/add_parking_booking_m.png"
            alt="Add parking booking"
            width="375"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Functionality;
