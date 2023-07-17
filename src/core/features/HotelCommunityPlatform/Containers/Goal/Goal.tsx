import { FC } from 'react';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Title from '../Title/Title';
import { strings } from '../../../../lists/hotelCommunityPlatform';
import Image from 'next/image';
import Line from '../Line/Line';
import OrangeBackground from '../OrangeBackground/OrangeBackground';
import styles from './goal.module.scss';

const Goal: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <div className={styles.lineTopGoalWrapper}>
        <Line animation={AnimationNames.fadeInUp} classesLine="lineTopGoal" />
      </div>
      <Title title={strings.titleGoal} classesWrapper="wrapperGoal" />
      <OrangeBackground />
      <div className={styles.wrapper}>
        <Line classesLine="lineGoal" />
        <div className={styles.wrapperText}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.wrapperFirstDescription}>
              <span className={styles.description}>
                {strings.descriptionGoal1}
              </span>
            </p>
            <p className={styles.wrapperSecondDescription}>
              <span className={styles.description}>
                {strings.descriptionGoal2}
              </span>
              <span className={styles.descriptionBold}>{strings.boldGoal}</span>
              <span className={styles.description}>
                {strings.descriptionGoal3}
              </span>
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.img}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="div"
        >
          <Image
            src="/images/projects/Hotel/goal/hotel_platform_benefits.png"
            alt="Hotel platform benefits"
            width="975"
            height="1490"
          />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Goal;
