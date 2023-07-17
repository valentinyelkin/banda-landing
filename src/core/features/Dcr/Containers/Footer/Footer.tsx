import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './footer.module.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.dcrFooter}>
      <div className={styles.dcrFooterWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={0.5}
          as="span"
        >
          <h2>Results</h2>
        </AnimationOnScroll>
        <div className={styles.dcrFooterList}>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              as="span"
            >
              <img src="/images/projects/dcr/device.png" alt="" />
              <p>Updated company image</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.2}
              as="span"
            >
              <img src="/images/projects/dcr/ui.png" alt="" />
              <p>Responsive UI design</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.4}
              as="span"
            >
              <img src="/images/projects/dcr/routes.png" alt="" />
              <p>Convenient user journey</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.6}
              as="span"
            >
              <img src="/images/projects/dcr/search.png" alt="" />
              <p>Simple search tasks</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.8}
              as="span"
            >
              <img src="/images/projects/dcr/interaction.png" alt="" />
              <p>Modernized interaction on the site</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={1}
              as="span"
            >
              <img src="/images/projects/dcr/graph.png" alt="" />
              <p>Increase in the number of company clients</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={1.2}
              as="span"
            >
              <img src="/images/projects/dcr/budget.png" alt="" />
              <p>Increase in the company budget</p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className={styles.dcrFooterBottom} />
    </footer>
  );
};

export default Footer;
