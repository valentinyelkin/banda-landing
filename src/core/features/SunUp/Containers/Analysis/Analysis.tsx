import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './analysis.module.scss';

const Analysis: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpAnalysis}>
      <div className={styles.sunUpAnalysisWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
        >
          <div className={styles.sunUpAnalysisSteps}>
            <img
              src="/images/projects/SunUp/analysis-steps.svg"
              alt="SunUp analysis steps"
            />
          </div>
        </AnimationOnScroll>
        <div className={styles.sunUpAnalysisInterface}>
          <div className={styles.sunUpAnalysisContent}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
            >
              <h3>Analysis and solution</h3>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
            >
              <p>
                The main design challenge was for the user to take the fewest
                steps to create the layout of solar panels on rooftops. The
                solution was to show the steps using Wizard Design.
              </p>
            </AnimationOnScroll>
          </div>
          {isMobile ? (
            <div className={styles.sunUpAnalysisImages}>
              <img
                src="/images/projects/SunUp/mobile/analysis-1.png"
                alt="SunUp analysis steps"
              />
              <img
                src="/images/projects/SunUp/mobile/analysis-2.png"
                alt="SunUp analysis steps"
              />
            </div>
          ) : (
            <img
              src="/images/projects/SunUp/analysis-interface.png"
              alt="SunUp analysis steps"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
