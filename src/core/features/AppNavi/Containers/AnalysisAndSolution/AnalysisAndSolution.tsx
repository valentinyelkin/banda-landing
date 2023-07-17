import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './analysisAndSolution.module.scss';
import stylesMainBlock from '../MainBlock/mainBlock.module.scss';

const AnalysisAndSolution: React.FunctionComponent = () => {
  return (
    <section className={styles.analysisWrapper}>
      <div className={styles.analysisContainer}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <div className={styles.appNaviFunctionalityHeaderWrapper}>
            <div className={styles.appNaviFunctionalityHeader}>
              <h2
                className={`${stylesMainBlock.appNaviH2} ${styles.appNaviFunctionalityTitle}`}
              >
                Functionality
              </h2>
              <p
                className={`${stylesMainBlock.appNaviH3} ${styles.appNaviFunctionalitySubitle}`}
              >
                The main features we developed:
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <div className={styles.analysisSteps}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={2.5}
            as="div"
          >
            <img
              src="/images/projects/AppNavi/mob-line.svg"
              className={styles.mobLine}
              alt="line"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={2.5}
            as="div"
          >
            <div className={styles.tabletWrapper}>
              <img
                src="/images/projects/AppNavi/tablet-line.svg"
                className={styles.tabletLine}
                alt="Line"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={2.5}
            as="div"
          >
            <img
              src="/images/projects/AppNavi/pc-tablet-line.svg"
              className={styles.topLine}
              alt="line"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            as="div"
          >
            <div className={`${styles.analysisStep} ${styles.analysisStep1}`}>
              <img src="/images/projects/AppNavi/step-1.svg" alt="step 1" />
              <img
                src="/images/projects/AppNavi/step-1-mob.svg"
                alt="step 1"
                className={styles.mobSteps}
              />
              <p>
                Ready-made routes that help the user learn the app step by step
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={0.25}
            as="div"
          >
            <div className={`${styles.analysisStep} ${styles.analysisStep2}`}>
              <img src="/images/projects/AppNavi/step-2.svg" alt="step 2" />
              <img
                src="/images/projects/AppNavi/step-2-mob.svg"
                alt="step 2"
                className={styles.mobSteps}
              />
              <p>
                Tooltips. They guide the user through the respective use cases.
                The main development focus was on reliable object recognition
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={0.5}
            as="div"
          >
            <div className={`${styles.analysisStep} ${styles.analysisStep3}`}>
              <img src="/images/projects/AppNavi/step-3.svg" alt="step 3" />
              <img
                src="/images/projects/AppNavi/step-3-mob.svg"
                alt="step 3"
                className={styles.mobSteps}
              />
              <p>News. The administrator can create articles for app users</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={0.6}
            as="div"
          >
            <div className={`${styles.analysisStep} ${styles.analysisStep4}`}>
              <img src="/images/projects/AppNavi/step-4.svg" alt="step 4" />
              <img
                src="/images/projects/AppNavi/step-4-mob.svg"
                alt="step 4"
                className={styles.mobSteps}
              />
              <p>
                Collections. This feature allows administrators combine relevant
                content into collections and make them available to their
                onboarders, such as a learning collection
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            delay={0.7}
            as="div"
          >
            <div className={`${styles.analysisStep} ${styles.analysisStep5}`}>
              <img src="/images/projects/AppNavi/step-5.svg" alt="step 5" />
              <img
                src="/images/projects/AppNavi/step-5-mob.svg"
                alt="step 5"
                className={styles.mobSteps}
              />
              <p className={styles.hideInMob}>
                Editorial process. The admin can define under which
                circumstances a user can see the content and what this content
                will be
              </p>
              <p className={styles.showInMob}>
                Editorial process. The admin can define under which
                circumstances a user can see the content and what this content
                will be
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={0.8}
          as="div"
        >
          <div className={styles.solutionsLogoWrapper}>
            <img
              src="/images/projects/AppNavi/logo.svg"
              alt="logo"
              className={styles.solutionsLogo}
            />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default AnalysisAndSolution;
