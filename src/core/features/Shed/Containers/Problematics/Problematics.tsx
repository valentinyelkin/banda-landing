import React from 'react';
import styles from './problematics.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';

const Problematics: React.FunctionComponent = () => {
  return (
    <section className={styles.shedProblematics}>
      <div className={styles.shedProblematicsWrapper}>
        <div className={styles.shedProblematicsContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2>Problematics</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
            as="span"
          >
            <p>
              The sharing service helps to solve several problems at the same
              time. The main task is to create a service with a quick product
              search, high-quality sorting and data ranking. The second task is
              to minimize the number of steps to the end point. To solve this
              problem, it was necessary to create a dashboard UI, optimizing all
              necessary functions. The design was based on the company logo and
              color palette, as well as client&apos;s mind map.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedProblematicsImg}>
          <img
            src="/images/projects/Shed/rental-and-leasing-platform.png"
            alt="Rental and leasing platform"
          />
        </div>
      </div>
      <div className={styles.shedProblematicsDecor}>
        <img
          src="/images/projects/Shed/logo-grey.png"
          alt="Shed Problematics"
        />
      </div>
      <div className={styles.shedProblematicsWrapper}>
        <div className={styles.shedProblematicsImg}>
          <img
            src="/images/projects/Shed/easy-leasing-solution.png"
            alt="Easy leasing solution"
          />
        </div>
        <div className={styles.shedProblematicsContentSecond}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <p>
              The product was created from scratch, we had just the basics and
              the understanding of the functionality, provided by the client.
              New company - new service. The main task was to create a
              full-fledged product with a convenient infrastructure. High
              fidelity prototype was created based on the client’s mind map. As
              we went along, we improved user interaction processes by reducing
              the number of steps from search to the final goal (rental of the
              necessary product). The color scheme and logo provide by the
              client harmoniously fit into the product design and were approved
              as the brand colors of the company.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.shedProblematicsDecor}>
        <img
          src="/images/projects/Shed/logo-grey.png"
          alt="Shed Problematics"
        />
      </div>
      <img
        src="/images/projects/Shed/circle-half.png"
        alt="Shed Problematics"
        className={styles.circleHalf}
      />
    </section>
  );
};

export default Problematics;
