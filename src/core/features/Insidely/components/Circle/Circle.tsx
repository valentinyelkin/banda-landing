import React, { FC } from 'react';
import styles from './Circle.module.scss';

const Circle: FC<{ color?: string }> = ({ color }): JSX.Element => {
  return (
    <div
      className={styles.circle}
      style={{
        background: color || '#58D382',
      }}
    />
  );
};

export default Circle;
