import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './challenge.module.scss';
import stylesMainBlock from '../MainBlock/mainBlock.module.scss';

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.challengeWrapper}>
      <div className={styles.challengeContainer}>
        <div className={styles.challengeContent}>
          <img
            src="/images/projects/AppNavi/decor-curcle.svg"
            alt="Decor O"
            className={styles.decorO}
          />
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.1}
            as="span"
          >
            <h2 className={stylesMainBlock.appNaviH2}>Challenge</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
            as="span"
          >
            <p className={stylesMainBlock.appNaviParagraph}>
              Apart from implementing new intuitively clear user flows, the
              front-end challenge was to be able to track user&apos;s actions in
              the tool they are learning and suggest next possible steps,
              leading the pre-planned route.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
            as="span"
          >
            <p
              className={`${stylesMainBlock.appNaviParagraph} ${styles.appNaviTopParagraph} ${stylesMainBlock.mb30}`}
            >
              On the Back-end the challenge was to create a modular system for
              route storing that can be edited and expanded.
            </p>
          </AnimationOnScroll>
        </div>
        <img
          src="/images/projects/AppNavi/arrow.svg"
          alt="Decor Arrow"
          className={styles.decorArrow}
        />
      </div>
      <div className={styles.challengeImgWrapper}>
        <img
          src="/images/projects/AppNavi/educational-platform.png"
          alt="educational platform"
        />
      </div>
    </section>
  );
};

export default Challenge;
