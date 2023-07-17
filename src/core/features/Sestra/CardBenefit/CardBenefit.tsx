import Image from 'next/image';
import React, { FC } from 'react';
import styles from './card-benefit.module.scss';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';

type CardBenefitProps = {
  icon: string;
  title: string;
  desc: string;
  animationDelay?: number;
  wrapperRef?: React.RefObject<HTMLElement>;
};

const CardBenefit: FC<CardBenefitProps> = ({
  icon,
  title,
  desc,
  animationDelay,
  wrapperRef,
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <AnimationOnScroll
      animationName={AnimationNames.fadeInUp}
      duration={0.5}
      delay={animationDelay}
      as="div"
      disabledAnimation={isTablet || isMobile}
      parentRef={wrapperRef}
    >
      <div className={styles.cardBenefit}>
        <div className={styles.cardTitle}>
          <span className={styles.cardIcon}>
            <Image src={icon} alt="" width={68} height={68} />
          </span>
          <h3>{title}</h3>
        </div>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </AnimationOnScroll>
  );
};

export default CardBenefit;
