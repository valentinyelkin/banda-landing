import React, { FC } from 'react';
import styles from './Fetures.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import Circle from '../components/Circle/Circle';
import { constants } from '../assets/constants';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image from 'next/image';

const Features: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.inner} ${globalStyles.container}`}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInDownBig}
          duration={1}
        >
          <h2 className={globalStyles.title}>
            Features that make this project unique
          </h2>
        </AnimationOnScroll>
        <ul className={styles.list}>
          {constants.features.map((feature) => (
            <AnimationOnScroll
              key={feature.id}
              animationName={AnimationNames.fadeInLeftBig}
              duration={feature.duration}
            >
              <li>
                <Circle color={feature.dotColor} />
                <div>
                  <div className={styles.feature_title}>{feature.name}</div>
                  {feature.item ? (
                    <ul>
                      {feature.item.map((item) => (
                        <li key={item}>
                          <Circle color={feature.dotColor} />
                          <div>{item}</div>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            </AnimationOnScroll>
          ))}
        </ul>
      </div>
      <div className={styles.image}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRightBig}
          duration={1}
        >
          <Image
            src="/images/projects/Insidely/features.png"
            alt="Hotel maintenance schedule"
            width="1025px"
            height="704px"
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Features;
