import React, { FC } from 'react';
import styles from './Project.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import Image from 'next/image';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';

const Project: FC = (): JSX.Element => {
  return (
    <div className={globalStyles.section}>
      <div className={globalStyles.container}>
        <div className={styles.wrapper}>
          <div>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInLeftBig}
              duration={1}
            >
              <Image
                src="/images/projects/Insidely/project.png"
                alt="Hotel platform dashboard"
                width="752px"
                height="432px"
              />
            </AnimationOnScroll>
          </div>
          <div className={styles.box}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInDownBig}
              duration={1}
            >
              <h2 className={globalStyles.title}>Project owner benefits</h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUpBig}
              duration={1}
            >
              <div className={globalStyles.text}>
                <p>
                  <span>Insidely</span> ensures everyone is on the same page
                  regarding everyday hotel activities, which boosts staff
                  productivity and facilitates cost savings through operational
                  efficiency.
                  <span>
                    The possibility of real-time monitoring of hotel operations{' '}
                  </span>{' '}
                  means hardly any unfinished/ overlooked tasks, unexpected
                  issues, miscommunication, or costly mistakes.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
