import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './implementation.module.scss';

const Implementation: React.FunctionComponent = () => {
  return (
    <section className={styles.shedImplementation}>
      <div className={styles.shedImplementationWrapper}>
        <div className={styles.shedImplementationImg}>
          <img
            src="/images/projects/Shed/fast-items-listing-for-rent.png"
            alt="Fast items listing for rent"
          />
        </div>
        <div className={styles.shedImplementationContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2>Implementation</h2>
          </AnimationOnScroll>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
              delay={0.5}
            >
              <span className={styles.shedGreenText}>01.</span> The ability to
              satisfy all 3 user types in 100% of requests is not achievable in
              real conditions. In order to attract users to the site, we
              suggested satisfying all the requests of the renter’s account
              page. We managed to build the correct user interaction and keep
              them on the site, which in its turn contributed to the development
              of The shed service.
            </AnimationOnScroll>
          </p>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
              delay={0.7}
            >
              <span className={styles.shedGreenText}>02.</span> When developing
              user flow design of the application, important factors are
              understanding its functionality and building the flow for user
              actions. Correctly composed requirements, credits to the client’s
              team and our project team, helped to quickly agree on the list of
              details, think over and describe their functioning in the
              application.
            </AnimationOnScroll>
          </p>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
              delay={0.9}
            >
              <span className={styles.shedGreenText}>03.</span> Prototyping lays
              the foundation for a final application design. At this stage, the
              UX is being built, including the correct button layout and the
              functional of The shed application features. We suggested several
              options from which the client was able to choose the more
              convenient and clear one. Approval took several stages and
              required working on each option.
            </AnimationOnScroll>
          </p>
        </div>
      </div>
      <div className={styles.shedImplementationDecor}>
        <img
          src="/images/projects/Shed/logo-grey.png"
          alt="Shed Implementation"
        />
      </div>
      <div className={styles.shedImplementationWrapper}>
        <div className={styles.shedImplementationContentSecond}>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
            >
              <span className={styles.shedGreenText}>04.</span> The application
              design and color solution were supposed to be as simple as
              possible, without additional load, which allowed The shed clients
              to focus on renting. Calm and muted tones of the panels do not
              draw attention and a user is focused on the product image and its
              search. The company logo was taken as the basis for application
              colors. We also designed and then developed the design of the SAAS
              system which facilitates the renting process for users. Due to the
              well-built logical chain and an easy-to-read interface, the
              product attracted more users.
            </AnimationOnScroll>
          </p>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              as="span"
              delay={0.5}
            >
              <span className={styles.shedGreenText}>05.</span> The application
              was implemented for tablets and mobile phones. Thus, we were
              immediately ensured its accessibility anytime and anywhere.
              Applications for portable devices are now in great demand, which
              explains the client’s choice for the project implementation on
              mobile devices.
            </AnimationOnScroll>
          </p>
        </div>
        <div className={styles.shedImplementationImg}>
          <img
            src="/images/projects/Shed/tracking-leased-items.png"
            alt=" Tracking leased items"
          />
        </div>
      </div>
      <div className={styles.shedImplementationVideo}>
        <img
          src="/images/projects/Shed/sheduling-of-rentals.png"
          alt="Sheduling of rentals"
        />
      </div>
    </section>
  );
};

export default Implementation;
