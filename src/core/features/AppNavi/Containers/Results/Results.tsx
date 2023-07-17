import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './results.module.scss';
import stylesMainBlock from '../MainBlock/mainBlock.module.scss';

const Results: React.FunctionComponent = () => {
  return (
    <section className={styles.appNaviResults}>
      <div className={styles.appNaviResultsContainer}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2 className={stylesMainBlock.appNaviH2}>Results</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.zoomIn}
          duration={1}
          delay={0.5}
          as="span"
        >
          <blockquote className={stylesMainBlock.appNaviBlockquote}>
            <p className={styles.appNaviResultsSubtitle}>
              The collaboration was very creative and professional in every
              sense. Milestones were quickly developed and pragmatically refined
              in a swift iterative process. We were very satisfied with the
              results in every respect and can recommend BandaPixels with a
              clear conscience.
            </p>
            <cite>
              <b>Carsten Neumann,</b>
              <br />
              co-owner of the AppNavi project
            </cite>
          </blockquote>
        </AnimationOnScroll>
        <div className={styles.resultsSteps}>
          <div className={styles.twoStepsRow}>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInRight}
                duration={1}
                as="span"
              >
                <span className={styles.stepItemNumber}>1</span>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={1}
                delay={1}
                as="div"
              >
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName={AnimationNames.fadeInUp}
                    duration={1}
                    delay={1.5}
                    as="span"
                  >
                    <p className={stylesMainBlock.appNaviParagraph}>
                      Deployed at scale on device This product is designed to be
                      downloaded and deployed at scale on devices (e.g. mobile
                      applications, intelligent agents, etc.)
                    </p>
                    <p className={stylesMainBlock.appNaviParagraph}>
                      Deployed on server This product is an on-premise/hosted
                      solution designed to be downloaded and deployed on a
                      server.
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInRight}
                duration={1}
                as="span"
              >
                <span className={styles.stepItemNumber}>2</span>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={1}
                delay={1}
                as="div"
              >
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName={AnimationNames.fadeInUp}
                    duration={1}
                    delay={1.5}
                    as="span"
                  >
                    <p className={stylesMainBlock.appNaviParagraph}>
                      Software-as-a-Service solution This product is delivered
                      online as a subscription service.
                    </p>
                    <p className={stylesMainBlock.appNaviParagraph}>
                      User Assistance provided Assistance is provided to enable
                      all target users to install, configure, and use the
                      solution.
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.oneStepRow}>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInRight}
                duration={1}
                as="span"
              >
                <span className={styles.stepItemNumber}>3</span>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={1}
                delay={1}
                as="div"
              >
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName={AnimationNames.fadeInUp}
                    duration={1}
                    delay={1.5}
                    as="span"
                  >
                    <p className={stylesMainBlock.appNaviParagraph}>
                      Works with SAP Extension Suite and SAP Integration Suite
                      This solution leverages the technologies of the SAP
                      Extension Suite and SAP Integration Suite.
                    </p>
                    <p className={stylesMainBlock.appNaviParagraph}>
                      Integrates with SAP Cloud solutions This product
                      integrates with SAP cloud solutions using standard
                      SAP-approved interfaces and APIs. It is designed to be
                      delivered over a network as a cloud service.
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
