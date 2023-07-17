import { FC } from 'react';
import classnames from 'classnames';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './line.module.scss';

interface LineProps {
  classesLine: string;
  animation?: string;
}

const Line: FC<LineProps> = ({ classesLine, animation }) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const lineStyles = classnames(
    styles.line,
    classesLine && [styles[classesLine]],
  );

  return (
    <AnimationOnScroll
      animationName={
        animation ? AnimationNames[animation] : AnimationNames.fadeInDown
      }
      duration={2}
      delay={1}
      as="div"
      disabledAnimation={isTablet || isMobile}
    >
      <div className={lineStyles} />
    </AnimationOnScroll>
  );
};

export default Line;
