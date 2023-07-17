import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './images.module.scss';

const Images: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpImages}>
      {isMobile ? (
        <>
          <div className={styles.sunUpImagesFirst}>
            <img
              src="/images/projects/SunUp/mobile/web-service-for-solar-panel-installation-management-1.png"
              alt="SunUp main"
            />
            <img
              src="/images/projects/SunUp/mobile/web-service-for-solar-panel-installation-management-2.png"
              alt="SunUp main"
            />
            <img
              src="/images/projects/SunUp/solution-for-3d-solar-panel-layout.png"
              alt="Solution for 3d solar panel layout"
            />
          </div>
          <div className={styles.sunUpImagesSecond}>
            <div>
              <h2>Results</h2>
              <p>
                We have created intuitive user interface for an interactive web
                application, following modern trends in design. The user
                questionnaire clearly showed that the new user experience
                oriented design is more convenient and comprehensible, as well
                as average user’s time for panels layout creation has decreased
                by 45%
              </p>
            </div>
            <img
              src="/images/projects/SunUp/mobile/solar-panels-on-rooftops-1.png"
              alt="SunUp main"
            />
            <img
              src="/images/projects/SunUp/mobile/solar-panels-on-rooftops-2.png"
              alt="SunUp main"
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.sunUpImagesWrapper}>
            <div className={styles.sunUpImagesMain}>
              <Image
                src="/images/projects/SunUp/web-service-for-solar-panel-installation-management.webp"
                alt="Web service for solar panel installation management"
                width={1616}
                height={840}
              />
              <div>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                >
                  <h2>Results</h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.3}
                  as="span"
                >
                  <p>
                    We have created intuitive user interface for an interactive
                    web application, following modern trends in design. The user
                    questionnaire clearly showed that the new user experience
                    oriented design is more convenient and comprehensible, as
                    well as average user’s time for panels layout creation has
                    decreased by 45%
                  </p>
                </AnimationOnScroll>
              </div>
            </div>
            <div className={styles.sunUpImagesContent}>
              <div className={styles.sunUpImagesContentImg}>
                <img
                  src="/images/projects/SunUp/solution-for-3d-solar-panel-layout.png"
                  alt="Solution for 3d solar panel layout"
                />
              </div>
            </div>
          </div>
          {/*<div className={styles.sunUpImagesBack}>*/}
          {/*  <img src="/images/projects/SunUp/images-bg.png" alt="SunUp back" />*/}
          {/*  <div className={styles.sunUpImagesBackImg}>*/}
          {/*    <img*/}
          {/*      src="/images/projects/SunUp/images-3.png"*/}
          {/*      alt="SunUp interface"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </>
      )}
      <div className={styles.thanksMessage}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.3}
          as="span"
        >
          Thanks for watching :)
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Images;
