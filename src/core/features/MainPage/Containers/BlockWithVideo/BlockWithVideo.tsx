import React, { useState, useRef } from 'react';
import useGrid from '../../../../utils/useGrid';
import styles from './blockWithVideo.module.scss';

import ModalVideo from '../../../../shared/Modal/ModalVideo/ModalVideo';
import Button from '../../../../shared/coreUi/Button/Button';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';
import useRedrawGrid from '../../../../utils/useRedrawGrid';

const BlockWithVideo: React.FunctionComponent = () => {
  const [roundedText] = useState(
    `System   System   System   System   System   System   System   System   System   System   `,
  );
  const [roundedTextArr] = useState(roundedText.split(''));
  const [modalOpen, setModalOpen] = useState(false);
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  const handlerClosePopup = (): void => {
    setModalOpen(!modalOpen);
  };

  const scrollToFormInMobile = (): void => {
    const formSection = document.getElementById('discussWrapper');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useGrid(refGridWrapper, 'rgba(23,23,24,0.1)', '#fff');
  useRedrawGrid(refGridWrapper);

  return (
    <>
      <section
        className={styles.mainWrapper}
        ref={refGridWrapper}
        id="first-section"
      >
        <div className={styles.yellowBlock}>
          <div className={styles.bigLettersWrapper}>
            <h2 className={styles.firstLine}>
              <span>New business</span>
              <span>opportunities with</span>
            </h2>
            <h1 className={styles.lastLine}>
              <span>We help</span>
              <span>startups</span>
              <span className={styles.yellowText}>
                to create digital product
              </span>
            </h1>
          </div>
          <div className={styles.bigLettersMobileWrapper}>
            <h2 className={styles.firstMobileLine}>
              <span>New business</span>
              <span className={styles.yellowText}>opportunities</span>
              <span>with saas system</span>
            </h2>
            <h2 className={styles.lastMobileLine}>
              <span>
                <span className={styles.yellowText}>We help</span> startups to
              </span>
              <span>create saas system</span>
            </h2>
          </div>
          <p className={styles.mainText}>
            We know everything about the budget, terms and requirements of the
            business. This approach allows you to use the budget rationally and
            guarantees the results.
          </p>
          <div className={styles.mobileBtnWrapper}>
            <Button
              classes="yellowBtnWithIcon"
              handlerClick={scrollToFormInMobile}
            >
              <div>
                discuss the project
                <img src="/images/icons/arrow.svg" alt="arrow" />
              </div>
            </Button>
            {/*<Button classes="transparentBtnWithIcon">*/}
            {/*  <div>*/}
            {/*    work process*/}
            {/*    <img src="/images/icons/play-btn.svg" alt="arrow" />*/}
            {/*  </div>*/}
            {/*</Button>*/}
          </div>
        </div>
        <div
          className={styles.titlesBlock}
          // onClick={(): void => setModalOpen(!modalOpen)}
        >
          <div className={styles.titlesWrapper}>
            <span className={styles.roundedTitle}>
              {roundedTextArr.map((char, index) => {
                const key = char + index;
                return (
                  <span key={key} className={styles[`char${index}`]}>
                    {char}
                  </span>
                );
              })}
            </span>
            <span className={styles.smallRoundedTitle}>
              {roundedTextArr.map((char, index) => {
                const key = char + index;
                return (
                  <span key={key} className={styles[`char${index}`]}>
                    {char}
                  </span>
                );
              })}
            </span>
          </div>
          <video className={styles.video} autoPlay muted>
            <source src="/videos/AppNavi_animate.mp4" type="video/mp4" />
          </video>
        </div>

        {modalOpen && <ModalVideo clickHandler={handlerClosePopup} />}
        <AnimatedLine backgroundColor="#333" filledColor="#fff" />
      </section>
    </>
  );
};

export default BlockWithVideo;
