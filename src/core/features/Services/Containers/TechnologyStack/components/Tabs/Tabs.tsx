import classNames from 'classnames';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Button from '../../../../../../shared/coreUi/Button/Button';
import styles from './tabs.module.scss';

const Tabs: React.FunctionComponent = ({
  children,
}: {
  children: ReactElement[];
}) => {
  const label = Array.isArray(children) ? children[0].props.label : '';
  const [activeTab, setActiveTab] = useState(label);
  const [activeTabMob, setactiveTabMob] = useState(0);
  const [activeAnimations, setActiveAnimations] = useState(false);
  const refTab =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const refLine =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  const handlerChangeTab = (label: string): void => {
    setActiveTab(label);
    setActiveAnimations(false);
  };

  const scrollTopMobile = (): void => {
    if (globalThis.outerWidth <= 668) {
      const parent = refTab?.current?.offsetParent as HTMLElement;
      const offset = parent.offsetTop;

      globalThis.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  const handlerPrevSlide = (): void => {
    const slidesQuantity = React.Children.toArray(children).length - 1;
    const newActiveSlide = activeTabMob > 0 ? activeTabMob - 1 : slidesQuantity;
    const { label } = children[newActiveSlide].props;

    setactiveTabMob(newActiveSlide);
    setActiveTab(label);
    scrollTopMobile();
  };

  const handlerNextSlide = (): void => {
    const slidesQuantity = React.Children.toArray(children).length - 1;
    const newActiveSlide = slidesQuantity > activeTabMob ? activeTabMob + 1 : 0;
    const { label } = children[newActiveSlide].props;

    setactiveTabMob(newActiveSlide);
    setActiveTab(label);
    scrollTopMobile();
  };

  const changeLine = (): void => {
    // needed elements
    const contentWrapper = refTab.current as HTMLDivElement;
    const mainWrapper = refLine.current as HTMLDivElement;

    const leftLineWrapper = document.getElementById(
      'wrapperLeftLine',
    ) as HTMLElement;
    const rightLineWrapper = document.getElementById(
      'wrapperRightLine',
    ) as HTMLElement;
    const contentTitle = contentWrapper.querySelector(
      '[data-name = "technologyHeader"]',
    ) as HTMLElement;
    const activeBtn = contentWrapper.querySelector(
      '[data-name = "activeBtn"]',
    ) as HTMLElement;

    // find height for main line
    const rightPoint = contentTitle.offsetTop + contentTitle.offsetHeight / 2;
    const leftPoint = activeBtn.offsetTop + activeBtn.offsetHeight / 2;
    const lineHeight = Math.abs(Math.floor(leftPoint) - Math.floor(rightPoint));

    // find width for left and right lines
    const activeButtonWidth = 390;

    const leftLineWidth =
      mainWrapper.offsetLeft - activeBtn.offsetLeft - activeButtonWidth - 70;
    const rightLineWidth =
      (contentTitle.parentElement?.offsetLeft || 0) -
      mainWrapper.offsetLeft +
      mainWrapper.offsetWidth -
      40;

    // set needed size for wrappers
    mainWrapper.style.height = `${lineHeight}px`;
    leftLineWrapper.style.width = `${leftLineWidth}px`;
    rightLineWrapper.style.width = `${rightLineWidth}px`;

    setActiveAnimations(true);
  };

  useEffect(() => {
    setActiveAnimations(false);
    changeLine();

    const animationTimeoutId = setTimeout(() => {
      setActiveAnimations(false);
    }, 1200);

    return () => {
      clearTimeout(animationTimeoutId);
    };
  }, [activeTab]);

  return (
    <>
      <div className={styles.technologyContent} ref={refTab}>
        <ul className={styles.technologyTabs}>
          {React.Children.map(children, (tab: React.ReactElement) => {
            const { label } = tab.props;
            const classes = classNames({
              [styles.technologyActive]: label === activeTab,
            });

            return (
              <li
                onClick={(): void => handlerChangeTab(label)}
                key={label}
                className={classes}
              >
                <button
                  data-name={label === activeTab ? 'activeBtn' : 'inactiveBtn'}
                  type="button"
                >
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className={styles.line} ref={refLine}>
          <div id="wrapperLeftLine" className={styles.wrapperLeftLine}>
            <div
              id="leftLine"
              className={classNames(styles.leftLine, {
                [styles.leftLineAnimation]: activeAnimations,
                [styles.leftLineFinishedAnimation]: !activeAnimations,
              })}
            />
          </div>
          <div id="wrapperMainLine" className={styles.wrapperMainLine}>
            <div
              id="mainLine"
              className={classNames(styles.mainLine, {
                [styles.mainLineAnimation]: activeAnimations,
                [styles.mainLineFinishedAnimation]: !activeAnimations,
              })}
            />
          </div>
          <div id="wrapperRightLine" className={styles.wrapperRightLine}>
            <div
              id="rightLine"
              className={classNames(styles.rightLine, {
                [styles.rightLineAnimation]:
                  activeAnimations && activeTab !== 'Web frontend',
                [styles.rightLineSecondAnimation]:
                  activeAnimations && activeTab === 'Web frontend',
                [styles.rightLineFinishedAnimation]: !activeAnimations,
              })}
            />
          </div>
        </div>
        {React.Children.map(children, (tab: React.ReactElement) => {
          if (tab.props.label !== activeTab) return undefined;
          return tab.props.children;
        })}
      </div>
      <div className={styles.technologyBtnWrapper}>
        <Button
          type="button"
          classes="sliderPrev"
          handlerClick={handlerPrevSlide}
        >
          <img src="/images/icons/arrow.svg" alt="slider arrow prev" />
        </Button>
        <Button
          type="button"
          classes="sliderNext"
          handlerClick={handlerNextSlide}
        >
          <img src="/images/icons/arrow.svg" alt="slider arrow prev" />
        </Button>
      </div>
    </>
  );
};

export default Tabs;
