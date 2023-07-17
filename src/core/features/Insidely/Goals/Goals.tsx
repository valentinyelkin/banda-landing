import React, { FC } from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import styles from './Goals.module.scss';
import { constants } from '../assets/constants';
import Image from 'next/image';

const Goals: FC = (): JSX.Element => {
  return (
    <section className={globalStyles.section}>
      <div className={globalStyles.container}>
        <div>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUpBig}
            duration={1}
          >
            <h2
              className={`${globalStyles.title} ${globalStyles.title_center}`}
            >
              Main goals of the project
            </h2>
          </AnimationOnScroll>
          <div className={styles.goals}>
            {constants.goals.map((item) => (
              <AnimationOnScroll
                key={item.id}
                animationName={AnimationNames.zoomIn}
                duration={item.duration}
                as="span"
              >
                <div className={styles.goal}>
                  <div
                    className={styles.picture}
                    style={{ background: item.color }}
                  >
                    <Image src={item.image} alt="" width="40px" height="40px" />
                  </div>
                  <div>{item.text}</div>
                </div>
              </AnimationOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
