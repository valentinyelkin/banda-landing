import { FC } from 'react';
import { strings } from '../../../../lists/hotelCommunityPlatform';
import Image from 'next/image';
import MainList from './MainList/MainList';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Title from '../Title/Title';
import styles from './main.module.scss';

const Main: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <div className={styles.lineRightWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.appearLeft}
          duration={2}
          delay={1}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.lineRight} />
        </AnimationOnScroll>
      </div>
      <div className={styles.lineBottomWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInDown}
          duration={2}
          delay={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.lineBottom} />
        </AnimationOnScroll>
      </div>
      <Title
        title={strings.title}
        classesTitle="titleMain"
        classesWrapper="wrapperMain"
        tag
      />
      <MainList />
      <div className={styles.img}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
          as="span"
        >
          <Image
            src="/images/projects/Hotel/main/hotel_community_platform.png"
            alt="Hotel community platform"
            width="1565"
            height="931"
          />
        </AnimationOnScroll>
      </div>
      <div className={styles.imgLaptop}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <Image
            src="/images/projects/Hotel/main/hotel_community_platform_l.png"
            alt="Hotel community platform"
            width="1181"
            height="652"
          />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Main;
