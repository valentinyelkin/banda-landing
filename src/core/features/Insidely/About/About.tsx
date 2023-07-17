import React, { FC } from 'react';
import Image from 'next/image';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import styles from './About.module.scss';
import { constants } from '../assets/constants';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';

const About: FC = (): JSX.Element => {
  return (
    <section className={globalStyles.section}>
      <div className={styles.wrap}>
        <div className={styles.item}>
          <div className={styles.imgTop}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInLeftBig}
              duration={1}
            >
              <Image
                src="/images/projects/Insidely/about_1.png"
                alt="Hotel team list"
                width="800px"
                height="745px"
              />
            </AnimationOnScroll>
          </div>
          <div className={`${globalStyles.container} ${styles.box}`}>
            <div>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInDownBig}
                duration={1}
              >
                <h2 className={globalStyles.title}>About the project</h2>
              </AnimationOnScroll>
            </div>
            <div className={styles.tags}>
              {constants.aboutProjects.map((item, index) => (
                <AnimationOnScroll
                  key={item.id}
                  animationName={AnimationNames.zoomIn}
                  duration={item.duration}
                  as="span"
                >
                  <div
                    className={styles.tag}
                    style={{
                      background: item.color,
                      color: index < 2 ? '#FFFFFF' : '#050038',
                    }}
                  >
                    <div className={styles.count}>{item.count}</div>
                    <div>{item.text}</div>
                  </div>
                </AnimationOnScroll>
              ))}
            </div>
            <div className={globalStyles.text}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUpBig}
                duration={1}
              >
                <p>
                  <span> Insidely </span> is a feature-rich solution for
                  managing internal operations of a hotel and streamlining staff
                  collaboration. It consolidates separate daily hotel operations
                  typically performed by different department members into one
                  transparent and easily manageable system. It is an efficient
                  tool for
                  <span> organizing, tracking and improving </span> all
                  housekeeping and maintenance activities. Enhanced with a
                  resource module for staff training and guest service tools,
                  the application boosts overall staff productivity and
                  increases the service excellence of a hotel.
                </p>
                <p>
                  Hotels are operations-heavy institutions, and these activities
                  take place in different locations at different times, which
                  makes it difficult to efficiently oversee and organize them
                  across different shifts, departments, floors and properties.
                  That’s why our clients needed a{' '}
                  <span> full-fledged operation management tool </span> to be
                  able to abandon traditional staff communication methods/ways
                  (logbooks, post-it notes and mobile messengers) that often
                  resulted in time loss, costly mistakes, service delays and
                  complaints from guests.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.box}>
            <div className={`${globalStyles.text} ${styles.left} `}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUpBig}
                duration={1}
              >
                <p>
                  Top priorities of the project included functionality for
                  <span> staff collaboration </span> , setting and monitoring
                  <span> housekeeping activities,</span>
                  handling maintenance operations and improving overall
                  maintenance status of the property.
                </p>
                <p>
                  Besides, the hotel management needed a system of
                  <span> organized training resources </span> for new staff
                  members, given a present high staff turnover at the venue.
                </p>
                <p>
                  Last but not the least,
                  <span> collaboration with guests </span> also required some
                  improvement, as the hotel sometimes receives complaints about
                  overlooked or unresolved requests. As it has been found out
                  that such situations occur because of insufficient
                  communication between shifts and departments, it was agreed to
                  add guests requests and complaints management tools.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.imgLeft}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRightBig}
              duration={1}
            >
              <Image
                src="/images/projects/Insidely/about_2.png"
                alt="Hotel staff collaboration"
                width="815px"
                height="758px"
              />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
