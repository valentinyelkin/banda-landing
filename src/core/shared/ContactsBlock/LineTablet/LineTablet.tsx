import React, { FC, useEffect, useRef } from 'react';
import { useIsInViewport } from '../../../utils/useIsInViewport';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';
import styles from './lineTablet.module.scss';

interface LineTabletProps {
  refTitle: React.MutableRefObject<HTMLDivElement | null>;
  refMapPoint: React.MutableRefObject<HTMLDivElement | null>;
}

interface RefsForDrawing extends LineTabletProps {
  refLineTablet: React.MutableRefObject<HTMLDivElement | null>;
}

const drawLine = ({ refMapPoint, refTitle, refLineTablet }: RefsForDrawing) => {
  // needed elements
  const mapPoint = refMapPoint.current as HTMLDivElement;
  const title = refTitle.current as HTMLHeadingElement;
  const lineTablet = refLineTablet.current as HTMLHeadingElement;

  // title coordinates
  const titleLeftPoint = title.offsetLeft + title.clientWidth + 36;
  const titleTopPoint = title.offsetTop + title.clientHeight / 2 + 8;

  // point coordinates
  const pointCenter = mapPoint.offsetLeft + mapPoint.clientWidth / 2;
  const pointTop = mapPoint.offsetTop;

  // line sizes
  const lineWidth = Math.round(pointCenter - titleLeftPoint);
  const lineHeight = Math.round(pointTop - titleTopPoint);

  // set line sizes
  lineTablet.style.width = `${lineWidth}px`;
  lineTablet.style.height = `${lineHeight}px`;
};

export const LineTablet: FC<LineTabletProps> = ({ refTitle, refMapPoint }) => {
  const refLineTablet =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isInViewPort = useIsInViewport(refTitle);

  useEffect(() => {
    if (isInViewPort && isTablet && !isMobile) {
      drawLine({ refTitle, refMapPoint, refLineTablet });
    }
  }, [isInViewPort, isTablet, isMobile]);

  return <div ref={refLineTablet} className={styles.lineTablet} />;
};
