import { FC } from 'react';
import classnames from 'classnames';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../../../utils/useIsTablet';
import useIsMobile from '../../../../../../utils/useIsMobile';
import styles from './mainItem.module.scss';

interface MainItemProps {
  subTitle: string;
  title: string;
  titleClass?: string;
  delay: number;
}

const MainItem: FC<MainItemProps> = ({
  subTitle,
  title,
  titleClass,
  delay,
}) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const titleStyles = classnames(
    styles.title,
    titleClass && [styles[titleClass]],
  );

  return (
    <>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInRight}
        duration={1}
        delay={delay}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <li className={styles.wrapper}>
          <p className={titleStyles}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
        </li>
      </AnimationOnScroll>
    </>
  );
};

export default MainItem;
