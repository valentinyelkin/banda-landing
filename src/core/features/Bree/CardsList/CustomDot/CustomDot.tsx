import { FC } from 'react';
import classNames from 'classnames';
import { DotProps } from 'react-multi-carousel';
import styles from './customDot.module.scss';

interface CustomDotProps extends DotProps {
  classes?: string;
  classesActive?: string;
}

const CustomDot: FC<CustomDotProps> = ({ ...rest }) => {
  const { active, classes, classesActive } = rest;
  const dotStyles = classNames(
    styles.wrapperDots,
    active && [styles.active],
    classes && [styles[classes]],
    classesActive && active && [styles[classesActive]],
  );
  return (
    <>
      <div className={dotStyles} />
    </>
  );
};

export default CustomDot;
