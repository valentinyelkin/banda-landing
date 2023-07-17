import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './fuctionality.module.scss';

const Functionality: React.FunctionComponent = () => {
  return (
    <section className={styles.arxonasFunctionality}>
      <img
        src="/images/projects/arxonas/bg-tax-management-application-functionality-mobile.png"
        alt="Tax management application functionality background"
        className={styles.functionalityMobileBg}
      />
      <img
        src="/images/projects/arxonas/bg-tax-management-application-functionality.png"
        alt="Tax management application functionality background"
        className={styles.functionalityBg}
      />
      <div className={styles.arxonasFunctionalityWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>
            <span>Functionality</span>
          </h2>
        </AnimationOnScroll>
      </div>
      <img
        src="/images/projects/arxonas/tax-management-application-functionality.png"
        alt="Tax management application functionality"
        className={styles.arxonasFunctionalityImg}
      />
      <img
        src="/images/projects/arxonas/tax-management-application-functionality-mobile.png"
        alt="Tax management application functionality"
        className={styles.arxonasFunctionalityMobileImg}
      />
      <div
        className={`${styles.arxonasFunctionalityWrapper} ${styles.arxonasRoadmap}`}
      >
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>
            <span>Roadmap</span>
          </h2>
        </AnimationOnScroll>
      </div>
      <img
        src="/images/projects/arxonas/tax-management-solution-development.png"
        alt="Tax management solution development"
        className={styles.arxonasRoadmapImg}
      />
      <img
        src="/images/projects/arxonas/tax-management-solution-development-mobile.png"
        alt="Tax management solution development"
        className={styles.arxonasRoadmapMobileImg}
      />
      <img
        src="/images/projects/arxonas/tax-management-solution-development-tablet.png"
        alt="Tax management solution development"
        className={styles.arxonasRoadmapTabletImg}
      />
    </section>
  );
};

export default Functionality;
