import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '../components/Logo/Logo';
import styles from './Main.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import Figures from './components/Figures/Figures';
import globalStyles from '../assets/scss/insidely_global.module.scss';

const Main: FC = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <div className={`${globalStyles.container} ${styles.info}`}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInDownBig}
          duration={1}
          as="span"
        >
          <Logo />
          <h1 className={styles.title}>
            Task management and staff collaboration
            <div>
              <span>solution</span>
            </div>
          </h1>
        </AnimationOnScroll>
      </div>
      <div className={styles.wrapperImage}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRightBig}
          duration={1}
          as="span"
        >
          <Image
            src="/images/projects/Insidely/main.png"
            alt="Task management solution"
            width="1127px"
            height="995px"
          />
        </AnimationOnScroll>
      </div>
      <Figures />
    </div>
  );
};

export default Main;
