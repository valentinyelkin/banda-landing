import { FC } from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../../utils/useIsMobile';
import Image from 'next/image';
import useIsTablet from '../../../../../utils/useIsTablet';
import styles from './functionalityThirdBlock.module.scss';

const FunctionalityThirdBlock: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerFunctionalityThirdBlock}>
      <div className={styles.wrapperBlock}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          delay={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperText}>
            <p className={styles.lowerTitle}>
              &quot;Collaboration rooms&quot; that make it possible for brokers
              to collect and store info about clients’ needs & demands in one
              place
            </p>
            <p className={styles.descriptionTop}>
              Possibility for clients to view the listings, share sensitive info
              and chat in real time
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          delay={0.5}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperImg}>
            <Image
              src="/images/projects/Gastehaus/collaboration-rooms.png"
              alt="Collaboration rooms"
              width="844"
              height="579"
            />
          </div>
          <div className={styles.functionalityMapMobileImg}>
            <Image
              src="/images/projects/Gastehaus/collaboration-rooms-mobile.png"
              alt="Collaboration rooms"
              width="792"
              height="512"
            />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default FunctionalityThirdBlock;
