import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './technologies.module.scss';
import stylesMainBlock from '../MainBlock/mainBlock.module.scss';

const Technologies: React.FunctionComponent = () => {
  return (
    <section className={styles.technologiesWrapper}>
      <div className={styles.technologiesContainer}>
        <div className={styles.technologiesContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
          >
            <h2 className={stylesMainBlock.appNaviH2}>Technologies used</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
            as="div"
          >
            <div className={styles.technologiesIconWrapper}>
              <img src="/images/projects/AppNavi/HTML.svg" alt="HTML" />
              <img src="/images/projects/AppNavi/CSS.svg" alt="CSS" />
              <img src="/images/projects/AppNavi/Node.svg" alt="Node" />
              <img src="/images/projects/AppNavi/js.svg" alt="JS" />
              <img src="/images/projects/AppNavi/ngnix.svg" alt="Ngnix" />
              <img src="/images/projects/AppNavi/AWS.svg" alt="AWS" />
              <img src="/images/projects/AppNavi/Docker.svg" alt="DOcker" />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <img
        src="/images/projects/AppNavi/application-users-feedback.svg"
        alt="Application users feedback"
        className={styles.technologiesLayout}
      />
    </section>
  );
};

export default Technologies;
