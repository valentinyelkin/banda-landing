import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './about.module.scss';

const About: React.FunctionComponent = () => {
  return (
    <section className={styles.shedAbout}>
      <div className={styles.shedAboutWrapper}>
        <div className={styles.shedAboutImg}>
          <img
            src="/images/projects/Shed/application-for-renting-and-leasing.png"
            alt="Application for renting and leasing"
          />
        </div>
        <div className={styles.shedAboutContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2>About</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            delay={0.5}
            duration={1}
            as="span"
          >
            <p>
              <span>The Shed</span> is a service where you can find everything
              you need - rent or lease the equipment and goods for any
              situation. Now you do not have to buy things that you need to use
              only once or for a short period of time, you can just rent them.
              Take advantage of The Shed and offer something for rent; things
              that lie idle and do not bring joy and profit with this rental
              service turn into a valuable acquisition. The storage warehouse is
              free to use and you can store everything available for rent not in
              your apartment, but in the company&apos;s warehouse. An owner can
              pick up their stuff at any time if the item is in stock.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.shedAboutDecor}>
        <img src="/images/projects/Shed/logo-grey.png" alt="Shed about" />
      </div>
      <div className={styles.shedAboutWrapper}>
        <div className={styles.shedAboutContentSecond}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <p>
              To sum up, <span>The Shed</span> provides several advantages -
              unnecessary things do not consume additional space, a passive
              acquisition turns into an active one, one can save money by not
              buying a necessary product for the full cost but by renting
              everything they need, doing it all on one resource without
              contacting each owner individually. Furthermore, if you care about
              the environment, renting is better than producing an endless
              amount of new goods. After all, many acquisitions do not go out of
              operation, they simply take up space in our garages. The consumer
              potential of the planet is unlimited, but new production only
              pollutes the environment.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedAboutImg}>
          <img
            src="/images/projects/Shed/easy-rentals.png"
            alt="Easy rentals"
          />
        </div>
      </div>
      <div className={styles.shedAboutVideo}>
        <Image
          src="/images/projects/Shed/animation.gif"
          alt="animation"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default About;
