import React, { FC } from 'react';
import styles from './Challenges.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import Circle from '../components/Circle/Circle';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../utils/useIsTablet';
import useIsMobile from '../../../utils/useIsMobile';
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from '../components/CustomCarousel/CustomCarousel';

const responsive = {
  laptop: {
    breakpoint: { max: 1800, min: 1440 },
    items: 1,
  },
  laptopSmall: {
    breakpoint: { max: 1440, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 1,
  },
  mobileL: {
    breakpoint: { max: 668, min: 425 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
  },
};
const Challenges: FC = (): JSX.Element => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <div className={globalStyles.section}>
      <div className={styles.wrapper}>
        <div className={globalStyles.container}>
          {!isTablet && !isMobile ? (
            <div className={styles.inner}>
              <div className={styles.column_1}>
                <div className={styles.title_wrap}>
                  <AnimationOnScroll
                    animationName={AnimationNames.fadeInDownBig}
                    duration={1}
                  >
                    <h2 className={globalStyles.title}>
                      Challenges and solutions
                    </h2>
                  </AnimationOnScroll>
                </div>
                <AnimationOnScroll
                  animationName={AnimationNames.zoomIn}
                  duration={1}
                  as="span"
                >
                  <div className={`${styles.item} ${styles.item_2}`}>
                    <div className={styles.title}>
                      The hotel wanted to better staff training and have a
                      digital database with checklists, guidelines and manuals
                    </div>
                    <div className={styles.text}>
                      We have added a <span>Handbook feature</span> that serves
                      as a knowledge source for staff. It enables managers to
                      assemble various collections of staff training materials,
                      such as standard operations procedures (SOPs), guidelines,
                      tutorials, articles, photos and videos.
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animationName={AnimationNames.zoomIn}
                  duration={1}
                  as="span"
                >
                  <div className={`${styles.item} ${styles.item_4}`}>
                    <div className={styles.title}>
                      A more efficient way of keeping the staff informed was
                      needed
                    </div>
                    <div className={styles.text}>
                      <span>News & Announcements feature</span> has been added
                      for instant share of important news and updates among
                      hotel staff. It can be used to introduce a new staff
                      member, notify the staff of team/ hotel events or
                      regulations updates.
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animationName={AnimationNames.zoomIn}
                  duration={1}
                  as="span"
                >
                  <div className={`${styles.item} ${styles.item_6}`}>
                    <div className={styles.title}>
                      The hotel required one central place to keep track of all
                      maintenance work and resources
                    </div>
                    <div className={styles.subTitle}>
                      Our team has built a comprehensive module for end-to-end
                      maintenance management with the following functionality:
                    </div>
                    <ul className={globalStyles.list}>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span> Maintenance issues reporting </span>- each
                          staff member can take a photo of the problem, write
                          details, and create a maintenance ticket in seconds.
                        </div>
                      </li>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span> Notifications</span> - maintenance teams are
                          instantly notified of any problems, can view details
                          in the application, including pictures, room numbers,
                          and notes from the staff who reported the issue.
                        </div>
                      </li>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span> Preventive maintenance schedule </span>- used
                          to create a schedule of preventive maintenance
                          procedures to avoid unexpected equipment break-downs,
                          extra costs and unhappy guests.
                        </div>
                      </li>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span>Inventory control</span> - makes sure the hotel
                          never runs out of stock by keeping track of the
                          maintenance supplies usage and issuing notifications
                          to restock in time.
                        </div>
                      </li>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span> Contractors network </span>- the feature makes
                          it possible to organize the records of your external
                          hotel maintenance contractors and coordinate
                          collaboration with them directly from the application.
                        </div>
                      </li>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span>Analytics</span> - the feature analyzes the
                          hotel maintenance performance data and costs involved,
                          and generates custom reports on the most frequent
                          problems and team/ contractors productivity.
                        </div>
                      </li>
                    </ul>
                  </div>
                </AnimationOnScroll>
              </div>
              <div className={styles.column_1}>
                <AnimationOnScroll
                  animationName={AnimationNames.zoomIn}
                  duration={1}
                  as="span"
                >
                  <div className={`${styles.item} ${styles.item_1}`}>
                    <div className={styles.title}>
                      The hotel needed a housekeeping management tool to plan
                      and supervise housekeeping tasks
                    </div>
                    <div className={styles.subTitle}>
                      We have worked out a housekeeping management module that
                      allows the hotel staff to:
                    </div>
                    <ul className={globalStyles.list}>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Schedule housekeeping tasks</span> in advance
                          and assign them to different team members.
                        </div>
                      </li>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Mark tasks as completed,</span> including
                          confirmation of room cleanness, linen change, minibar
                          restock, maintenance inspections and other essential
                          criteria.
                        </div>
                      </li>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Comment</span> on tasks and/or report a
                          maintenance issue in real time.
                        </div>
                      </li>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Analyze and create reports</span> of
                          housekeeping performance to optimize costs and ensure
                          high quality housekeeping service for your guests.
                        </div>
                      </li>
                    </ul>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animationName={AnimationNames.zoomIn}
                  duration={1}
                  as="span"
                >
                  <div className={`${styles.item} ${styles.item_3}`}>
                    <div className={styles.title}>
                      The hotel was looking to improve communication among
                      departments and sharing info between shifts
                    </div>
                    <div className={styles.subTitle}>
                      Our team has suggested the following tools:
                    </div>
                    <ul className={globalStyles.list}>
                      <li>
                        <Circle color="#C653B9" />
                        <div>
                          <span>Staff chat</span> - a messenger for staff
                          communication.
                        </div>
                      </li>
                      <li>
                        <Circle color="#C653B9" />
                        <div>
                          <span>Digital handovers</span> is a feature for
                          creating digital handover notes and making them
                          visible to other staff members.
                        </div>
                      </li>
                    </ul>
                  </div>
                </AnimationOnScroll>
                <div className={styles.column_7}>
                  <AnimationOnScroll
                    animationName={AnimationNames.zoomIn}
                    duration={1}
                    as="span"
                  >
                    <div className={`${styles.item} ${styles.item_5}`}>
                      <div className={styles.title}>
                        The hotel had problems with overlooking special requests
                        from guests and wanted to improve its guest services
                      </div>
                      <ul className={globalStyles.list}>
                        <li>
                          <Circle color="#FBD347" />
                          <div>
                            <span>Guests requests tool </span> has been
                            developed to note down and keep track of guests’
                            special requests. Having guests requests in the
                            system notifies the right team members and helps the
                            staff to address them asap.
                          </div>
                        </li>
                        <li>
                          <Circle color="#FBD347" />
                          <div>
                            <span> Complaints tool </span> has been added to
                            help the staff deal with complaints from unhappy
                            guests more efficiently. This feature allows the
                            staff to easily document the details of the issue(s)
                            and assign the right people to deal with it, as well
                            as set up a follow-up series until the problem is
                            completely resolved.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </AnimationOnScroll>
                  <AnimationOnScroll
                    animationName={AnimationNames.zoomIn}
                    duration={1}
                    as="span"
                  >
                    <div className={`${styles.item} ${styles.item_7}`}>
                      <div className={styles.title}>
                        The hotel needed a tool to organize to-do lists
                      </div>
                      <div className={styles.text}>
                        We have added a Checklist feature for creating detailed
                        step-by-step to-do lists.
                      </div>
                    </div>
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.wrapper_carousel}>
              <div className={styles.title_wrap}>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInDownBig}
                  duration={1}
                >
                  <h3>Challenges and solutions</h3>
                </AnimationOnScroll>
              </div>
              <CustomCarousel
                responsive={responsive}
                customItemClass={styles.itemSlider}
              >
                <div className={styles.itemSlider}>
                  <div className={`${styles.item} ${styles.item_1}`}>
                    <div className={styles.title}>
                      The hotel needed a housekeeping management tool to plan
                      and supervise housekeeping tasks
                    </div>
                    <div className={styles.subTitle}>
                      We have worked out a housekeeping management module that
                      allows the hotel staff to:
                    </div>

                    <ul className={globalStyles.list}>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Schedule housekeeping tasks</span> in advance
                          and assign them to different team members.
                        </div>
                      </li>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Mark tasks as completed,</span> including
                          confirmation of room cleanness, linen change, minibar
                          restock, maintenance inspections and other essential
                          criteria.
                        </div>
                      </li>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Comment</span> on tasks and/or report a
                          maintenance issue in real time.
                        </div>
                      </li>
                      <li>
                        <Circle color="#3F53D9" />
                        <div>
                          <span>Analyze and create reports</span> of
                          housekeeping performance to optimize costs and ensure
                          high quality housekeeping service for your guests.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.itemSlider}>
                  <div className={`${styles.item} ${styles.item_3}`}>
                    <div className={styles.title}>
                      The hotel was looking to improve communication among
                      departments and sharing info between shifts
                    </div>
                    <div className={styles.subTitle}>
                      Our team has suggested the following tools:
                    </div>
                    <ul className={globalStyles.list}>
                      <li>
                        <Circle color="#C653B9" />
                        <div>
                          <span>Staff chat</span> - a messenger for staff
                          communication.
                        </div>
                      </li>
                      <li>
                        <Circle color="#C653B9" />
                        <div>
                          <span>Digital handovers</span> is a feature for
                          creating digital handover notes and making them
                          visible to other staff members.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className={`${styles.item} ${styles.item_7}`}>
                    <div className={styles.title}>
                      The hotel needed a tool to organize to-do lists
                    </div>
                    <div className={styles.text}>
                      We have added a Checklist feature for creating detailed
                      step-by-step to-do lists.
                    </div>
                  </div>
                </div>
                <div className={styles.itemSlider}>
                  <div className={`${styles.item} ${styles.item_2}`}>
                    <div className={styles.title}>
                      The hotel wanted to better staff training and have a
                      digital database with checklists, guidelines and manuals
                    </div>
                    <div className={styles.text}>
                      We have added a <span>Handbook feature</span> that serves
                      as a knowledge source for staff. It enables managers to
                      assemble various collections of staff training materials,
                      such as standard operations procedures (SOPs), guidelines,
                      tutorials, articles, photos and videos.
                    </div>
                  </div>
                  <div className={`${styles.item} ${styles.item_4}`}>
                    <div className={styles.title}>
                      A more efficient way of keeping the staff informed was
                      needed
                    </div>
                    <div className={styles.text}>
                      <span>News & Announcements feature</span> has been added
                      for instant share of important news and updates among
                      hotel staff. It can be used to introduce a new staff
                      member, notify the staff of team/ hotel events or
                      regulations updates.
                    </div>
                  </div>
                </div>
                <div className={`${styles.item} ${styles.item_6}`}>
                  <div className={styles.title}>
                    The hotel required one central place to keep track of all
                    maintenance work and resources
                  </div>
                  <div className={styles.subTitle}>
                    Our team has built a comprehensive module for end-to-end
                    maintenance management with the following functionality:
                  </div>
                  <ul className={globalStyles.list}>
                    <li>
                      <Circle color="#FBD347" />
                      <div>
                        <span> Maintenance issues reporting </span>- each staff
                        member can take a photo of the problem, write details,
                        and create a maintenance ticket in seconds.
                      </div>
                    </li>
                    <li>
                      <Circle color="#FBD347" />
                      <div>
                        <span> Notifications</span> - maintenance teams are
                        instantly notified of any problems, can view details in
                        the application, including pictures, room numbers, and
                        notes from the staff who reported the issue.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.item} ${styles.item_6}`}>
                  <ul className={globalStyles.list}>
                    <li>
                      <Circle color="#FBD347" />
                      <div>
                        <span> Preventive maintenance schedule </span>- used to
                        create a schedule of preventive maintenance procedures
                        to avoid unexpected equipment break-downs, extra costs
                        and unhappy guests.
                      </div>
                    </li>
                    <li>
                      <Circle color="#FBD347" />
                      <div>
                        <span>Inventory control</span> - makes sure the hotel
                        never runs out of stock by keeping track of the
                        maintenance supplies usage and issuing notifications to
                        restock in time.
                      </div>
                    </li>
                    <li>
                      <Circle color="#FBD347" />
                      <div>
                        <span> Contractors network </span>- the feature makes it
                        possible to organize the records of your external hotel
                        maintenance contractors and coordinate collaboration
                        with them directly from the application.
                      </div>
                    </li>
                    <li>
                      <Circle color="#FBD347" />
                      <div>
                        <span>Analytics</span> - the feature analyzes the hotel
                        maintenance performance data and costs involved, and
                        generates custom reports on the most frequent problems
                        and team/ contractors productivity.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.itemSlider}>
                  <div className={`${styles.item} ${styles.item_5}`}>
                    <div className={styles.title}>
                      The hotel had problems with overlooking special requests
                      from guests and wanted to improve its guest services
                    </div>
                    <ul className={globalStyles.list}>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span>Guests requests tool </span> has been developed
                          to note down and keep track of guests’ special
                          requests. Having guests requests in the system
                          notifies the right team members and helps the staff to
                          address them asap.
                        </div>
                      </li>
                      <li>
                        <Circle color="#FBD347" />
                        <div>
                          <span> Complaints tool </span> has been added to help
                          the staff deal with complaints from unhappy guests
                          more efficiently. This feature allows the staff to
                          easily document the details of the issue(s) and assign
                          the right people to deal with it, as well as set up a
                          follow-up series until the problem is completely
                          resolved.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CustomCarousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
