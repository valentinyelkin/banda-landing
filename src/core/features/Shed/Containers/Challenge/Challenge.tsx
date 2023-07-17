import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './challenge.module.scss';

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.shedChallenge}>
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
        delay={0.5}
        as="span"
      >
        <p className={styles.shedChallengeSubtitle}>
          To create high-quality design, our team needed to solve several
          problems:
        </p>
      </AnimationOnScroll>
      <ul className={styles.shedChallengeList}>
        <li>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="div"
          >
            <span>01.</span> Creating an account for 3 user types: owners
            (placing things in a warehouse and tracking rent); renters (saving
            necessary things, reading notes and tracking the regions with; the
            necessary stuff) warehouse (tracking the movement, arrival and
            status of things to register them on the site)
          </AnimationOnScroll>
        </li>
        <li>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            delay={0.5}
            as="div"
          >
            <span>03.</span> Creating a search engine for users that takes into
            account search filters and optimizes the search process. The flow to
            the end goal (rent) should not take much time, the search page
            includes a search box and navigation in the categories specified by
            the client.
          </AnimationOnScroll>
        </li>
        <li>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            as="div"
          >
            <span>02.</span> Simplicity in uploading and placing goods on the
            site, as well as accounting for the status of the rent (confirmation
            of its arrival, condition, cost). The whole scenario of product
            verification should be clear to anyone who wants to use the
            application (targeting an average person who does not have the time
            and desire to dig into complex bureaucracy)
          </AnimationOnScroll>
        </li>
        <li>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            delay={0.5}
            as="div"
          >
            <span>04.</span> Remote quality control: the application reads the
            QR code of the goods upon arrival of the order and uploads the video
            with the order printout, which confirms the integrity and
            serviceability of the delivered goods
          </AnimationOnScroll>
        </li>
      </ul>
      <div className={styles.shedChallengeSteps}>
        <div className={styles.shedChallengeStepsItem}>
          <div className={styles.shedChallengeStepsIcon}>
            <img
              src="/images/projects/Shed/user-acc.png"
              alt="Shed Problematics"
            />
          </div>
          <p>different user Accounts</p>
        </div>
        <div className={styles.shedChallengeStepsItem}>
          <div className={styles.shedChallengeStepsIcon}>
            <img
              src="/images/projects/Shed/check.png"
              alt="Shed Problematics"
            />
          </div>
          <p>remote quality control</p>
        </div>
        <div className={styles.shedChallengeStepsItem}>
          <div className={styles.shedChallengeStepsIcon}>
            <img
              src="/images/projects/Shed/search.png"
              alt="Shed Problematics"
            />
          </div>
          <p>unique search engine</p>
        </div>
        <div className={styles.shedChallengeStepsItem}>
          <div className={styles.shedChallengeStepsIcon}>
            <img src="/images/projects/Shed/link.png" alt="Shed Problematics" />
          </div>
          <p>Clear product verification</p>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
