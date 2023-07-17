import React from 'react';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './results.module.scss';

const Results: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpResults}>
      <div className={styles.sunUpResultsImage}>
        {isMobile ? (
          <img
            src="/images/projects/SunUp/mobile/results-interface.png"
            alt="SunUp Results"
          />
        ) : (
          <img src="/images/projects/SunUp/results.png" alt="SunUp Results" />
        )}
      </div>
      <div className={styles.sunUpResultsInfo}>
        <AnimationOnScroll animationName={AnimationNames.fadeInUp} duration={1}>
          <h3>Results</h3>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
        >
          <p>
            We have created intuitive design for an interactive web application,
            following modern trends in design for similar sofwares. The user
            questionnaire clearly showed that the new design is more convenient
            and comprehensible, as well as average user’s time for wizard
            creation has decreased by 45%.
          </p>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Results;
