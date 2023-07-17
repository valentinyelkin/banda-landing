import React, { FC } from 'react';
import styles from './heading.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';
import classNames from 'classnames';

export enum TextAlign {
  LEFT = 'leftAlign',
  RIGHT = 'rightAlign',
  CENTER = 'centerAlign',
}

export type HeadingProps = {
  topText: string;
  bottomText: string;
  textAlign?: TextAlign;
  topAboveUpperBorder?: boolean;
};

const Heading: FC<HeadingProps> = ({
  topText,
  bottomText,
  textAlign = TextAlign.CENTER,
  topAboveUpperBorder,
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const headingClasses = classNames(
    styles.heading,
    styles[textAlign],
    topAboveUpperBorder && styles.topAboveUpperBorder,
  );

  return (
    <AnimationOnScroll
      animationName={AnimationNames.fadeIn}
      duration={3}
      as="div"
      disabledAnimation={isTablet || isMobile}
    >
      <h2 className={headingClasses}>
        {topText} <span>{bottomText}</span>
      </h2>
    </AnimationOnScroll>
  );
};

export default Heading;
