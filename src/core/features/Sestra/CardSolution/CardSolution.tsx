import React, { FC } from 'react';
import styles from './card-solution.module.scss';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';

export type CardSolutionProps = {
  title: string;
  desc: string;
  list?: string[];
  animationDelay?: number;
  wrapperRef?: React.RefObject<HTMLElement>;
};

const CardSolution: FC<CardSolutionProps> = ({
  title,
  desc,
  list,
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
      <div className={styles.cardSolution}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        {list && (
          <ul className={styles.cardList}>
            {list.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        )}
      </div>
    </AnimationOnScroll>
  );
};

export default CardSolution;
