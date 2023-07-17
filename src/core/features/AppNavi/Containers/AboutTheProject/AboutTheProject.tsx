import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import stylesMainBlock from '../MainBlock/mainBlock.module.scss';
import styles from './aboutTheProject.module.scss';

const AboutTheProject: React.FunctionComponent = () => {
  return (
    <section className={styles.appNaviAbout}>
      <div className={styles.appNaviWrapper}>
        <div className={styles.appNaviAboutLeft}>
          <img
            src="/images/projects/AppNavi/staff-training-web-application.png"
            alt="Staff training web application"
          />
        </div>
        <div className={styles.appNaviAboutRight}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2 className={stylesMainBlock.appNaviH2}>
              <div>About</div>&nbsp;<div>the project</div>
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
            as="span"
          >
            <p className={stylesMainBlock.appNaviParagraph}>
              The <span className={stylesMainBlock.blueText}>AppNavi</span>{' '}
              application successfully substitutes boring study guides on using
              different programs and instructors, suggesting engaging
              interactivity instead. AppNavi eliminates the necessity of hiring
              a specialist for training new employees, which economizes time and
              budget.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.textForMobile}>
        <p className={stylesMainBlock.appNaviParagraph}>
          The <span className={stylesMainBlock.blueText}>AppNavi</span>{' '}
          application successfully substitutes boring study guides on using
          different programs and instructors, suggesting engaging interactivity
          instead. AppNavi eliminates the necessity of hiring a specialist for
          training new employees, which economizes time and budget.
        </p>
      </div>
    </section>
  );
};

export default AboutTheProject;
