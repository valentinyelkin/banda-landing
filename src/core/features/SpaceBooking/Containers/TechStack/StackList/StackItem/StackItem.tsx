import { FC } from 'react';
import Image from 'next/image';
import useIsTablet from '../../../../../../utils/useIsTablet';
import useIsMobile from '../../../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './stackItem.module.scss';
import classnames from 'classnames';

interface StackItemProps {
  src: string;
  title: string;
  delay: number;
  classesImg?: string;
}

const StackItem: FC<StackItemProps> = ({ src, title, delay, classesImg }) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const imgStyles = classnames(styles.img, classesImg && [styles[classesImg]]);

  return (
    <div className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={2}
        delay={delay}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={imgStyles}>
          <Image src={src} alt={title} layout="fill" />
        </div>
      </AnimationOnScroll>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default StackItem;
