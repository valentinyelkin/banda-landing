import { FC } from 'react';
import Image from 'next/image';
import { lists } from '../../../../lists/lists';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import Pagination from '../../Pagination/Pagination';
import useIsTablet from '../../../../utils/useIsTablet';
import styles from './features.module.scss';

const Features: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerFeatures}>
      <div className={styles.wrapperFeatures}>
        <div className={styles.wrapperText}>
          <h2 className={styles.title}>Features</h2>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.lowerTitle}>
              Features that make this project unique
            </p>
            <ul className={styles.wrapperLists}>
              {lists.map(({ id, str }) => (
                <li className={styles.textLists} key={id}>
                  {str}
                </li>
              ))}
            </ul>
          </AnimationOnScroll>
        </div>
        <div className={styles.containerImg}>
          <div className={styles.wrapperPagination}>
            <Pagination currentPage={5} />
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.zoomIn}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.laptopImg}>
              <Image
                src="/images/projects/Gastehaus/features-that-make.png"
                alt="Features that make"
                width="766"
                height="629"
              />
            </div>
            <div className={styles.laptopMobileImg}>
              <Image
                src="/images/projects/Gastehaus/features-that-make-mobile.png"
                alt="Features that make"
                width="668"
                height="700"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Features;
