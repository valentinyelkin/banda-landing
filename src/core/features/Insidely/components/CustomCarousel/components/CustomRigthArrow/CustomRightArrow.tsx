import React, { FC } from 'react';
import styles from './CustomRightArrow.module.scss';

const CustomRightArrow: FC<{ onClick?: () => void }> = ({
  onClick,
}): JSX.Element => {
  return (
    <button
      className={styles.customRightArrowCarousel}
      onClick={() => onClick?.()}
    >
      <span />
    </button>
  );
};

export default CustomRightArrow;
