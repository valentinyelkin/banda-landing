import { FC } from 'react';
import Image from 'next/image';
import { Arrow } from '../../../../shared/coreUi/Arrow/Arrow';
import Button from '../../../../shared/coreUi/Button/Button';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import Pagination from '../../Pagination/Pagination';
import useIsTablet from '../../../../utils/useIsTablet';
import styles from './mainGoal.module.scss';

interface MainGoalProps {
  scrollToBlock: () => void;
}

const MainGoal: FC<MainGoalProps> = ({ scrollToBlock }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.wrapperMainGoal}>
      <div className={styles.containerMain}>
        <div className={styles.containerScroll}>
          <div className={styles.line} />
          <span className={styles.lineText}>Scroll</span>
          <div className={styles.scrollBtn}>
            <Button
              classes="roundBtn"
              type="button"
              handlerClick={scrollToBlock}
            >
              <Arrow arrowClass="arrowScrollBtn" />
            </Button>
          </div>
        </div>
        <div className={styles.containerTitle}>
          <h2 className={styles.title}>Main goal</h2>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.lowerTitle}>of the project</p>
            <span className={styles.descriptionTitle}>
              Development of a complex B2B\B2C rental platform with an optimized
              &quot;lead-to-deal&quot; sales process enhanced by collaboration
              rooms and a chat.
              <p className={styles.space}>
                The application allows the project owner to reduce the time
                spent on real estate processes, increase income by lowering
                staff costs, and eliminate paper bureaucracy.
              </p>
            </span>
          </AnimationOnScroll>
        </div>
        <div className={styles.containerImg}>
          <div className={styles.paginationWrapper}>
            <Pagination currentPage={2} />
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.zoomIn}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.img}>
              <Image
                src="/images/projects/Gastehaus/main-goal-mobile.png"
                alt="Main goal"
                layout="fill"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MainGoal;
