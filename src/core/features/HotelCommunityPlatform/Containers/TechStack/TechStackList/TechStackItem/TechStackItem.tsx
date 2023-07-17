import { FC } from 'react';
import Image from 'next/image';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../../../utils/useIsTablet';
import useIsMobile from '../../../../../../utils/useIsMobile';
import styles from './techStackItem.module.scss';

interface TechStackItemProps {
  card: string;
  alt: string;
  delay: number;
}

const TechStackItem: FC<TechStackItemProps> = ({ card, alt, delay }) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <li className={styles.img}>
      <AnimationOnScroll
        animationName={AnimationNames.zoomIn}
        duration={1}
        delay={delay}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <Image src={card} alt={alt} width="260" height="284" />
      </AnimationOnScroll>
    </li>
  );
};

export default TechStackItem;
