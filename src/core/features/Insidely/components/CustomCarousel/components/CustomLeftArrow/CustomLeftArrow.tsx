import React, { FC } from 'react';
import styles from './CustomLeftArrow.module.scss';

const CustomLeftArrow: FC<{ onClick?: () => void }> = ({
  onClick,
}): JSX.Element => {
  return (
    <button
      className={styles.customLeftArrowCarousel}
      onClick={() => onClick?.()}
    >
      <span />
    </button>
  );
};

export default CustomLeftArrow;
