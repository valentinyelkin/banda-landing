import Link from 'next/link';
import React, { useRef, useState } from 'react';
import useGrid from '../../../../utils/useGrid';

import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';
import styles from './welcomeToBlog.module.scss';
import useRedrawGrid from '../../../../utils/useRedrawGrid';

const WelcomeToBlog: React.FunctionComponent = () => {
  const [roundedText] = useState(
    `System   System   System   System   System   System   System   System   System   System   `,
  );
  const [roundedTextArr] = useState(roundedText.split(''));
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  useGrid(refGridWrapper, 'rgba(167,167,167,0.1)', 'rgba(23, 23, 24, 0.4)');
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.welcomeWrapper}
      ref={refGridWrapper}
      data-header="blog-header"
    >
      <div className={styles.welcomeContent}>
        <div className={styles.welcomeInfo}>
          <h1 className={styles.welcomeTitle}>
            Welcome to
            <br />
            BandaPixels blog
          </h1>
          <p className={styles.welcomeText}>
            Here we have articles that will help you to move forward with your
            projects using budget more efficiently and as a result enhance your
            business.
          </p>
        </div>
        <div className={styles.welcomeBtnsWrapper}>
          <Link href="/">
            <a className={styles.welcomeBtn}>Who we are?</a>
          </Link>
          <Link href="/projects">
            <a className={styles.welcomeLink}>Customer story</a>
          </Link>
        </div>
      </div>
      <div className={styles.titlesWrapper}>
        <h3 className={styles.roundedTitle}>
          {roundedTextArr.map((char, index) => {
            const key = char + index;
            return (
              <span key={key} className={styles[`char${index}`]}>
                {char}
              </span>
            );
          })}
        </h3>
        <h3 className={styles.smallRoundedTitle}>
          {roundedTextArr.map((char, index) => {
            const key = char + index;
            return (
              <span key={key} className={styles[`char${index}`]}>
                {char}
              </span>
            );
          })}
        </h3>
      </div>
      <img src="/images/icons/saas-black.png" alt="saas" />
      <AnimatedLine backgroundColor="#BDBDBD" filledColor="#333" />
    </section>
  );
};

export default WelcomeToBlog;
