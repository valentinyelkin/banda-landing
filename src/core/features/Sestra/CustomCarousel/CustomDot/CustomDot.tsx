import classNames from 'classnames';
import React, { FC } from 'react';
import { DotProps } from 'react-multi-carousel';
import styles from './custom-dot.module.scss';

const CustomDot: FC<DotProps> = ({ onClick, ...rest }) => {
  const { active } = rest;
  const customDotClasses = classNames(
    styles.customDot,
    active ? styles.active : styles.inactive,
  );

  return <button className={customDotClasses} onClick={onClick} />;
};

export default CustomDot;
