import { FC } from 'react';
import Title from '../Title/Title';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import classnames from 'classnames';
import styles from './phase.module.scss';

interface PhaseProps {
  description?: string;
  boldDescription?: string;
  title: string;
  classesTitle: string;
  classesContainer?: string;
}

const Phase: FC<PhaseProps> = ({
  description,
  title,
  classesTitle,
  boldDescription,
  classesContainer,
}) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const containerStyles = classnames(
    styles.container,
    classesContainer && [styles[classesContainer]],
  );

  return (
    <section className={containerStyles}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={1}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.wrapperTitle}>
          <Title title={title} classNames={classesTitle} />
          <p className={styles.wrapperDescription}>
            <span className={styles.description}>{description}</span>
            <span className={styles.boldDescription}>{boldDescription}</span>
          </p>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Phase;
