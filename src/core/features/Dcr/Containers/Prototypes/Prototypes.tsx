import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './prototypes.module.scss';

const Prototypes: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.dcrPrototypes}>
      <div className={styles.dcrPrototypesWrapper}>
        <img
          src="/images/projects/dcr/wireframe.png"
          className={styles.dcrPrototypesWireframeImage}
          alt="wireframe"
        />
        <img
          src="/images/projects/dcr/web-platform-for-businesses-prototype-map.png"
          className={styles.dcrPrototypesMap}
          alt="Web platform for businesses prototype map"
        />
        <div className={styles.dcrPrototypesTextWrapper}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h2>Prototypes</h2>
          </AnimationOnScroll>
          <div className={styles.dcrPrototypesText}>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.5}
                >
                  Prototyping allowed us to speed up the entire design process,
                  see the whole picture of the application, and also use the
                  project budget in a more rational way.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.7}
                >
                  Based on the analysis, we arranged the elements and blocks on
                  the portal in a different way, resorting to minimal changes on
                  the site so as not to complicate further user interaction with
                  the service.
                </AnimationOnScroll>
              </p>
            </div>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.9}
                >
                  Due to the prototype, the client was able to see the changes
                  and evaluate new capabilities of his product. In addition, we
                  have come up with some new useful user scripts.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={1.1}
                >
                  Thus, we have managed to significantly improve the usability
                  of the DCR Solutions portal.
                </AnimationOnScroll>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dcrPrototypesImagesWrapper}>
        {isMobile ? (
          <>
            <img
              src="/images/projects/dcr/web-platform-for-businesses-prototype-1-mobile.png"
              alt="Web platform for businesses prototype"
            />
            <img
              src="/images/projects/dcr/web-platform-for-businesses-prototype-2-mobile.png"
              alt="Web platform for businesses prototype"
            />
            <img
              src="/images/projects/dcr/web-platform-for-businesses-prototype-3-mobile.png"
              alt="Web platform for businesses prototype"
            />
            <img
              src="/images/projects/dcr/web-platform-for-businesses-prototype-4-mobile.png"
              alt="Web platform for businesses prototype"
            />
          </>
        ) : (
          <img
            src="/images/projects/dcr/web-platform-for-businesses-prototype.png"
            alt="Web platform for businesses prototype"
          />
        )}
      </div>
    </section>
  );
};

export default Prototypes;
