import { FC } from 'react';
import Pagination from '../../Pagination/Pagination';
import { listsOptionalFeatures } from '../../../../lists/lists';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import Image from 'next/image';
import useIsTablet from '../../../../utils/useIsTablet';
import styles from './optionalFeatures.module.scss';

const OptionalFeatures: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerOptionalFeatures}>
      <div className={styles.wrapperOptionalFeatures}>
        <div className={styles.wrapperText}>
          <h2 className={styles.title}>Optional Features</h2>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.lowerTitle}>Real estate in operation</p>
            <ul className={styles.wrapperLists}>
              {listsOptionalFeatures.map(({ id, str }) => (
                <li className={styles.textLists} key={id}>
                  {str}
                </li>
              ))}
            </ul>
          </AnimationOnScroll>
        </div>
        <div className={styles.containerImg}>
          <div className={styles.wrapperPagination}>
            <Pagination currentPage={7} />
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.optionalImg}>
              <Image
                src="/images/projects/Gastehaus/real-estate-in-operation.png"
                alt="Real estate in operation"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.optionalMobileImg}>
              <Image
                src="/images/projects/Gastehaus/real-estate-in-operation-mobile.png"
                alt="Real estate in operation"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </AnimationOnScroll>
        </div>
        <div className={styles.backgroundCrosses} />
      </div>
    </section>
  );
};

export default OptionalFeatures;
