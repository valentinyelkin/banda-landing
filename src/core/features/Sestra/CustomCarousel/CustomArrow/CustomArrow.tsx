import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './custom-arrow.module.scss';

export enum ArrowVariant {
  LEFT = 'arrowLeft',
  RIGHT = 'arrowRight',
}

type CustomArrowProps = {
  variant: ArrowVariant;
  onClick?: () => void;
  disabled: boolean;
};

const CustomArrow: FC<CustomArrowProps> = ({ onClick, variant, disabled }) => {
  const customArrowClasses = classNames(styles.customArrow, styles[variant], {
    [styles.disabled]: disabled,
  });

  return (
    <button onClick={onClick} className={customArrowClasses}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42 25C42.5523 25 43 24.5523 43 24C43 23.4477 42.5523 23 42 23V25ZM7 23C6.44772 23 6 23.4477 6 24C6 24.5523 6.44772 25 7 25V23ZM42 23L7 23V25L42 25V23Z"
          fill="#9FC63B"
        />
        <path
          d="M18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929C18.3166 10.9024 17.6834 10.9024 17.2929 11.2929L18.7071 12.7071ZM17.2929 36.7071C17.6834 37.0976 18.3166 37.0976 18.7071 36.7071C19.0976 36.3166 19.0976 35.6834 18.7071 35.2929L17.2929 36.7071ZM17.2929 11.2929L6 22.5858L7.41421 24L18.7071 12.7071L17.2929 11.2929ZM6 25.4142L17.2929 36.7071L18.7071 35.2929L7.41421 24L6 25.4142ZM6 22.5858C5.21895 23.3668 5.21895 24.6332 6 25.4142L7.41421 24L6 22.5858Z"
          fill="#9FC63B"
        />
      </svg>
    </button>
  );
};

export default CustomArrow;
