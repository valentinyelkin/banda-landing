import React from 'react';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './userFlow.module.scss';

const MainBlock: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpUserFlowMain}>
      <div className={styles.sunUpUserFlowWrapper}>
        <div className={styles.sunUpUserFlowInfo}>
          <AnimationOnScroll
            duration={1}
            animationName={AnimationNames.fadeInUp}
          >
            <h3>User fIow</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            delay={0.5}
            duration={1}
            animationName={AnimationNames.fadeInUp}
          >
            <p>
              User flow was done as a succession of screens that display the
              complete path a user takes when using this web app.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.sunUpUserFlowMap}>
          {isMobile ? (
            <>
              <img
                src="/images/projects/SunUp/mobile/flow-1.png"
                alt="SunUp flow first screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-2.png"
                alt="SunUp flow second screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-3.png"
                alt="SunUp flow third screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-4.png"
                alt="SunUp flow fourth screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-5.png"
                alt="SunUp flow fifth screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-6.png"
                alt="SunUp flow sixth screen"
              />
            </>
          ) : (
            <img
              src="/images/projects/SunUp/userFlow-map.png"
              alt="SunUp user flow map"
            />
          )}
        </div>
        <div className={styles.sunUpUserFlowInterface}>
          {isMobile ? null : (
            <img
              src="/images/projects/SunUp/userFlow-interface.png"
              alt="SunUp user flow interface"
            />
          )}
        </div>
        <AnimationOnScroll duration={1} animationName={AnimationNames.fadeInUp}>
          <p className={styles.sunUpUserFlowWireframes}>12 Wireframes</p>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default MainBlock;
