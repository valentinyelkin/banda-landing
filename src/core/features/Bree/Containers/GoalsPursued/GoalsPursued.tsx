import React from 'react';
import Image from 'next/image';
import DescriptionsList from '../../DescriptionsList/DescriptionsList';
import { teamEfforts } from '../../../../lists/listBree';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';
import styles from './goalsPursued.module.scss';

const GoalsPursued: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.containerGoals}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInLeft}
        duration={1}
        as="div"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.containerImgRecommend}>
          <Image
            src="/images/projects/Bree/property_search_web_service.png"
            alt="Property search web service"
            layout="fill"
          />
          <div className={styles.ringGoals}>
            <Image
              src="/images/projects/Bree/ring_goals.png"
              alt="ring goals"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </AnimationOnScroll>
      <div className={styles.wrapperText}>
        <h2 className={styles.title}>Goals pursued</h2>
        <AnimationOnScroll
          animationName={AnimationNames.zoomIn}
          duration={1}
          delay={1}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <span className={styles.text}>
            The primary goal of the project was to develop a digital solution
            for landlords of commercial property allowing effortless management
            of their property and services, reducing expenses & simplifying the
            whole rent process.
          </span>
          <DescriptionsList
            classname="ringGoals"
            title="The team's efforts were aimed at:"
            lists={teamEfforts}
          />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default GoalsPursued;
