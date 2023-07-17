import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './technical.module.scss';

const Technical: React.FunctionComponent = () => {
  return (
    <section className={styles.arxonasTechnical}>
      <img
        src="/images/projects/arxonas/bg-tech-stack-for-tax-management-application-mobile.png"
        alt="Tech stack for tax management application background"
        className={styles.technicalBgMobile}
      />
      <img
        src="/images/projects/arxonas/bg-tech-stack-for-tax-management-application.png"
        alt="Tech stack for tax management application background"
        className={styles.technicalBg}
      />
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={1}
        as="span"
      >
        <h2>
          <span>Technical expertise used</span>
        </h2>
      </AnimationOnScroll>
      <img
        src="/images/projects/arxonas/tech-stack-for-tax-management-application-mobile.png"
        alt="Tech stack for tax management application"
        className={styles.arxonasTechnicalSkillsImg}
      />
      <img
        src="/images/projects/arxonas/tech-stack-for-tax-management-application.png"
        alt="Tech stack for tax management application"
        className={styles.arxonasTechnicalImg}
      />
    </section>
  );
};

export default Technical;
