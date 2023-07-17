import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import stylesMainBlock from '../MainBlock/mainBlock.module.scss';
import styles from './problematics.module.scss';

const Problematics: React.FunctionComponent = () => {
  return (
    <section className={styles.problematicsWrapper}>
      <div className={styles.appNaviContainer}>
        <div className={styles.problematicsInfo}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2 className={stylesMainBlock.appNaviH2}>Problematics</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
            as="span"
          >
            <p className={stylesMainBlock.appNaviParagraph}>
              <span className={stylesMainBlock.blueText}>AppNavi</span> suggests
              a completely new approach to employee training as well as
              increases all specialists&apos; work efficiency. However, despite
              the rather high popularity among the clients, confusing and
              unoptimized user flows became a real obstacle for the company in
              attracting new clients. Initially, the problem lied in relatively
              outdated application design. The AppNavi program looked too
              complicated and didn’t establish any trust with the users, raising
              fear that they wouldn’t be able to puzzle it out.Thus, it couldn’t
              guarantee an increase in clients and in company budget.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
            as="div"
          >
            <div className={styles.problematicsQuote}>
              <blockquote
                className={`${stylesMainBlock.appNaviBlockquote} ${styles.problematicQuote}`}
              >
                <em className={styles.problematicsQuoteSubtitle}>
                  Apart from that, the app already had its users who were used
                  to it, which we needed to keep in mind while making new design
                  and changing old software version to the new technology stack.
                </em>
              </blockquote>
            </div>
          </AnimationOnScroll>
        </div>
        <div className={styles.decorP}>
          <img src="/images/projects/AppNavi/p.svg" alt="Decor P" />
        </div>
      </div>
      <AnimationOnScroll
        animationName={AnimationNames.zoomIn}
        duration={1}
        delay={0.25}
      >
        <div className={styles.wrapperAppLayOut}>
          <img
            src="/images/projects/AppNavi/educational-application-layout.png"
            alt="Educational application layout"
          />
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Problematics;
