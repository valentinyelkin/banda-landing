import React from 'react';
import CardsList from '../../CardsList/CardsList';
import {
  firstRowCards,
  mobileList,
  secondRowCards,
  thirdRowCards,
} from '../../../../lists/cardBree';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './challenges.module.scss';
import Image from 'next/image';

const Challenges: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.containerChallenges}>
      <div className={styles.ring}>
        <Image
          src="/images/projects/Bree/ring_goals.png"
          alt="ring goals"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className={styles.title}>
        Challenges faced during project development
      </h2>
      {!isTablet && !isMobile && (
        <div className={styles.containerList}>
          <div className={styles.firstRowCards}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInLeft}
              duration={1}
              as="div"
              disabledAnimation={isTablet || isMobile}
            >
              <CardsList list={firstRowCards} />
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.zoomIn}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.secondRowCards}>
              <CardsList list={secondRowCards} />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.thirdRowCards}>
              <CardsList list={thirdRowCards} />
            </div>
          </AnimationOnScroll>
        </div>
      )}
      {(isTablet || isMobile) && <CardsList list={mobileList} />}
    </section>
  );
};

export default Challenges;
