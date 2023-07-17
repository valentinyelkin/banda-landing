import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useIsInViewport } from '../../../utils/useIsInViewport';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';
import styles from './lineDesktop.module.scss';

interface LineDesktopProps {
  refTitle: React.MutableRefObject<HTMLDivElement | null>;
  refMapPoint: React.MutableRefObject<HTMLDivElement | null>;
}

interface RefsForDrawing extends LineDesktopProps {
  refLine: React.MutableRefObject<HTMLDivElement | null>;
  refLeftLine: React.MutableRefObject<HTMLDivElement | null>;
  refRightLine: React.MutableRefObject<HTMLDivElement | null>;
}

export const LineDesktop: FC<LineDesktopProps> = ({
  refTitle,
  refMapPoint,
}) => {
  const [activeAnimations, setActiveAnimations] = useState(false);

  const refLine =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const refLeftLine =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const refRightLine =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isInViewPort = useIsInViewport(refTitle);

  const drawLine = ({
    refLine,
    refLeftLine,
    refRightLine,
    refMapPoint,
    refTitle,
  }: RefsForDrawing): void => {
    // needed elements
    const lineWrapper = refLine.current as HTMLDivElement;
    const leftLineWrapper = refLeftLine.current as HTMLDivElement;
    const rightLineWrapper = refRightLine.current as HTMLDivElement;
    const mapPoint = refMapPoint.current as HTMLDivElement;
    const title = refTitle.current as HTMLHeadingElement;

    // find height for main line
    const rightPoint = mapPoint.offsetTop + mapPoint.offsetHeight / 2;
    const leftPoint = title.offsetTop + title.offsetHeight;
    const lineHeight = Math.abs(Math.floor(leftPoint) - Math.floor(rightPoint));

    // find width for left and right lines
    const titleWidth = title.clientWidth + 20;
    const leftLineWidth =
      lineWrapper.offsetLeft - title.offsetLeft - titleWidth;
    const rightLineWidth =
      (mapPoint.offsetLeft || 0) -
      lineWrapper.offsetLeft +
      lineWrapper.offsetWidth -
      20;

    // set needed size for wrappers
    lineWrapper.style.height = `${lineHeight}px`;
    leftLineWrapper.style.width = `${leftLineWidth}px`;
    rightLineWrapper.style.width = `${rightLineWidth}px`;

    setActiveAnimations(true);
  };

  useEffect(() => {
    setActiveAnimations(false);

    if (isInViewPort && !isTablet && !isMobile) {
      drawLine({ refTitle, refMapPoint, refLine, refLeftLine, refRightLine });
    }
  }, [isInViewPort, isTablet, isMobile]);

  return (
    <div className={styles.line} ref={refLine}>
      <div ref={refLeftLine} className={styles.wrapperLeftLine}>
        <div
          className={classNames(styles.leftLine, {
            [styles.leftLineAnimation]: activeAnimations,
            [styles.leftLineFinishedAnimation]: !activeAnimations,
          })}
        />
      </div>
      <div className={styles.wrapperMainLine}>
        <div
          className={classNames(styles.mainLine, {
            [styles.mainLineAnimation]: activeAnimations,
            [styles.mainLineFinishedAnimation]: !activeAnimations,
          })}
        />
      </div>
      <div ref={refRightLine} className={styles.wrapperRightLine}>
        <div
          className={classNames(styles.rightLine, {
            [styles.rightLineAnimation]: activeAnimations,
            [styles.rightLineSecondAnimation]: activeAnimations,
            [styles.rightLineFinishedAnimation]: !activeAnimations,
          })}
        />
      </div>
    </div>
  );
};
