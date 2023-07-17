import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './problem.module.scss';

const Problem: React.FunctionComponent = () => {
  return (
    <section className={styles.dcrProblem}>
      <img
        src="/images/projects/dcr/design-map-left.png"
        className={styles.dcrProblemMapLeft}
        alt="map-left"
      />
      <img
        src="/images/projects/dcr/design-map-right.png"
        className={styles.dcrProblemMapRight}
        alt="map-right"
      />
      <div className={styles.dcrProblemContent}>
        <div className={styles.dcrProblemWrapper}>
          <img
            src="/images/projects/dcr/problem.png"
            className={styles.dcrProblemProblemImage}
            alt="problem"
          />
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2>Challenge</h2>
          </AnimationOnScroll>
          <div className={styles.dcrProblemText}>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.5}
                  as="span"
                >
                  Despite the popularity of the platform and high-level demand
                  for its services, the company began to receive complaints
                  regarding service convenience.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.7}
                  as="span"
                >
                  Due to the inconvenient and difficult UX design, as well as
                  outdated and chaotic UI design, the popularity of the service
                  began to decline significantly. As a result, there was a churn
                  of customers.
                </AnimationOnScroll>
              </p>
            </div>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.9}
                  as="span"
                >
                  Since the portal is aimed at solving a huge number of client’s
                  tasks, but does not have a common established system, clients
                  could not quickly and simply achieve their main goals, which
                  meant that the key function of the portal could not be
                  successfully completed.
                </AnimationOnScroll>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.dcrVideo}>
          <video
            src="/videos/projects/dcr/dcr.mp4"
            controls={false}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className={styles.dcrColorsFull}>
        <img
          src="/images/projects/dcr/colors.png"
          className={styles.dcrProblemColorsImage}
          alt="colors"
        />
        <div className={styles.dcrColors}>
          <div className={styles.dcrColorsList}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              as="div"
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem1}`}
              >
                <div>162B43</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.3}
              as="div"
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem2}`}
              >
                <div>42A7E4</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.8}
              as="div"
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem3}`}
              >
                <div>9FDBFF</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.6}
              as="div"
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem4}`}
              >
                <div>F7685B</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={1.1}
              as="div"
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem5}`}
              >
                <div>F59D12</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.4}
              as="div"
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem6}`}
              >
                <div>2ED47A</div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrColorsText}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="div"
            >
              <h2>Brand Identity</h2>
            </AnimationOnScroll>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.5}
                as="span"
              >
                Since the client already had a ready-made logo with 4 main
                colors - yellow-orange, red, blue and green, we preferred to
                stick to exactly this color scheme in order to preserve the
                concept of the site, as well as the general perception and
                associations of the service and company by clients.
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.7}
                as="span"
              >
                Based on these colors, we have developed an individual UI kit
                for a unified website style with various elements, checkboxes,
                buttons, alining with the style of the company.
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.9}
                as="span"
              >
                The main color of the site was chosen to be blue with its
                various shades, as it goes well with SAAS, is associated with
                stability, durability, reliability, does not distract attention
                and does not cause negative emotions.
              </AnimationOnScroll>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
