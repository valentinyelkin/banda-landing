import React, { FC } from 'react';
import styles from './Timeline.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import { constants } from '../assets/constants';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';

const Timeline: FC = (): JSX.Element => {
  return (
    <section className={globalStyles.section}>
      <div className={`${styles.wrap} ${globalStyles.section}`}>
        <h2 className={`${globalStyles.title} ${globalStyles.title_center}`}>
          Timeline
        </h2>
        <div className={styles.inner}>
          {constants.timeline.map((item) => (
            <div key={item.id} className={` ${styles[`position_${item.id}`]}`}>
              <AnimationOnScroll
                animationName={AnimationNames.zoomIn}
                duration={item.duration}
                delay={item.delay}
                as="span"
              >
                <div
                  className={`${styles.item} ${styles[`item_${item.id}`]}`}
                  key={item.id}
                  style={{
                    background: item.color,
                  }}
                >
                  <h3>{item.name}</h3>
                  <div>{item.months}</div>
                </div>
              </AnimationOnScroll>
            </div>
          ))}
          <div className={styles.line}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInLeft}
              duration={1}
              as="span"
            >
              <div />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
