import React, { FC } from 'react';
import { DotProps } from 'react-multi-carousel';
import styles from './CustomDotsCarousel.module.scss';

const CustomDotsCarousel: FC<{ onClick?: () => void; rest?: DotProps }> = ({
  onClick,
  ...rest
}): JSX.Element => {
  const { active } = rest as DotProps;
  return (
    <button
      className={`${active ? `${styles.active}` : ''} ${styles.dots}`}
      onClick={() => onClick?.()}
    />
  );
};

export default CustomDotsCarousel;
