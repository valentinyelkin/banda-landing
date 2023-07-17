import React, { useEffect, useRef } from 'react';
import useGrid from '../../../../utils/useGrid';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';

import styles from './yourAdvantages.module.scss';
import useRedrawGrid from '../../../../utils/useRedrawGrid';

const YourAdvantages: React.FunctionComponent = () => {
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const refAdvantagesContainer =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  const highlightAdvantages = (): void => {
    const container = refAdvantagesContainer.current;
    const advantages = container?.childNodes || [];

    advantages.forEach((item: HTMLElement) => {
      const element = item;
      const elementInfo = element.getBoundingClientRect();
      const position = elementInfo.left;
      const positionEnd = elementInfo.right;

      if (
        position >= 0 &&
        position < window.innerWidth &&
        positionEnd < window.innerWidth
      ) {
        element.style.opacity = '1';
      } else {
        element.style.opacity = '0.3';
      }
    });
  };

  useEffect(() => {
    highlightAdvantages();
  }, []);

  useGrid(refGridWrapper, 'rgba(23,23,24,0.1)', '#fff', true);
  useRedrawGrid(refGridWrapper, true);

  return (
    <section
      className={styles.advantagesWrapper}
      ref={refGridWrapper}
      data-header="full-yellow"
      data-horizontal
    >
      <h2 className={styles.advantagesBig}>
        <span />
        <span>advantages</span>
      </h2>
      <div
        className={styles.advantagesContainer}
        ref={refAdvantagesContainer}
        onWheel={highlightAdvantages}
      >
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesTechnologies} />
          <div className={styles.advantagesInfoTechnologies}>
            <h3 className={styles.advantagesTitle}>
              Popular
              <br />
              and reliable
              <br />
              technologies
            </h3>
            <p className={styles.advantagesDescription}>
              We use Node.js,
              <br />
              Angular and React
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesSpeed} />
          <div className={styles.advantagesInfoSpeed}>
            <h3 className={styles.advantagesTitle}>
              Being up
              <br />
              to speed
            </h3>
            <p className={styles.advantagesDescription}>
              At all the stages you work with a PM who updates you on the
              current progress
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesService} />
          <div className={styles.advantagesInfoService}>
            <h3 className={styles.advantagesTitle}>
              Service
              <br />
              convenience
            </h3>
            <p className={styles.advantagesDescription}>
              We substantially invest in UX/UI to make it comfortable for a user
              to utilize a service
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesRisks} />
          <div className={styles.advantagesInfoRisks}>
            <h3 className={styles.advantagesTitle}>Risks elimination</h3>
            <p className={styles.advantagesDescription}>
              We are a big team of interchangable coworkers. In case of any
              eventualities with a developer, your project never suffers being
              taken by another specialist
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesDeadlines} />
          <div className={styles.advantagesInfoDeadlines}>
            <h3 className={styles.advantagesTitle}>
              Assurance
              <br />
              of meeting
              <br />
              the deadlines
            </h3>
            <p className={styles.advantagesDescription}>
              We have rules but are flexible at the same time, so we are able to
              change the workflow to obtain the results within specified time
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesTeam} />
          <div className={styles.advantagesInfoTeam}>
            <h3 className={styles.advantagesTitle}>Team expansion</h3>
            <p className={styles.advantagesDescription}>
              We expand our team as and when necessary. So you do not have to
              look for new specialists
            </p>
          </div>
        </div>
      </div>
      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default YourAdvantages;
