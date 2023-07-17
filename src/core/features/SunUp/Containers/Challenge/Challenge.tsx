import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './challenge.module.scss';

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpChallenge}>
      <div className={styles.challengeImg}>
        <img
          src="/images/projects/SunUp/web-application-features.png"
          alt="Web application features"
        />
      </div>
      <div className={styles.challengeInfo}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>Challenge</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.2}
          as="span"
        >
          <p>
            The client came up with the task to completely redesign the front
            part of an existing application. The main design challenge was
            customizing the old design and making it easy for the user, who is
            barely familiar with solar panel specifics, to find their way
            through the complex functionality of the application. On the
            development side, it was crucial to implement new design really time
            efficiently, as the app already had a number of users waiting for
            improvements.
          </p>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Challenge;
