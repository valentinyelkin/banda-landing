import React, { FC } from 'react';
import styles from './Functionality.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import Circle from '../components/Circle/Circle';
import Image from 'next/image';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';

const Functionality: FC = (): JSX.Element => {
  return (
    <section className={globalStyles.section}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeftBig}
            duration={1}
          >
            <Image
              src="/images/projects/Insidely/functionality.png"
              alt="Hotel staff handbook"
              width="873px"
              height="752px"
            />
          </AnimationOnScroll>
        </div>
        <div className={`${styles.box} ${globalStyles.container}`}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInDownBig}
            duration={1}
          >
            <h2 className={globalStyles.title}>Functionality</h2>
          </AnimationOnScroll>
          <ul className={globalStyles.list}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <li>
                <Circle color="#3F53D9" />
                <div>
                  <span>Staff communication and interaction: </span>features
                  like Messenger, Handovers and News & Announcements facilitate
                  productive communication and collaboration among hotel teams.
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
                  <span> Task management: </span> task setting, task status
                  updates and schedules ensure proper and timely task completion
                  by staff.
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
                  <span> Alerts and notifications:</span> right hotel staff
                  members and/or teams are instantly informed of any issues and
                  can address them asap.
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
                  <span> Checklists:</span> automatically notify shifts and
                  departments of routine duties to avoid missed deadlines and
                  make sure nothing is overlooked.
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
                  <span>Databases:</span> keep track of housekeeping and
                  maintenance inventory as well as contractors network. Create a
                  custom knowledge base with training materials.
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
                  <span>Analytics and reporting: </span>Monitor performance,
                  identify trends and determine opportunities to improve and
                  develop.
                </div>
              </li>
            </AnimationOnScroll>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Functionality;
