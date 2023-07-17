import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './сhallenge.module.scss';

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.arxonasChallenge}>
      <img
        src="/images/projects/arxonas/bg-challenge.png"
        alt="Challenge background"
        className={styles.challengeBg}
      />
      <img
        src="/images/projects/arxonas/bg-challenge-mobile.png"
        alt="Challenge background"
        className={styles.challengeMobileBg}
      />
      <div className={styles.arxonasChallengeWrapper}>
        <div className={styles.arxonasChallengeSolution}>
          <div className={styles.arxonasChallengeCircle}>
            <div className={styles.arxonasChallengeCircleLogo}>
              <img
                src="/images/projects/arxonas/empty-logo-circle.png"
                alt="Empty logo"
                className={styles.emptyLogoCircle}
              />
              <img
                src="/images/projects/arxonas/empty-logo-circle-part.png"
                alt="Empty part of logo"
                className={styles.emptyPartOfLogo}
              />
            </div>
            <div className={styles.arxonasCircleWrapper}>
              <img
                src="/images/projects/arxonas/circle.png"
                className={`${styles.arxonasCircle} ${styles.arxonasCircleBig}`}
                alt="Arxonas big circle"
              />
              <img
                src="/images/projects/arxonas/circle.png"
                className={`${styles.arxonasCircle} ${styles.arxonasCircleMedium}`}
                alt="Arxonas medium circle"
              />
              <img
                src="/images/projects/arxonas/circle.png"
                className={`${styles.arxonasCircle} ${styles.arxonasCircleLittle}`}
                alt="Arxonas little circle"
              />
            </div>
          </div>
          <div
            className={`${styles.arxonasItem} ${styles.arxonasItemChallenge}`}
          >
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
            >
              <h2>
                <span>Challenge</span>
              </h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.3}
              as="span"
            >
              <p>
                Create best-of-breed solution for systemic tax Management,
                tailored for German-speaking countries. The initial intention of
                the company was to build a software for both working and
                personal needs, loading this software with plenty of functions,
                such as video hosting, document storage, forum, event calendar,
                personal goals setting. Thus, the software had to operate fast,
                securely and flawlessly 24/7.
              </p>
            </AnimationOnScroll>
          </div>
          <div
            className={`${styles.arxonasItem} ${styles.arxonasItemSolution}`}
          >
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
            >
              <h2>
                <span>Solution</span>
              </h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.3}
              as="span"
            >
              <p>
                We implemented a cohesive solution, using JavaScript as a main
                language and integrating a bunch of other third-party tools.
                JavaScript (namely, react And Node frameworks) was chosen due to
                its high compatibility and easiness in adding new features in
                the future. the list of technological stack, fully presented in
                the final section of the presentation, allowed us to
                successfully fulfill all the client’s requirements.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
        <img
          src="/images/projects/arxonas/tax-management-solution.png"
          alt="Tax management solution"
          className={styles.arxonasChallengeSolutionImg}
        />
        <img
          src="/images/projects/arxonas/tax-management-solution-mobile.png"
          alt="Tax management solution"
          className={`${styles.arxonasChallengeSolutionMobileImg} ${styles.top}`}
        />
        <div className={styles.arxonasChallengeSolutionMobileImg}>
          <Image
            src="/images/projects/arxonas/arxonas-mobile.gif"
            alt="Tax management solution"
            width={901}
            height={796}
          />
        </div>
        <div className={styles.arxonasAnimationWrapper}>
          <img
            src="/images/projects/arxonas/arxonas.gif"
            alt="Challenge animation"
            className={styles.arxonasAnimation}
          />
          <img
            src="/images/projects/arxonas/logo-transparent.png"
            alt="Challenge logo transparent"
            className={styles.arxonasAnimationLogo}
          />
        </div>
      </div>
    </section>
  );
};

export default Challenge;
