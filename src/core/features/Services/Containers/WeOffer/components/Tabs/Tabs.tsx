import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './tabs.module.scss';

const Tabs: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.outerWidth <= 668);
  }, []);

  return (
    <>
      <ul className={styles.tabsList}>
        <li
          onClick={(): void => setActiveTab(0)}
          className={classNames(styles.tabItem, {
            [styles.tabItemActive]: activeTab === 0,
          })}
        >
          <button type="button">
            <span>Discovery stage</span>
          </button>
        </li>
        <li
          onClick={(): void => setActiveTab(1)}
          className={classNames(styles.tabItem, {
            [styles.tabItemActive]: activeTab === 1,
          })}
        >
          <button type="button">
            <span>UX/UI Design</span>
          </button>
        </li>
        <li
          onClick={(): void => setActiveTab(2)}
          className={classNames(styles.tabItem, {
            [styles.tabItemActive]: activeTab === 2,
          })}
        >
          <button type="button">
            <span>Web SAAS development</span>
          </button>
        </li>
      </ul>
      {(activeTab === 0 || isMobile) && (
        <div className={styles.offerRow}>
          <div className={styles.tabContent}>
            <h2>Discovery stage</h2>
            <p>
              Is the initial step in Product Development. We communicate closely
              with the customer to define the project vision and scope. We
              undertake user research, prototyping and idea testing then
              validate technical feasibility to create a user-friendly product
              with the right market fit.
            </p>
          </div>
          <div className={styles.offersInfo}>
            <div className={styles.offersOther}>
              <div>
                <h4>
                  <img src="/images/icons/offers/clock.svg" alt="Timeline" />
                  <span>Timeline</span>
                </h4>
                <ul>
                  <li>2 - 4 weeks</li>
                </ul>
              </div>
              <div>
                <h4>
                  <img
                    src="/images/icons/offers/deliverables.svg"
                    alt="Deliverables"
                  />
                  <span>Deliverables</span>
                </h4>
                <ul>
                  <li>Requirements Specification</li>
                  <li>Estimate</li>
                  <li>User flow</li>
                </ul>
              </div>
            </div>
            <div className={styles.offerPeople}>
              <h4>
                <img
                  src="/images/icons/offers/people.svg"
                  alt="People involved"
                />
                <span>People involved</span>
              </h4>
              <ul>
                <li>UX designer</li>
                <li>Developer</li>
                <li>PM</li>
                <li>Business analyst</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {(activeTab === 1 || isMobile) && (
        <div className={styles.offerRow}>
          <div className={styles.tabContent}>
            <h2>UX/UI Design</h2>
            <p>
              At the UX/UI stage, our designers the UX and UI design for mobile
              and web apps. Using mood boarding and preparing several UI
              concepts, we make sure the visual design of the future product.
            </p>
          </div>
          <div className={styles.offersInfo}>
            <div className={styles.offersOther}>
              <div>
                <h4>
                  <img
                    src="/images/icons/offers/figma.svg"
                    alt="Deliverables"
                  />
                  <span>Deliverables</span>
                </h4>
                <ul>
                  <li>Figma files</li>
                </ul>
              </div>
              <div>
                <h4>
                  <img src="/images/icons/offers/clock.svg" alt="Timeline" />
                  <span>Timeline</span>
                </h4>
                <ul>
                  <li>1 - 3 month</li>
                </ul>
              </div>
            </div>
            <div className={styles.offerPeople}>
              <h4>
                <img
                  src="/images/icons/offers/people.svg"
                  alt="People involved"
                />
                <span>People involved</span>
              </h4>
              <ul>
                <li>UX designer</li>
                <li>UI designer</li>
                <li>PM</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {(activeTab === 2 || isMobile) && (
        <div className={styles.offerRow}>
          <div className={styles.tabContent}>
            <h2>Web SAAS development</h2>
            <p>
              Innovative design and intuitive functionality implemented by our
              frontend and backend team result in an attractive webservice. We
              set up reliable, secure, efficient, and scalable server
              architecture so that our product function well, even if it serves
              more than 100 000 users.
            </p>
          </div>
          <div className={styles.offersInfo}>
            <div className={styles.offersOther}>
              <div>
                <h4>
                  <img src="/images/icons/offers/clock.svg" alt="Timeline" />
                  <span>Timeline</span>
                </h4>
                <ul>
                  <li>6+ month</li>
                </ul>
              </div>
              <div>
                <h4>
                  <img
                    src="/images/icons/offers/figma.svg"
                    alt="Deliverables"
                  />
                  <span>Deliverables</span>
                </h4>
                <ul>
                  <li>
                    Source code
                    <br />
                    on your server
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.offerPeople}>
              <h4>
                <img
                  src="/images/icons/offers/people.svg"
                  alt="People involved"
                />
                <span>People involved</span>
              </h4>
              <ul>
                <li>Team lead</li>
                <li>Frontend developer</li>
                <li>Backend developer</li>
                <li>PM</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
