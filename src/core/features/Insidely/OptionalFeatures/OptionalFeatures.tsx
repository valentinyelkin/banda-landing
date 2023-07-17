import React, { FC } from 'react';
import styles from './OptionalFeatures.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import Circle from '../components/Circle/Circle';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import { constants } from '../assets/constants';

const OptionalFeatures: FC = (): JSX.Element => {
  return (
    <section className={globalStyles.section}>
      <div className={styles.wrapper}>
        <div className={styles.figures}>
          {constants.figuresOptions.map((item) => (
            <AnimationOnScroll
              key={item.id}
              animationName={AnimationNames.zoomIn}
              duration={item.duration}
              as="span"
            >
              <div
                className={`${styles.figure} ${styles[`figure_${item.id}`]}`}
              />
            </AnimationOnScroll>
          ))}
        </div>
        <div className={`${styles.box} ${globalStyles.container}`}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInDownBig}
            duration={1}
          >
            <h2 className={globalStyles.title}>
              Optional features that can be added to similar project types
            </h2>
          </AnimationOnScroll>
          <ul className={`${globalStyles.list} ${styles.list}`}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#3F53D9" />
                <div>
                  <span> In-app translation </span>facilitates collaboration
                  among multilingual staff.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#C653B9" />
                <div>
                  <span>Room status</span> feature assigns various statuses to
                  guestrooms, such as “cleaned”, “out-of-order”, etc.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#FBD347" />
                <div>
                  <span> Lost and Found </span>is a feature for easy management
                  of guests’ lost possessions: unique ID for each item, item
                  status, automatic records of the guest name, room number, item
                  description and where it was found/lost, a filter option for
                  quick search.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#58D382" />
                <div>
                  <span>Virtual concierge </span>- an AI-based tool for
                  automatic dealing with guests requests and service orders.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#3F53D9" />
                <div>
                  <span>Individual workload and schedule management </span> -
                  workload overview and schedule generation for each staff
                  member.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#C653B9" />
                <div>
                  <span> Performance statistics and evaluation </span> enables
                  performance assessment of departments as well as each worker
                  individually.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#FBD347" />
                <div>
                  <span>Room booking management</span>enables monitoring of
                  guest room bookings to get them ready in time.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#58D382" />
                <div>
                  <span> Events booking management </span> helps to stay on top
                  of all event activities and makes preparation hassle-free.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#3F53D9" />
                <div>
                  <span> Reputation management </span>feature helps to monitor
                  and interact with hotel reviews left by guests on different
                  online platforms.
                </div>
              </li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#C653B9" />
                <div>
                  <span> Forecast </span> - by establishing integration with a
                  hotel’s PMS, the system will be able to do projected
                  estimations of hotel occupancy, staffing needs, room and
                  venues readiness time, based on inventory and reservation
                  data, as well as past-periods trends.
                </div>
              </li>
            </AnimationOnScroll>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OptionalFeatures;
