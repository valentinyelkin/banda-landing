import { FC } from 'react';
import Image from 'next/image';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../../utils/useIsMobile';
import Pagination from '../../../Pagination/Pagination';
import useIsTablet from '../../../../../utils/useIsTablet';
import styles from './functionality.module.scss';

const Functionality: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.wrapperFunctionality}>
      <div className={styles.containerFunctionality}>
        <div className={styles.wrapperText}>
          <h2 className={styles.title}>Functionality</h2>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <span className={styles.functionalityDescription}>
              The built-in tracking system allows clients and brokers to monitor
              thousands of filtered features, property availability, lease and
              sales in real-time
            </span>
          </AnimationOnScroll>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.wrapperPagination}>
            <Pagination currentPage={4} />
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.zoomIn}
            duration={1}
            delay={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.wrapperImg}>
              <Image
                src="/images/projects/Gastehaus/functionality.png"
                alt="Functionality"
                width="972"
                height="643"
              />
            </div>
            <div className={styles.functionalityMobileImg}>
              <Image
                src="/images/projects/Gastehaus/functionality-mobile.png"
                alt="Functionality"
                width="668"
                height="600"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Functionality;
