import { FC } from 'react';
import Pagination from '../../Pagination/Pagination';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import CardFeedbackList from '../../CardFeedbackList/CardFeedbackList';
import useIsMobile from '../../../../utils/useIsMobile';
import Image from 'next/image';
import useIsTablet from '../../../../utils/useIsTablet';
import styles from './results.module.scss';

const Results: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerResults}>
      <div className={styles.wrapperResults}>
        <div className={styles.wrapperFeedbackMobileList}>
          <CardFeedbackList />
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperImg}>
            <Image
              src="/images/projects/Gastehaus/results.png"
              alt="results"
              width="706"
              height="567"
            />
          </div>
        </AnimationOnScroll>
        <div className={styles.containerText}>
          <div className={styles.wrapperPagination}>
            <Pagination currentPage={6} />
          </div>
          <div className={styles.wrapperText}>
            <h2 className={styles.title}>Results</h2>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRight}
              duration={1}
              as="span"
              disabledAnimation={isTablet || isMobile}
            >
              <span className={styles.upperText}>
                We have created an intuitive user interface <br /> for an
                interactive web application following the latest trends in web
                development. Being used by agents, brokers, home sellers and
                home buyers, the real estate web platform boasts flawless
                performance.
              </span>
              <span className={styles.lowerText}>
                ... and what <br /> do the Testimonials say?
              </span>
            </AnimationOnScroll>
            <div className={styles.feedbackList}>
              <CardFeedbackList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
