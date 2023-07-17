import { FC } from 'react';
import classnames from 'classnames';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../../../utils/useIsTablet';
import useIsMobile from '../../../../../../utils/useIsMobile';
import styles from './challengesCard.module.scss';

export interface ChallengesCardProps {
  title: string;
  description: string;
  containerClasses?: string;
  delay?: number;
  id?: number;
}

const ChallengesCard: FC<ChallengesCardProps> = ({
  title,
  description,
  containerClasses,
  delay,
}) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const containerStyles = classnames(
    styles.container,
    containerClasses && [styles[containerClasses]],
  );

  return (
    <>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={delay}
        as="div"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={containerStyles}>
          <span className={styles.title}>{title}</span>
          <div className={styles.line} />
          <span className={styles.description}>{description}</span>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default ChallengesCard;
