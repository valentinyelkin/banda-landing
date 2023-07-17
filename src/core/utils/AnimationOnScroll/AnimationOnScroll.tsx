import React, { useEffect, useRef, createElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddElement } from './animationOnScroll.actions';
import styles from './animationOnScroll.module.scss';

export enum AnimationNames {
  fadeInUp = 'fadeInUp',
  fadeInDown = 'fadeInDown',
  zoomIn = 'zoomIn',
  fadeIn = 'fadeIn',
  fadeInRight = 'fadeInRight',
  fadeInLeft = 'fadeInLeft',
  rollInLeft = 'rollInLeft',
  rollInRight = 'rollInRight',
  appearLeft = 'appearLeft',
  fadeInDownBig = 'fadeInDownBig',
  fadeInLeftBig = 'fadeInLeftBig',
  fadeInRightBig = 'fadeInRightBig',
  fadeInUpBig = 'fadeInUpBig',
  fadeDown = 'fadeDown',
  shutterInTop = 'shutterInTop',
}

interface AnimationOnScroll {
  animationName: AnimationNames;
  duration: number;
  delay?: number;
  as?: 'span' | 'div';
  disabledAnimation?: boolean;
  parentRef?: React.RefObject<HTMLElement>;
}

const AnimationOnScroll: React.FunctionComponent<AnimationOnScroll> = ({
  children,
  animationName,
  duration,
  delay = 0,
  as,
  disabledAnimation,
  parentRef,
}) => {
  const [className, setClassName] = useState('');
  const dispatch = useDispatch();
  const animatedElement =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const animation = `animation: ${styles[animationName]} ${duration}s ${delay}s forwards`;
  const display = as ? 'display:block' : '';

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (!animatedElement) return;

    const element = animatedElement.current;

    if (!element) return;

    const rect =
      parentRef?.current?.getBoundingClientRect() ??
      element.getBoundingClientRect();
    const styles = `${animation};${display}`;

    if (!userAgent.includes('android')) {
      setClassName(styles[animationName]);
    }

    dispatch(
      new AddElement({
        y: rect.top,
        ref: element,
        parentRef: parentRef?.current,
        styles,
      }),
    );
  }, []);

  return as ? (
    createElement(
      `${as}`,
      {
        ref: animatedElement,
        className: disabledAnimation ? '' : styles[animationName],
      },
      children,
    )
  ) : (
    <div ref={animatedElement} className={className}>
      {children}
    </div>
  );
};

export default AnimationOnScroll;
