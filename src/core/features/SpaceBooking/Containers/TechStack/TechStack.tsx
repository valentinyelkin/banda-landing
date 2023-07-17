import { FC } from 'react';
import Title from '../Title/Title';
import { strings } from '../../../../lists/spaceBooking';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import StackList from './StackList/StackList';
import styles from './techStack.module.scss';

const TechStack: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={0.5}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <Title title={strings.titleTechStack} classNames="titleTechStack" />
      </AnimationOnScroll>
      <div className={styles.wrapperItems}>
        <StackList />
      </div>
    </section>
  );
};

export default TechStack;
