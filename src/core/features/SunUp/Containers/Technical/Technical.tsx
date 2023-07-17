import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './technical.module.scss';

const Technical: React.FunctionComponent = () => {
  return (
    <section className={styles.technicalSection}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={1}
        as="span"
      >
        <h2>Technical Expertise</h2>
      </AnimationOnScroll>
      <div className={styles.technicalForm}>
        <img
          src="/images/projects/SunUp/code.png"
          className={styles.technicalCode}
          alt="Technical form"
        />
        <div className={styles.stackWrapper}>
          <div className={styles.stackRow}>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.5}
                delay={0.1}
                as="div"
              >
                <img
                  src="/images/projects/SunUp/tech-material.png"
                  alt="material-ui"
                />
              </AnimationOnScroll>
            </div>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.5}
                as="div"
              >
                <img
                  src="/images/projects/SunUp/tech-react.png"
                  alt="React.js"
                />
              </AnimationOnScroll>
            </div>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.5}
                delay={0.3}
                as="div"
              >
                <img src="/images/projects/SunUp/tech-axios.png" alt="axios" />
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.stackRow}>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.5}
                delay={0.2}
                as="div"
              >
                <img src="/images/projects/SunUp/tech-html.png" alt="HTML" />
              </AnimationOnScroll>
            </div>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.4}
                delay={0.4}
                as="div"
              >
                <img src="/images/projects/SunUp/tech-redux.png" alt="Redux" />
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.stackRow}>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.3}
                delay={0.1}
                as="div"
              >
                <img src="/images/projects/SunUp/tech-css.png" alt="CSS" />
              </AnimationOnScroll>
            </div>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.3}
                delay={0.3}
                as="div"
              >
                <img src="/images/projects/SunUp/tech-git.png" alt="Git" />
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.stackRow}>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.6}
                delay={0.2}
                as="div"
              >
                <img
                  src="/images/projects/SunUp/tech-saga.png"
                  alt="redux-saga"
                />
              </AnimationOnScroll>
            </div>
            <div className={styles.stackItem}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={0.3}
                delay={0.5}
                as="div"
              >
                <img
                  src="/images/projects/SunUp/tech-three.png"
                  alt="three.js"
                />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;
